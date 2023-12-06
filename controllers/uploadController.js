// const marks = require('../models/marks');
// const excelToJson = require('convert-excel-to-json');

// const importfile = async (req, res) => {
//     try {
//         const excelData = excelToJson({
//             sourceFile: req.file.path,
//             header: {
//                 rows: 1
//             },
//             sheets: [
//                 {
//                     name: 'Sheet1',
//                     columnToKey: {
//                         A: 'RollNo',
//                         B: 'USN',
//                         C: 'Name',
//                         D: 'CIE',
//                         E: 'GrandTotal',
//                         F: 'Grade'
//                     }
//                 }
//             ]
//         });
       
//         const marksData = excelData.Sheet1.map(row => new marks(row));

//         console.log('Parsed Data:', marksData);
//         var marksData1 = [];
//         for (var x = 0; x < marksData.length; x++){
//             marksData1.push({
//                 RollNo: marksData[x].RollNo,
//                 USN: marksData[x].USN,
//                 Name: marksData[x].Name,
//                 CIE: marksData[x].CIE,
//                 GrandTotal: marksData[x].GrandTotal,
//                 Grade: marksData[x].Grade
//             })
//         }

//      const response= await marks.insertMany(marksData1);
       
//         if (response) {
//             console.log("Successfull");
//         } else {
//             console.log("Unsuccessfull");
//         }
//         res.send({ status: 200, success: true, msg: 'File is successfully uploaded' });
        
//     } catch (error) {
//         console.error('Error processing the file:', error);
//         res.status(400).send({ status: 400, success: false, msg: error.message });
//     }
// };

// module.exports = {
//     importfile
// };

const DivisionModel = require('../models/division'); 
const excelToJson = require('convert-excel-to-json');

const importfile = async (req, res) => {
    try {
        const excelData = excelToJson({
            sourceFile: req.file.path,
            header: {
                rows: 1
            },
            sheets: [
                {
                    name: 'Sheet1',
                    columnToKey: {
                        A: 'RollNo',
                        B: 'USN',
                        C: 'Name',
                        D: 'CIE',
                        E: 'GrandTotal',
                        F: 'Grade'
                    }
                }
            ]
        });

        const resultData = excelData.Sheet1.map(row => ({
            RollNo: row.RollNo,
            USN: row.USN,
            Name: row.Name,
            CIE: row.CIE,
            GrandTotal: row.GrandTotal,
            Grade: row.Grade
        }));
        console.log(resultData);
        const examTypeData = {
            ExamName: 'Minor1', 
            Results: resultData
        };
        console.log(examTypeData);

        const courseData = {
            courseName: 'Computer Networks', 
            courseCode: '21CSE234', 
            ExamType: [examTypeData]
        };

        const divisionName = 'A';

        const divisionData = {
            divisionName: divisionName,
            courses: [courseData]
        };

        // const response = await DivisionModel.create(divisionData);
        console.log(divisionData);

        // if (response) {
        //     console.log("Successful");
        // } else {
        //     console.log("Unsuccessful");
        // }
        res.send({ status: 200, success: true, msg: 'File is successfully uploaded' });

    } catch (error) {
        console.error('Error processing the file:', error);
        res.status(400).send({ status: 400, success: false, msg: error.message });
    }
};

module.exports = {
    importfile
};
