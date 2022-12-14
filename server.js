const express = require("express");

const dotenv = require("dotenv").config();
const errorHandler = require("./middleware/errorHandler")
const app = express(); 
const port = process.env.PORT || 5000; // env config


app.use(express.json()); // to get the req.body
app.use("/api/contact", require("./routes/contactRoutes")); // to write all routes in contactRoutes

app.use(errorHandler)
app.listen(port, ()=>{
    console.log(`server running on port ${port}`)
});
