const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productosSchema = new Schema({
  descripcion: { type: String, required: true },
  foto: { type: String, required: true },
  precio: { type: Number, required: true },
  categoria: String,
  stock: Number,
  edad: Number,
  feCreacion: Date,
  estado: { type: String, default: "A" }
});

const producto = mongoose.model("producto", productosSchema);
module.exports = producto;
