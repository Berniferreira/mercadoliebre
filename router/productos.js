const productodosController = require("../controllers/productosController");
//implememntar un controlador
router.get("/", productosController.index)