const mongoose = require("mongoose");
const validator = require("validator");

const StudentSchema = new mongoose.Schema({
    name : {
        type : String,
        minLength : 3
    },
    class :{
        type: Number,
        min : 1,
        max : 12
    },
    age : {
        type : Number,
        min : 0
    },
    phone : {
        type:Number,
        max:9999999999,
        min:10
    },
    school : {
        type : String,
        minLength : 1
    }
});

//creating new modal
const Student = new mongoose.model("Student", StudentSchema);

module.exports =  Student;