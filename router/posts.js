//importo prima express
const express = require("express");

//importo la classe router
const router = express.Router();

//index
router.get("/", (req,res) => {
    res.send("lista dei post");
})

//show
router.get("/:id",(req,res) => {
    res.send("dettaglio del post"+req.params.id);
})

//store
router.post("/",(req,res) => {
    res.send("inserimento nuovo post");
})

//update
router.put("/:id",(req,res) => {
    res.send(`modifica totale del post ${req.params.id}`);
})

//modify
router.patch("/:id",(req,res) => {
    res.send(`modifica parziale del post ${req.params.id}`);
})

//destroy
router.delete("/:id",(req,res) => {
    res.send(`cancellazione del post ${req.params.id}`);
})

//esporto il router
module.exports = router;