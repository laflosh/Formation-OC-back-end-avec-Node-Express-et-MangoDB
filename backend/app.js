const express = require("express");

const app = express();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-requested-With, Content, Accept, Content-Type, Authorization");
    res.setHeader("Access-Control-Allow-Methods","GET, POST, PUT, DELETE, PATCH, OPTION");
    next();
});

app.use("/api/stuff",(req, res, next) => {
    const stuff = [
        {
            _id: "skhdbfisdbf",
            title: "Mon premier objet",
            description: "Les infos de mon première objet",
            imageUrl: "",
            price: 4900,
            userId: "euhfsfhe"
        },
        {
            _id: "fghisudhgf",
            title: "Mon deuxième objet",
            description: "Les infos de mon deuxième objet",
            imageUrl: "",
            price: 2900,
            userId: "fjsppezj"
        },
    ];

    res.status(200).json(stuff);
});

module.exports = app;