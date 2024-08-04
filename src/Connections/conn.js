const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://thakurrachitsingh:q123456!@cluster0.oa2reon.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(() => { console.log("connection successfull with mongodb")})
.catch((e)=>{console.log(e);})

// mongoose.connect('mongodb://localhost/productsDB');

// const connection = mongoose.connection;

// connection.on('error', console.error.bind(console, 'connection error:'));
// connection.once('open', async function () {

//   const collection  = connection.db.collection("users");
//   collection.find({}).toArray(function(err, data){
//       console.log(data); // it will print your collection data
//   });

// });