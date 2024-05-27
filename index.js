import express from "express"
import 'dotenv/config'
// import { fakeAuth } from "./src/Middleware/fakeAuth.js"
import mongoose from "mongoose"
import { Userrouter } from "./src/routes/Userrouter.js"



const app = express()
const port = 3000


app.use(express.json())



// app.use(fakeAuth) 
app.use("/users", Userrouter)

mongoose.connect(process.env.Mongodb_Connection)
    .then(() => console.log(" Connected"))
    .catch(() => console.log("Not connected"))

app.listen(process.env.Port, () => {
    console.log(`Example app listening on port ${process.env.Port}`)
})
