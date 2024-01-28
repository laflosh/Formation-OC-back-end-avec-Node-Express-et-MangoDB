const express = require("express");
const router =express.Router();
const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");

const stuffCtrl = require("../controllers/stuff");

//Création d'une annonce
router.post("/", auth, multer, stuffCtrl.createThing);

//Modification info sur un objet
router.put("/:id", auth, stuffCtrl.modifyThing);

//Suppression d'un objet
router.delete("/:id", auth, stuffCtrl.deleteThing);

//Envoie d'une annonce en fonction de son id
router.get("/:id", auth, stuffCtrl.getOneThing);

//Envoie de toutes les annonces de la base de données
router.get("/", auth, stuffCtrl.getAllThings);

module.exports = router;