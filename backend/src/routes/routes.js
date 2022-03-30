const express = require('express');
const app = express();

app.use(require('./products'));

app.get("/", function(req, res) {
    const menssage = "<h2>Api Banco Estado</h2>"
    res.send(menssage);
});

module.exports = app;