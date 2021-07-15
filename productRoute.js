const {Router} = require("express");

const productController = require("./produitController");

const productRouter = Router();
// routes
productRouter.get('/', productController.product_get);

productRouter.post('/', productController.product_Post);

productRouter.put('/:id', productController.product_Put);

productRouter.delete('/:id', productController.product_Delete);

productRouter.get('/:id', productController.product_getOne);
module.exports = productRouter;