var express = require('express')
var bodyParser = require('body-parser')
var mongoose=require('mongoose')
var cors = require('cors')
var { doctorModel } = require('../models/doctorModel')
var doctorRouter=express.Router()

doctorRouter.use(bodyParser.urlencoded({ extended: false }))
doctorRouter.use(bodyParser.json())

doctorRouter.use(cors())



doctorRouter.get('/', (req, res) => {
    res.send("Welcome to Doctors Page")
})



doctorRouter.post('/adddoctors',(req,res)=>{
    var doctorObject=new doctorModel(req.body);
    doctorObject.save(
        (error)=>{
            if(error){
                res.send(error)
            } else {
                res.json({"status":"success"})
            }
        }
    )
    res.json( doctorObject )
})

doctorRouter.get('/getdoctors',async (req,res)=>{
    try{
        var result=await doctorModel.find()
        res.json(result)
    }catch(error){
        res.send(error)
    }
})

module.exports={ doctorRouter }