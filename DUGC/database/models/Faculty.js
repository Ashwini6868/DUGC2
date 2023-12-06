const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teacherSchema = new Schema({
    email: {
        type: String,
        unique: true, 
        required: true 
    },
    password: {
        type: String,
        required: true
    },
    div: {
        type: String,
        required: true 
    },
    sem: {
        type: String,
        required: true 
    },
    courseCode: {
        type: String,
        required: true 
    }
});


const Teacher = mongoose.model('Teacher', teacherSchema);
module.exports = Teacher;
