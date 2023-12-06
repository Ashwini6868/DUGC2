const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    role: {
        type: String,
        enum: ['DUGC coordinator', 'DUGC chairman', 'Course Coordinator', 'Course Teacher'],
        required: true 
    },
    email: {
        type: String,
        unique: true, 
        required: true 
    },
    password: {
        type: String,
        required: true 
    },
    name: {
        type: String,
        required: true 
    }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
