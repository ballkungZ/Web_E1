const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send('Hello World from Express FrameWork')
})
app.listen(3000,()=>{
    console.log("Start Server at Port 3000")
})
app.get('*',(req,res)=>{
    res.send('Error 404')
})
app.get('/product',function(req,res){
    res.sendFile(__dirname + '/Ws3.html')
})