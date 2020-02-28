const express = require("express")
const router = express.Router()
const sistemaController = require("../controller/sistemaController");


router.get("/listar", sistemaController.GetProductos);
router.get("/:id", sistemaController.BuscarProducto);



module.exports = router;
