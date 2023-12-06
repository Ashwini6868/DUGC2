// const mongoose = require('mongoose');

// const marksSchema = new mongoose.Schema({
//     RollNo: {
//         type: Number,
//         //required: true
//     },
//     USN: {
//         type: String,
//         // required: true
//     },
//     Name: {
//         type: String,
//         // required: true
//     },
//     CIE: {
//         type: Number,
//         // required: true
//     },
//     GrandTotal: {
//         type: Number,
//         // required: true
//     },
//     Grade: {
//         type: String,
//         // required: true
//     }
// });

// const Marks = mongoose.model('Marks', marksSchema);

// module.exports = Marks;


const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
    RollNo: {
        type: Number,
        // required: true
    },
    USN: {
        type: String,
        // required: true
    },
    Name: {
        type: String,
        // required: true
    },
    CIE: {
        type: Number,
        // required: true
    },
    GrandTotal: {
        type: Number,
        // required: true
    },
    Grade: {
        type: String,
        // required: true
    }
});

const examTypeSchema = new mongoose.Schema({
    ExamName: {
        type: String,
        // required: true
    },
    Results: [resultSchema]
});

const courseSchema = new mongoose.Schema({
    courseName: {
        type: String,
        // required: true
    },
    courseCode: {
        type: String,
        // required: true
    },
    ExamType: [examTypeSchema]
});

const divisionSchema = new mongoose.Schema({
    divisionName: {
        type: String,
        // required: true
    },
    courses: [courseSchema]
});

const DivisionModel = mongoose.model('Division', divisionSchema);

module.exports = DivisionModel;
