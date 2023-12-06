const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const resultsSchema = new Schema({
    academicYear: String,
    sem: String,
    courses: [{
        courseCode: String,
        grades: [{
            Division: String,
            results: {
                average: String,
                grades: {
                    S: Number,
                    A: Number,
                    B: Number, 
                    C: Number,
                    D: Number,
                    Total: Number
                }
            }
        }]
    }]
});

const Results = mongoose.model('Results', resultsSchema);
module.exports = Results;
