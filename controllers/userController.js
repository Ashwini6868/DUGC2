const DivisionModel = require('../models/division')
const Result = require('../models/resultfinal')

exports.homeresponse = (req, res) => {
  res.send("<h1> home response</h1>")

}



// exports.createUser = async (req, res) => {
//   try {
//     const { divisionName, courses } = req.body;

//     // Validate required fields
//     if (!divisionName || !courses) {
//       throw new Error('Division name and courses are required');
//     }

//     // Create a new division with additional details
//     const newDivision = new DivisionModel({
//       divisionName,
//       courses
//     });

//     // Save the division to the database
//     await newDivision.save();

//     res.status(201).json({
//       success: true,
//       message: 'Division created successfully',
//       division: newDivision
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(400).json({
//       success: false,
//       message: error.message
//     });
//   }
// };
//but here this need to be adress like / in routes
exports.getUsers = async (req, res) => {
  try {
    const users = await DivisionModel.find({})
    res.status(200).json({
      success: true,
      users
    })
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: error.message
    })
  }
}

exports.resultUsers = async (req, res) => {
  try {
    const countS = await DivisionModel.find({"courses.ExamType.Results.Grade": "S"}).count();
    const countA = await DivisionModel.find({"courses.ExamType.Results.Grade": "A"}).count();
    const countB = await DivisionModel.find({"courses.ExamType.Results.Grade": "B"}).count();
    const countC = await DivisionModel.find({"courses.ExamType.Results.Grade": "C"}).count();
    const countD = await DivisionModel.find({"courses.ExamType.Results.Grade": "D"}).count();
    const coursecode = await DivisionModel.find({},{"courses.courseCode":1})
    const division = await DivisionModel.find({},{"divisionName":1})
   
    
    const newResults = await Result.create({
      academicYear:"2023",
      sem:"5",
      courses: [{
        courseCode: coursecode[0].courses[0].courseCode,
        grades: [{
          Division:division[0].divisionName,
          results: {
            average: "average",  // You may need to calculate this based on your requirements
            grades: {
              S: countS,
              A: countA,
              B: countB,
              C: countC,
              D: countD,
              Total: countS + countA + countB + countC + countD
            }
          }
        }]
      }]
    });

    res.status(201).json({
      success: true,
      message: 'Results created successfully',
      results: newResults
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
}