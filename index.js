const express = require("express");
const path = require("path");



const app = express();

app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000");
})

app.get("/", function(req, res) {
    res.send("Hola Mundo");
})

app.get("/gif", function(req, res){
    let htmlPath = path.join(__dirname, "/public/img/gif1.gif");
    res.sendFile(htmlPath);
})

