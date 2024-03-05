let express = require("express")
const bodyParser = require("body-parser")
let mongoose = require("mongoose")
let axios = require("axios")
let cors = require("cors")
let app = express();

app.use(cors())
// using body-parser to convert request of client into JSON formate
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

//connecting NodeJS to the Mongo Server
mongoose.connect("mongodb+srv://lakhan:aA123456%40@cluster0.5j3oaka.mongodb.net/mern2")
mongoose.connection
.once("open",()=>{
    console.log("Connection stablished....");
})
.on("error",()=>{
    console.log("error to connect");
})

// creating schema for Database
let schema1 = new mongoose.Schema({
    name : String,
    company: String,
    salary : Number
})

// creating model from schema and allocating collection
let model1 =mongoose.model("collection2", schema1)

// configuring routings for diffrent diffrent client requests methods
app.post("/submit", (req,res)=>{ // {serverURL/submit} to access its code
    let dataForDB = new model1(req.body) // creating object of info which client sent on  it's body
    dataForDB.save() // saving the object on MongoDB, it returns promise
    .then(()=>{
        res.end("data saved on DB")
    })
    .catch(()=>{
        res.end("problem encountered at data saving at DB time")
    })
})


app.get("/users", (req, res)=>{ // {serverURL/users} to access its code
    model1.find()  // mongo cmd, to see all data of a collection
    .then((e)=>{res.json(e)}) // then responding found data of DB to the client

})

app.delete("/users/:ID", (req,res)=>{ // handles delete request of client, id will be shared throgh URL
    let ID = req.params.ID // extracting ID from URL 
    model1.deleteOne({_id:ID},req.body) // deleting the data matched to this ID
    .then((model1)=>{res.json(model1)}) // responding with model is not nesessary, we can send any string also, but responding is important 
})

app.put("/edit/:ID",(req,res)=>{
    let ID = req.params.ID
    model1.updateOne({_id:ID},req.body) // updating a perticular document having matching id
    .then((e)=>{res.json("updated to DB....")})
    .catch((err)=>{console.log("err");})
})
app.get("/edit/:ID",(req,res)=>{ // in edit page we need a single user data, to respond that..
    let ID = req.params.ID 
    model1.findOne({_id:ID})
    .then((e)=>{res.json(e)})
    .catch((e)=>{console.log("error");})
})


app.listen(4001,()=>{  // starting the nodeJS server , it should be always at end of the code
    console.log("Started listing on 4001/....");
}
    )