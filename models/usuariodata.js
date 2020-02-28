const pool = require('../config/db')
const models = {};


  models.loginusuario = (correo,contraseña,callback) => {
    let query = 'call sp_buscarUsuario(?,?)';
    pool.query(query,[correo,contraseña],callback);
  
  };

  models.getUsuarios = (callback) => {
    let query = 'SELECT * FROM Usuario';
    pool.query(query,callback);
  
  };

  models.InsertarUsuario = (Ucorreo,Unombre,Ua_paterno,Uamaterno,Ucargo,Ucontrasena,Utelefono,Udireccion,callback) => {
    let query = 'call sp_RegistrarUsuario(?,?,?,?,?,?,?,?);';
    pool.query(query,[Ucorreo,Unombre,Ua_paterno,Uamaterno,Ucargo,Ucontrasena,Utelefono,Udireccion],callback);
  };


module.exports = models;