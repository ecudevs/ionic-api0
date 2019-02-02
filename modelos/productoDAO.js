const Producto = require("./producto");
const ObjectId = require("mongoose").SchemaType.ObjectId;

function productoDAO() {
  this.getProducto = function(res) {
    Producto.find().then(productos => {
      res.send({ productos });
    });
  };
  this.getProductoPromesa = function() {
    return new Promise((resolve, reject) => {
      Producto.find()
        .then(productos => {
          resolve(productos);
        })
        .catch(error => reject(error));
    });
  };
  this.getProductoAsync = async function(res) {
    try {
      const productos = await Producto.find();
      res.send({ success: true, productos });
    } catch (error) {
      res.send({ success: false, error });
    }
  };

  this.agregarProducto = async function(productoParam) {
    return new Promise((resolve, reject) => {
      const productoAGuardar = new Producto(productoParam);
      // const productoGuardado = await productoAGuardar.save();
      productoAGuardar
        .save()
        .then(productoGuardado => {
          resolve(productoGuardado);
        })
        .catch(error => reject(error));
    });
  };

  this.actualizarProducto = async function(productoParam) {
    return new Promise((resolve, reject) => {
      Producto.findByIdAndUpdate(ObjectId(productoParam._id), productoParam)
        .then(productoGuardado => {
          resolve(productoGuardado);
        })
        .catch(error => reject(error));
    });
  };
}

module.exports = new productoDAO();
