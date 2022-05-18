const mongoose = require("mongoose");

const AuthorSchema = mongoose.Schema({
    Name:{
        type: 'string'},
    // price: {
    //     type: 'number'
    // },
    // description: {
    //     type: 'string'
    // },
},

{timestamps:true})

module.exports = mongoose.model("Author", AuthorSchema);