const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({

    productName: {
        type: String,
        required: [true, "A product name is required to post a new product"]
    }, 

    productPhoto: {
        type: String,
        required: [true, "A picture of the product is required"]
    }, 

    
    additionalPhotos: [String],
    additionalPhotosTwo: [String],

    productPrice: {
        type: String, 
        required: [true, "You need to place a price on your product"]
    }, 

    productDescription: {
        type: String, 
        required: [true, "You need to describe your product"]
    }, 

    productType: {
        type: String, 
        enum: [
            "Cats", 
            "Dogs", 
            "Other"
        ]
    },
    
    keyFeatures: {

        type: Array,

    },


    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
    


}, {timestamps: true});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product; 

