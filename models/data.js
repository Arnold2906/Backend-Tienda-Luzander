const pool = require('../config/db')
const models = {};


  models.ProductoListar = (callback) => {

    let query = 'SELECT * FROM Producto';
    
    pool.query(query, callback);
  
  };
  
  models.BuscarProducto = (id,callback) => {

    let query = 'call sp_BuscarProducto(?)';
    
    pool.query(query,[id],callback);
  
  };


module.exports = models;