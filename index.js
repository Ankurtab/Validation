const express = require("express");
const app = express();
const main = require("./database");
const User = require("./Models/users")

app.use(express.json());

app.post("/register", async(req,res) => {
    try {
        await User.create(req.body);
        res.status(200).send("User Added Successfully.")
    } catch (error) {
        res.status(400).send("ERROR" + error.message)
    }
})

app.get("/info", async(req,res) => {
    try {
        const result =  await User.find();
        res.send(result);
    } catch (err) {
        res.status(400).send("Error is -- " ,err);
    }
})

app.get("/user/:id", async(req,res) => {
    try {
        const info = req.params.id;
        const result = await User.findById(info);
        res.send(result);
    } catch (err) {
        res.send("Some error Happens", err.message);
    }
})

app.delete("/user/:id", async (req,res) => {
    try{
        const info = req.params.id;
        await User.findByIdAndDelete(info);
        res.status(201).send("User Deleted successfully."); 
    }
    catch(err){
        res.status(400).send("Error Occured", err);
    }
})

app.patch("/user", async (req,res) => {
    try {
        const {_id, ...update} = req.body;
        await User.findByIdAndUpdate(_id,update);
        res.send("Update successfull");
    } catch (error) {
        res.send("Error occured"+error);
    }
})


main()
    .then(async () => {
        console.log("Connected to database.");
        app.listen(3000, ()=> {
            console.log("Listening at port 3000");
        })
    })
    .catch((error) => console.log(err));