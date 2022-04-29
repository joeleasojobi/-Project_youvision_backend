var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var cors = require('cors')


const { doctorRouter } = require('./controllers/doctorController')
const { studentRouter } = require('./controllers/studentController')


mongoose.connect("mongodb+srv://joeleasojobi:C2S8f6KqF5HRZ3Fw@cluster0.oz8vl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useNewUrlParser: true }
)
    .then(() => console.log('MongoDb Connected'))
    .catch(err => console.log(err))



var app = express()

app.use(cors())


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use('/doctor',doctorRouter)
app.use('/student',studentRouter)

app.get('/', (req, res) => {
    res.send("Welcome to my website")
})

app.listen(process.env.PORT || 3001, () => {
    console.log("Server started running at http://localhost:3001");
})