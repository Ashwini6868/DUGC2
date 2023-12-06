
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a schema for the Student model
const studentSchema = new Schema({
    usn: {
        type: String,
        unique: true, 
        required: true 
    },
    name: {
        type: String,
        required: true 
    },
    sem: {
        type: Number,
        required: true 
    },
    div: {
        type: String,
        required: true 
    }
});

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;
