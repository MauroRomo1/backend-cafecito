import express from "express";
import cors from "cors";
import morgan from "morgan";
import "dotenv/config"; // permite procesar las variables de entorno

import productoRouter from "./src/routes/productos.routes.js";

// 1- Configuraciones iniciales
const app = express();

app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), () => {
  console.log("Estoy en el puerto " + app.get("port"));
});

// 2- middlewares: Funciones que se agregan antes de las rutas

app.use(cors()); //Permite coneciones remotas
app.use(express.json()); //permite interpretar datos en format json
app.use(express.urlencoded({ extended: true })); // ayuda a interpretar datos del body del request
app.use(morgan("dev")); //Nos da mas informacion en la terminal

// 3- Crear las rutas
// http://localhost:4000/api/producto
app.use("/api", productoRouter);
