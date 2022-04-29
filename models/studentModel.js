var mongoose=require('mongoose')

var studentSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        contactNo:{
            type:Number,
            required:true
        },
        message:{
            type:String,
            required:true
        },
    }
)

var studentModel=mongoose.model('students',studentSchema)

module.exports={ studentModel }