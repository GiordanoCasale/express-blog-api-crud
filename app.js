//importazione di express
const express = require("express")

//importo il middleware
const errorsHandler = require("./middleware/errorsHandler.js");
const notFound = require("./middleware/notFound.js");

//inizializzo express dentro la variabile app
const app = express();

//definizione del numero di porta
const port = 3000;

//indico a express di trattare i body delle richieste come json
app.use(express.json());

//importo il router in una variabile
const postsRouter = require("./router/posts.js");

//vado ad utilizzare postsRouter per creare effettivamnte le rotte
app.use("/posts", postsRouter )

//impostazione dello strumento per recuperare gli asset statici
app.use(express.static("public"));

//definizione della rotta base
app.get("/", (req, res) => {
    res.send("I miei post");
})

//vado a registrare sotto tutte le rotte il middleware
app.use(errorsHandler);
app.use(notFound);

//inserimento del metodo che lascia in ascolto il nostro server
app.listen(port, () => {
    console.log(`Server del blog in ascolto alla porta ${port}`);
})


