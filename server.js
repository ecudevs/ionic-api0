const express = require("express");
const http = require("http");
const process = require("process");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.get("*", (req, res) => {
//   res.send("Hello world!");
// });

app.get("/hello", (req, res) => {
  res.send("Hola!");
});

app.get("/hello/:nombre", (req, res) => {
  res.send("Hola! por post!" + req.params.nombre);
});

app.post("/producto/insertar", (req, res) => {
  res.send("Hola! por post!" + req.body.nombre + " " + req.body.apellido);
});

app.put("/hello", (req, res) => {
  res.send("Hola! por put!" + req.body.nombre + " " + req.body.apellido);
});

const port = process.env.PORT || "9000";
app.set("port", port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Magic Happens on port:${port}`));
