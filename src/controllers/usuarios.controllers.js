import Usuario from "../models/usuario.js";
import bcrypt from "bcrypt";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    let usuario = await Usuario.findOne({ email });
    if (!usuario) {
      return res.status(400).json({
        mensaje: "Correo o password invalido - correo",
      });
    }
    const passwordValido = bcrypt.compareSync(password, usuario.password);
    if (!passwordValido) {
      return res
        .status(400)
        .json({ mensaje: "Correo o password invalido - password" });
    }
    res.status(200).json({
      mensaje: "El usuario existe",
      uid: usuario._id,
      nombre: usuario.nombreUsuario,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      mensaje: "usuario o contraseña invalido",
    });
  }
};

export const crearUsuario = async (req, res) => {
  try {
    const { email, password } = req.body;

    let usuario = await Usuario.findOne({ email }); //devulve un null
    console.log(usuario);
    if (usuario) {
      return res.status(400).json({
        mensaje: "ya existe un usuario con el correo enviado",
      });
    }
    usuario = new Usuario(req.body);
    console.log(usuario);
    const salt = bcrypt.genSaltSync(10);
    usuario.password = bcrypt.hashSync(password, salt);

    await usuario.save();
    res.status(201).json({
      mensaje: "usuario creado",
      nombre: usuario.nombreUsuario,
      uid: usuario._id,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      mensaje: "El usuario no pudo ser creado",
    });
  }
};

export const listarUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.status(200).json(usuarios);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al buscar los usuarios",
    });
  }
};
