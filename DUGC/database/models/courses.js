const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
    courseCode: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    credits: {
        type: Number,
        required: true
    },
    minor1: {
        type: String,
        enum: ['Yes', 'No'],
        default: 'No'
    },
    minor2: {
        type: String,
        enum: ['Yes', 'No'],
        default: 'No'
    },
    activity: {
        type: String,
        enum: ['Yes', 'No'],
        default: 'No'
    },
    review1: {
        type: String,
        enum: ['Yes', 'No'],
        default: 'No'
    },
    review2: {
        type: String,
        enum: ['Yes', 'No'],
        default: 'No'
    },
    esa: {
        type: String,
        enum: ['Yes', 'No'],
        default: 'No'
    }
});

const Course = mongoose.model('Course', courseSchema);
module.exports = Course;
