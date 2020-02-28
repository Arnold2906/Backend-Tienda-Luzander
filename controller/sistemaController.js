const models = require("../models/data.js")
const controller = {};

  controller.GetProductos = (req, res) => {

    models.ProductoListar((err, rows)=>{
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

  controller.BuscarProducto = (req, res) => {

    models.BuscarProducto(req.params.id,(err, rows)=>{
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