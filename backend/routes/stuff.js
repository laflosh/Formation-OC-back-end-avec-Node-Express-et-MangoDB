const express = require("express");
const router =express.Router();

const stuffCtrl = require("../controllers/stuff");

//Création d'une annonce
router.post("/", stuffCtrl.createThing);

//Modification info sur un objet
router.put("/:id", stuffCtrl.modifyThing);

//Suppression d'un objet
router.delete("/:id", stuffCtrl.deleteThing);

//Envoie d'une annonce en fonction de son id
router.get("/:id", stuffCtrl.getOneThing);

//Envoie de toutes les annonces de la base de données
router.get("/", stuffCtrl.getAllThings);

module.exports = router;