const express = require("express")

const app = express()

app.use((req, res) => {
    res.json({message:"votre requte a bien été reçu"})
})

module.exports = app;