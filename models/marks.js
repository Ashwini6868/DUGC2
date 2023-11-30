const mongoose = require('mongoose');

const marksSchema = new mongoose.Schema({
    RollNo: {
        type: Number,
        required: true
    },
    USN: {
        type: String,
        required: true
    },
    Name: {
        type: String,
        required: true
    },
    CIE: {
        type: Number,
        required: true
    },
    GrandTotal: {
        type: Number,
        required: true
    },
    Grade: {
        type: String,
        required: true
    }
});

const Marks = mongoose.model('Marks', marksSchema);

module.exports = Marks;
