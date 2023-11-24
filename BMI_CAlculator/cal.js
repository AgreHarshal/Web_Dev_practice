const express=require("express");
const bodyParser=require("body-parser");
const { urlencoded, text } = require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));

app.listen(3000,function(){
    console.log("srver started at 3000");
})

app.get("/",function(req,res){
    
    res.sendFile( __dirname+"/index.html");
})
app.post("/",function(req,res){

    console.log(req.body.num2);
})
app.get("/bmiCalculator",function(req,res){
    res.sendFile(__dirname+"/index2.html");
})
app.post("/bmiCalculator",function(req,res){

    var w=Number(req.body.weight);
    var h=Number(req.body.height);
    var result=w/(h*h);
    res.send("your bmi is "+ result);
})