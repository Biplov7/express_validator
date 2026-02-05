const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const mongose = require("mongoose"); 
const proudctRoute = require("./router/router.user.js");
const fs = require("fs");

// Middleware
app.use(express.json());
app.use("/api/user",proudctRoute);


app.get("/",(req,res)=>{
    const ip = `${Date.now()}: Request from ${req.ip}`;
    fs.writeFile("log.txt",ip,(err, res)=>{
        if(err){
            console.log("Error", err);
        }
    });
    res.status(200).json({message: "Successfully implemented"});
});



mongose.connect("mongodb+srv://biplovkhanal497_db_user:2yG1smTSoWnIxyEw@cluster0.dk0vilk.mongodb.net/?appName=Cluster0")
.then(()=>{
    console.log("Database Connection successfully");
    // listening 
app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
});
})
.catch((error)=>{
    console.error(error);
});