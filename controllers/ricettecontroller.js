//importo l'array di oggetti
const ricettario = require("../data/ricettario.js")

//definizione della funzione index
function index(req, res) {
    //filtraggio: uso delle query string
    const tags = req.query.tags;

    //definizione della variabile che contiene il ricettario filtrato e la inizializziamo con il valore contenuto nella variabile ricettario
    let filteredRicettario = ricettario;

    //controllo che tags abbia un valore definito
    if (tags) {
        //operazioni per il filtraggio
        filteredRicettario = ricettario.filter((ricetta) => ricetta.tags.includes(tags))
    }


    res.json(filteredRicettario)
}

//definizione della funzione show
function show(req, res) {

    //recupero il valore del parametro dinamico
    const id = parseInt(req.params.id);

    //uitlizzo il valore contenuto nella variabile dichiarata ed inizializzata precedentemente per recuperare la pizza
    const ricetta = ricettario.find(ricetta => ricetta.id === id);

    //verifico che la variabile pizza contenga qualcosa
    if (ricetta === undefined) {

        //dobbiamo restituire un messaggio di errore ma bisogna impostare anche lo stato corretto della risposta

        //imposto lo stato della risposta
        res.status(404)

        //restituisco un json contenente il messaggio di errore
        res.json({
            error: "Not Found",
            message: "Ricetta non trovata"
        })



    }

    //restituisco la ricetta
    res.json(ricetta);



}

//definizione della funzione store
function store(req, res) {
    //definizione dell'id dell'elemento da inserire
    const newId = ricettario[ricettario.length - 1].id + 1

    //creo il nuovo oggetto da inserire nell'array
    const newPizza = {
        id: newId,
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags
    }

    //pusho il nuovo oggetto nell'array
    ricettario.push(newPizza);
    console.log(ricettario)
    //restituisco il codice di stato 201
    res.status(201);
    res.json(newPizza);

}

//definizione della funzione update
function update(req, res) {

    //recupero il valore passato come parametro dinamico e lo converto in intero
    const id = parseInt(req.params.id)

    //vado a recuperare l'elemento avente come id quello che abbiamo passato come parametro
    const ricetta = ricettario.find(ricetta => ricetta.id === id);

    //controllo se esiste la ricetta con quell'id, se NON esiste allora restituisco un messaggio e l'errore 404
    if (!ricetta) {
        res.status(404);

        res.json({
            error: "Not Found",
            message: "Ricetta non trovata"
        })
    }

    //nel caso in cui la ricetta esiste, vado a modificarla
    ricetta.title = req.body.title,
        ricetta.content = req.body.content,
        ricetta.image = req.body.image,
        ricetta.tags = req.body.tags

    res.json(ricetta);
}

//definizione della funzione modify
function modify(req, res) {
    res.send(`modifica parziale della ricetta ${req.params.id}`);
}

//definizione della funzione destroy
function destroy(req, res) {
    //recupero il valore passato come parametro dinamico e lo converto in intero
    const id = parseInt(req.params.id)

    //vado a recuperare l'elemento avente come id quello che abbiamo passato come parametro
    const ricetta = ricettario.find(ricetta => ricetta.id === id);

    //se la ricetta contiene qualcosa allora eseguo la cancellazione, altrimenti devo restituire un messaggio
    if (!ricetta) {
        res.status(404);

        res.json({
            error: "Not Found",
            message: "Ricetta non trovata"
        })
    }

    //vado ad eliminare l'elemento trovato dall'array atrraverso il metodo splice
    ricettario.splice(ricettario.indexOf(ricetta), 1);


    res.sendStatus(204);

    console.log(ricettario)

}

//vado ad esportare il controller
module.exports = { index, show, store, update, modify, destroy }