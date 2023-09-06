import Producto from "../models/producto.js";

export const listarProducto = async (req, res) => {
  try {
    // Ir a la base de dato y pedir los productos
    const productos = await Producto.find();
    res.status(200).json(productos);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al buscar productos",
    });
  }
};

export const crearProducto = async (req, res) => {
  try {
    // Ir a la base de dato y pedir los productos
    const productoNuevo = new Producto(req.body);
    // Guardar el prouctoNuevo en la BD
    await productoNuevo.save();
    res.status(201).json({
      mensaje: "El producto fue creado correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "El producto no pudo ser creado",
    });
  }
};
