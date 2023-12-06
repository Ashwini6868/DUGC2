const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const makeupSchema = new Schema({
    usn: {
        type: String,
        required: true 
    },
    courseCode: {
        type: String,
        required: true 
    },
    examType: {
        type: String,
        required: true 
    },
    reason: {
        type: String,
        required: true 
    },
    status: {
        type: String,
        enum: ['Pending', 'Approved', 'Rejected'], 
        default: 'Pending'
    }
});

const Makeup = mongoose.model('Withdrawal', makeupSchema);
module.exports = Makeup;
