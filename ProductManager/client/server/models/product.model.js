// import dependencies
const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
    title:{
        type: 'string'},
    price: {
        type: 'number'
    },
    description: {
        type: 'string'
    },
},

{timestamps:true})

module.exports = mongoose.model("Product", ProductSchema);
