const express = require('express');
const marks = express();

const multer = require('multer');
const path = require('path');
const bodyParser = require('body-parser');

marks.use(bodyParser.urlencoded({ extended: true }));

marks.use(express.static(path.resolve(__dirname, 'uploads')));

var storage=multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads');
    },
    filename: (req, file, cb) => {
        cb(null,file.originalname);
    }
});

var upload = multer({ storage: storage });
var uploadController = require('../controllers/uploadController');

marks.post('/uploadfile', upload.single("filename"),uploadController.importfile);

module.exports = marks;