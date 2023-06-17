const mongoose = require("mongoose");
const staffSchema = new mongoose.Schema({
    fullName : {requied : true, type : String},
    resume : {required : true, type : File},
    technology : {required : true, type : String}
})

module.exports = staffSchema.model("staff", staffSchema)