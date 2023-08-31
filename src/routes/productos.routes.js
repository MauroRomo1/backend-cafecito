import { Router } from "express";

import { listarProducto } from "../controllers/productos.controllers.js";

const router = Router();

router.route("/producto").get(listarProducto);

export default router;
