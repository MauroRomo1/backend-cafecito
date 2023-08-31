import { Router } from "express";

import { listarUsuario } from "../controllers/usuarios.controllers.js";

const router = Router();

router.route("/usuario").get(listarUsuario);

export default router;
