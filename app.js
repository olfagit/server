const express = require("express")
const app = express()
const connectDB = require("./config/connection")
const userRouter = require("./routes/userroutes")
const cvRouter = require("./routes/cvroutes")


const port = 5000
connectDB()

app.use(express.json)

app.use("/api/user", userRouter)
app.use("/api/cv" , cvRouter)

app.listen(port, ()=>console.log(`server is running on port ${port}`))