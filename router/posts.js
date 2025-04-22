//importo prima express
const express = require("express");

//importo la classe router
const router = express.Router();

//importo il ricettario
const ricettario = ("../data/ricettario.js")

//importo il controller delle ricette
const 

//index
router.get("/", (req,res) => {
    res.send("lista delle ricette");
})

//show
router.get("/:id",(req,res) => {
    res.send("dettaglio della ricetta"+req.params.id);
})

//store
router.post("/",(req,res) => {
    res.send("inserimento nuova ricetta");
})

//update
router.put("/:id",(req,res) => {
    res.send(`modifica totale della ricetta ${req.params.id}`);
})

//modify
router.patch("/:id",(req,res) => {
    res.send(`modifica parziale della ricetta ${req.params.id}`);
})

//destroy
router.delete("/:id",(req,res) => {
    res.send(`cancellazione della ricetta ${req.params.id}`);
})

//esporto il router
module.exports = router;