var mongoose=require('mongoose')

var studentSchema=new mongoose.Schema(
    {
        doctorId: {
            type: mongoose.Schema.Types.ObjectId,
            ref:'doctors'
        },
        nameStudent:{
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