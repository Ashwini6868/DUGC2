
// var marks = require('../models/marks');
// var csv = require('csvtojson');


// const importfile = async (req, res) => {
//     try {
//         csv().fromFile(req.file.path).then((response) => {
//             console.log(response);
//         })
//         res.send({ status: 200, success: true, msg: "File is successfully uploaded" });

//     } catch (error) {
//         res.send({status:400,success:false,msg:error.message})
//     }
// }

// module.exports = {
//     importfile
// };
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

//         await marks.insertMany(marksData);

//         console.log('Data inserted into MongoDB');
//         res.send({ status: 200, success: true, msg: 'File is successfully uploaded' });
//     } catch (error) {
//         console.error('Error processing the file:', error);
//         res.status(400).send({ status: 400, success: false, msg: error.message });
//     }
// };

// module.exports = {
//     importfile
// };
// const marks = require('../models/marks');
// const xlsx = require('xlsx');

// const importfile = async (req, res) => {
//     try {
//         const workbook = xlsx.readFile(req.file.path);
//         const sheetName = workbook.SheetNames[0];

//         const excelData = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);

//         const marksData = excelData.map(row => new marks(row));

//         await marks.insertMany(marksData, { maxTimeMS: 60000 }); // 60 seconds timeout


//         console.log('Data inserted into MongoDB');
//         res.send({ status: 200, success: true, msg: 'File is successfully uploaded' });
//     } catch (error) {
//         console.error('Error processing the file:', error);
//         res.status(400).send({ status: 400, success: false, msg: error.message });
//     }
// };

// module.exports = {
//     importfile
// };


const marks = require('../models/marks');
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
                    name: 'Sheet1', // Adjust the sheet name as needed
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

        const marksData = excelData.Sheet1.map(row => new marks(row));

        // Log the parsed data to the terminal
        console.log('Parsed Data:', marksData);

        console.log('Data not inserted into MongoDB (only logged)');
        res.send({ status: 200, success: true, msg: 'File is successfully uploaded' });
    } catch (error) {
        console.error('Error processing the file:', error);
        res.status(400).send({ status: 400, success: false, msg: error.message });
    }
};

module.exports = {
    importfile
};
