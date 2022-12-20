const express = require('express')
const app = express()
const worker = require('./')

app.get('/',(req,res)=>{
    res.send('Hello World from Express FrameWork')
})
app.get('/product',function(req,res){
    res.sendFile(__dirname + '/Ws3.html')
})
app.get('*',(req,res)=>{
    res.sendFile(__dirname + '/Error.html')
})

app.listen(3000,()=>{
    console.log("Start Server at Port 3000")
})