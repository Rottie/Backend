const res = require("express")

const express =requre("express")
const app=express()

app.get("/",(req,res)){
  res.json({
    mesg:'Hellp'
  })
}

app.listen(3000)