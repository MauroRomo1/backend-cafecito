import Producto from "../models/producto.js";

export const listarProducto = (req, res) => {
  try {
    // Ir a la base de dato y pedir los productos

    res.send("Esto es una prueba del controllers producto");
  } catch (error) {
    console.log(error);
  }
};
