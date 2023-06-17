const express = require("express");
const app = express();
const mongoose = require("mongoose");
const staffroute = require("./routes/staffroute")
const cors = require("cors")
mongoose.connect("mongodb+srv://akash:akash@cluster0.o8cde90.mongodb.net/staffdatabase?retryWrites=true&w=majority").
then(() => {
    console.log("database is created");
}).catch((err) => {
    console.log("database is notcreated");
})
app.use(cors());
app.use(express.json())
app.use("/staff", staffroute)
app.listen(5000, () => {
    console.log("server is connected");
})