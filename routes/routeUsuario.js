const express = require("express")
const router = express.Router()
const UsuarioController = require("../controller/usuarioController");


router.get("/login/:correo/:contra", UsuarioController.loginUsuario);
//router.get("/registrar", UsuarioController.RegistrarUsuario);
router.post("/registrar", UsuarioController.RegistrarUsuario);
router.get("/", UsuarioController.getUsuarios);
module.exports = router;
