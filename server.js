const express = require("express");
const http = require("http");
const process = require("process");
const bodyParser = require("body-parser");

const mongoose = require("mongoose");
const productoDAO = require("./modelos/productoDAO");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.get("*", (req, res) => {
//   res.send("Hello world!");
// });

app.get("/producto", (req, res) => {
  productoDAO.getProducto(res);
});

app.get("/producto/promesa", (req, res) => {
  productoDAO
    .getProductoPromesa()
    .then(productos => res.send({ success: true, productos }))
    .catch(error => res.send({ success: false, error }));
});

app.post("/producto", (req, res) => {
  productoDAO
    .agregarProducto(req.body)
    .then(producto => res.send({ success: true, producto }))
    .catch(error => res.send({ success: false, error }));
});

app.put("/producto", (req, res) => {
  productoDAO
    .actualizarProducto(req.body)
    .then(producto => res.send({ success: true, producto }))
    .catch(error => res.send({ success: false, error }));
});

app.get("/", (req, res) => {
  res.send("Hola! mundo!");
});

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

// CONECTAMOS MONGO
mongoose.connect("mongodb://localhost:27017/ecommerce", {
  useNewUrlParser: true
});

server.listen(port, () => console.log(`Magic Happens on port:${port}`));
