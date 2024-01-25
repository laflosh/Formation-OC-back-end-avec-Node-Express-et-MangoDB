const express = require("express");

const app = express();

app.use((req, res, next) =>{
    console.log("requete recue");
    next();
});

app.use((req, res, next) => {
    res.status(201);
    next();
})

app.use((req, res, next) => {
    res.json({message:"votre requte a bien été reçu"});
    next();
});

app.use((req, res, next) => {
    console.log("response envoyé avec succès")
})

module.exports = app;