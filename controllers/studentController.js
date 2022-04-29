var express = require('express')
var bodyParser = require('body-parser')
var mongoose=require('mongoose')
var cors = require('cors')
var { studentModel } = require('../models/studentModel')
var studentRouter=express.Router()

studentRouter.use(bodyParser.urlencoded({ extended: false }))
studentRouter.use(bodyParser.json())


studentRouter.use(cors())


studentRouter.get('/', (req, res) => {
    res.send("Welcome to students Page")
    
})

studentRouter.post('/addstudents',(req,res)=>{
    var studentObject=new studentModel(req.body);
    studentObject.save(
        (error)=>{
            if(error){
                res.send(error)
            } else {
                res.json({"status":"success"})
            }
        }
    )
    res.json( studentObject )
})

module.exports={ studentRouter }