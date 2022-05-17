const ProductController = require("../controllers/product.controller");

module.exports = app => {
  app.get(    "/api/products",    ProductController.findAllProducts);
  app.post(   "/api/products/new",     ProductController.createNewProduct);
  app.get(    "/api/products/:product_id", ProductController.findOneSingleProduct);
  app.put(    "/api/products/:product_id", ProductController.updateOne);
  app.delete( "/api/products/:product_id", ProductController.deleteAnExistingProduct);
};