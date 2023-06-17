const mongoose = require("mongoose");
const staffSchema = new mongoose.Schema({
    fullName : {requied : true, type : String},
    resume : {requied : true, type : String},
    technology : {required : true, type : String}
})

module.exports = mongoose.model("staff", staffSchema)