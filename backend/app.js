require("./src/config/config");

const express = require("express");
const path = require("path");
const app = express();

app.use(require("./src/routes/routes"));

app.listen(process.env.PORT, () => {
    console.log("Escuchando puerto: ", process.env.PORT);
});