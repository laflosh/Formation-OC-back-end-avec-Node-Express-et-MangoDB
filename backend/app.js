const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Thing = require("./models/Thing");

mongoose.connect("mongodb+srv://laflosh:GxE2jkt4DqAmwqDkLKkh@flecointre-work.cq9bal5.mongodb.net/?retryWrites=true&w=majority",
    {   useNewUrlParser: true,
        useUnifiedTopology: true})
.then(() => console.log("Connexion à MongoDB réussie !"))
.catch(() => console.log("Connexion à MongoDB échoué !"));

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-requested-With, Content, Accept, Content-Type, Authorization");
    res.setHeader("Access-Control-Allow-Methods","GET, POST, PUT, DELETE, PATCH, OPTION");
    next();
});

//Création d'une annonce
app.post("/api/stuff", (req, res, next) => {
    delete req.body._id;
    const thing = new Thing({
        ...req.body
    });
    thing.save()
    .then(() => res.status(201).json({ message: "objet enregistré !" }))
    .catch(() => res.status(400).json({ error }));
});

//Envoie d'une annonce en fonction de son id
app.get("/api/stuff/:id", (req, res, next) => {
    Thing.findOne({ _id: req.params.id })
        .then(thing => res.status(200).json(thing))
        .catch(error => res.status(404).json({ error }));
});

//Envoie de toutes les annonces de la base de données
app.get("/api/stuff",(req, res, next) => {
    Thing.find()
    .then(things => res.status(200).json(things))
    .catch(error => res.status(400).json({error}));
});

module.exports = app;

// database acces:
// laflosh
// GxE2jkt4DqAmwqDkLKkh