const ProductController = require('../controller/product.controller');
const {authenticate} = require("../config/jwt.config")

module.exports = (app) => {

    app.get("/api/Products", ProductController.findAllProducts);
    app.get("/api/Product/:id", ProductController.findOneProduct);
    app.get("/api/user/All-Products/:userId", ProductController.findProductsByUser);
    app.post("/api/Product", authenticate, ProductController.createNewProduct);
    app.put("/api/Product/:id", ProductController.updateProduct);
    app.delete("/api/Product/:id", ProductController.deleteProduct);    

}