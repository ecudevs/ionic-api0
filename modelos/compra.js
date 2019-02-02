const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const comprasSchema = new Schema({
  usuario: { type: Schema.Types.Mixed },
  producto: { type: Schema.Types.Mixed },
  feCreacion: Date
});

const compra = mongoose.model("compra", comprasSchema);
module.exports = compra;
