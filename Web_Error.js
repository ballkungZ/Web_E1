const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send('Hello World from Express FrameWork')
})
app.listen(3000,()=>{
    console.log("Start Server at Port 3000")
})