//importo prima express
const express = require("express");

//importo la classe router
const router = express.Router();

//importo il ricettario
const ricettario = ("../data/ricettario.js")


//importo il controller delle ricette
const ricetteController = require("../controllers/ricettecontroller.js")

//index
router.get("/", ricetteController.index)
//show
router.get("/:id", ricetteController.show)
//store
router.get("/", ricetteController.store)
//update
router.get("/:id", ricetteController.update)

//modify
router.get("/:id", ricetteController.modify)

//destroy
router.get("/:id", ricetteController.index)

//esporto il router
module.exports = router;