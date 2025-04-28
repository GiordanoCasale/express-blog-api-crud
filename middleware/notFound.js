function notFound(req, res, next){
    res.status(404);
    res.json({
        error: "Not found",
        message: "pagina non trovata"
    })
}

module.exports= notFound;
