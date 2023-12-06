const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const withdrawalSchema = new Schema({
    usn: {
        type: String,
        required: true
    },
    courseCode: {
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

const Withdrawal = mongoose.model('Withdrawal', withdrawalSchema);
module.exports = Withdrawal;
