import { Router } from "express";

import {
  crearProducto,
  editarProducto,
  listarProducto,
} from "../controllers/productos.controllers.js";

const router = Router();

router.route("/producto").get(listarProducto).post(crearProducto);
router.route("/producto/:id").put(editarProducto);
export default router;
