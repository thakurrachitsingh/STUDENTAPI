const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
// const newCollection = require("./Connections/conn/collection");

const client = require("./Connections/conn")
app.use(express.json());
const Student = require("./Modals/student");
const user = require("./Modals/user");

app.get("/", async (req, res) =>{
    const studentData = await Student.find({});
    res.send(studentData);
})

// app.post("/Student", async (req, res) =>{
//     console.log(req.body);
//     try{
//         const user = new Student(req.body);
//         const createdData = await user.save();
//         res.status(201).send(createdData);
//     }catch(err){res.status(400).send(err);}
// });

// app.post("/test2", async (req, res) =>{
//     console.log(req.body);
//     try{
//         const user = new user(req.body);
//         const createdData = await user.save();
//         res.status(201).send(createdData);
//     }catch(err){res.status(400).send(err);}
// });


app.listen(3000, () =>{
    console.log(`connection setup at ${port}`)
});