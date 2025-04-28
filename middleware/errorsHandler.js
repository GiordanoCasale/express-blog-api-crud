function errorsHandler(err, req, res, next){
    res.status(500);
    res.json({
        error: "si è verificato un errore interno al server, riprovare più tardi!"
    });
}

module.exports= errorsHandler;