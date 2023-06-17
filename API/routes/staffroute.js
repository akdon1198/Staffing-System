const router = require("express").Router()
const staffmodal = require("../modal/staffmodal")

router.post("/", async (req, res) => {
    const newstaff = new staffmodal(req.body)
    try{
        const savedstaff = await newstaff.save()
        res.status(200).json(savedstaff)
    }catch(err){
        res.status(500).json(err)
    }
})

router.get("/", async (req, res) => {
    try{
        const allstaf = await staffmodal.find()
        res.status(200).json(allstaf)
    }catch(err){
        res.status(500).json(err)
    }
})
module.exports = router