const Product = require('../models/product.model');
const jwt = require("jsonwebtoken");

module.exports = {

    findAllProducts: (req, res) => {
        Product.find({})
        .populate("createdBy","username")
            .then((allProducts ) => {
                console.log(res.data)
                res.json(allProducts)
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err)
            })
    },

    findProductsByUser: (req, res) => {
        Product.find( {createdBy: req.params.userId} )
            .populate("createdBy","username")
            .then((allProductsByUser) => {
                res.json(allProductsByUser)
                console.log(allProductsByUser)
            })
            .catch((err) => console.log(err))
    },

    findOneProduct: (req,res) => {
        Product.findOne({_id: req.params.id})
            .then((oneProduct) => {
                res.json(oneProduct)
                console.log(oneProduct)
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);

            })
    },

    createNewProduct: (req, res) => {

        const newProductObj = new Product(req.body);
        

        const decodedJWT = jwt.decode(req.cookies.userToken,{
            complete: true
        })

    

        newProductObj.createdBy = decodedJWT.payload.id

        newProductObj.save()
          .then((newProduct) => {
              res.json(newProduct)
              console.log(newProduct)
          })
          .catch((err) => {
              console.log(err);
              res.status(400).json(err)
          })
    }, 
    
    updateProduct: (req, res)=> {

        Product.findOneAndUpdate(
            {_id: req.params.id}, 
            req.body,
            {new: true, runValidators: true}
        )
        .then((updatedProduct) => {
            console.log(updatedProduct)
            res.json(updatedProduct)
        })
        .catch((err) => {
            console.log(err);
            console.log("In editProduct")
            res.status(400).json(err)
        })
    },

    deleteProduct: (req,res) => {
        Product.deleteOne(
            {_id: req.params.id}
        )
        .then((deletedProduct) => {
            console.log(deletedProduct);
            res.json(deletedProduct)
        })
        .catch((err) => {
            console.log(err)
            console.log("There was a problem in deleting this product")
        })
    },


}