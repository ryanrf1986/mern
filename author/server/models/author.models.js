const mongoose = require("mongoose");

const AuthorSchema = mongoose.Schema({
    name:{
        type: 'string',
    // price: {
    //     type: 'number'
    // },
    // description: {
    //     type: 'string'
    // },
    required:[true, "NAME IS REQUIRED"],
    minLength:[3, "NAME MUST BE AT LEAST 3 CHARACTERS"]}
},

{timestamps:true})

module.exports = mongoose.model("Author", AuthorSchema);