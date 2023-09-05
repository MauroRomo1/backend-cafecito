import { Router } from "express";

import {
  crearProducto,
  listarProducto,
} from "../controllers/productos.controllers.js";

const router = Router();

router.route("/producto").get(listarProducto).post(crearProducto);

export default router;
