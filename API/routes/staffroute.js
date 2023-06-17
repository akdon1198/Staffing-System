const router = require("express").Router()
import staffmodal from "../modal/staffmodal"
router.post("/", async (req, res) => {
    const newstaff = new staffmodal(req.body)
    try{
        const savedstaff = newstaff.save()
        res.status(200).json(savedstaff)
    }catch(err){
        console.log();
    }
})