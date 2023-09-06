import { Router } from "express";

import {
  crearUsuario,
  listarUsuario,
} from "../controllers/usuarios.controllers.js";

const router = Router();

router.route("/usuario").get(listarUsuario).post(crearUsuario);

export default router;
