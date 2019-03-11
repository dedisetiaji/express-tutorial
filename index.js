const express=require("express")
const app=express()

app.get("/",(req,res)=>res.send("Hello Dedi"))
app.listen(3000,()=>console.log("Application is running on 3000 port"))