const express = require("express");
const app = express()
const path = require ('path');
const ejsMate = require('ejs-mate');



app.engine('ejs',ejsMate)
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views')); //去views資料夾拿ejs



app.get('/',(req,res)=>{
    res.render('main/index')
})


app.get('/1.jpg',(req,res)=>{
    console.log(__dirname);
    res.sendFile(__dirname + '/views/main/pic/1.jpg');
})

app.get('/index',(req,res)=>{
    res.render('main/index')
})
app.get('/ch-peng',(req,res)=>{
    res.render('main/ch-peng')
})
app.get('/tp-liang',(req,res)=>{
    res.render('main/tp-liang')
})


app.listen(3000,() => {
    console.log("Listening on port 3000!");
})