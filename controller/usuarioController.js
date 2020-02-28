const models = require("../models/usuariodata.js")
const controller = {};

  controller.loginUsuario = (req, res) => {

   let correo = req.params.correo
   let contraseña = req.params.contra
   
   console.log("Hola")
    models.loginusuario(correo,contraseña,(err, rows)=>{
      if (err) {
        return res.status(400).json({
            ok: false,
            err
        });
    }

    res.json({
              results: rows
            });

    });

  };

  controller.holamundo = (req, res) => {

    console.log("Hola");
    
    let usuario = {
      nombre: req.body.nombre,
      a_paterno: req.body.a_paterno,
      a_materno: req.body.a_materno,
      telefono: req.body.telefono,
      direccion: req.body.direccion,
      email: req.body.email,
      password: req.body.password
    };

    res.json({
      usuario
    });


 
   };

   
   controller.RegistrarUsuario = (req, res) => {
    console.log(req.body)


    let usuario = {
      nombre: req.body.nombre,
      a_paterno: req.body.a_paterno,
      a_materno: req.body.a_materno,
      telefono: req.body.telefono,
      direccion: req.body.direccion,
      email: req.body.email,
      password: req.body.password
    };
    
     models.InsertarUsuario(usuario.email,usuario.nombre,usuario.a_paterno, usuario.a_materno,"cliente",usuario.password,usuario.telefono,usuario.direccion,(err, rows)=>{
      if (err) {
        return res.status(400).json({
            ok: false,
            err
        });
    }

    res.json({
              results: rows
            });
 
     });
 
   };

   controller.getUsuarios = (req, res) => {
    models.getUsuarios((err, rows)=>{
      if (err) {
        return res.status(400).json({
            ok: false,
            err
        });
    }

    res.json({
              results: rows
            });
 
     });

 
   };

   

   

  module.exports = controller;