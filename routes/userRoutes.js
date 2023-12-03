const express =require ('express')
const {homeresponse,getUsers,resultUsers}= require('../controllers/userController.js')
const router=express.Router()



router.get('/',homeresponse)
router.get('/getusers',getUsers)
router.post('/resultusers',resultUsers)


module.exports = router