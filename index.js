//jsshint esversion:6
const express=require("express");
const bodyParser=require("body-parser");

const app=express();

app.use(bodyParser.urlencoded({extended : true}));

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
});


app.post("/",function(req,res){
    var num1=Number(req.body.num1);
    var num2=Number(req.body.num2);
    var result=num1+num2;

    res.send("thanks your result=" + result);
});

app.get("/Bmicalculator",function(req,res){
    res.sendFile(__dirname + "/Bmi.html")
});
app.post("/Bmicalculator",function(req,res){
    var weight=parseFloat(req.body.weight);
    var height=parseFloat(req.body.height);
    var result=weight/(height+height);
    res.send("your Bmi is" + result);
});

app.listen(8080,function(){
    console.log("server is running on port 8080");
});