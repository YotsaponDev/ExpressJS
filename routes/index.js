var express = require('express');
var router = express.Router();
var FamilyController = require('../controllers/FamilyController');

const index = router.get('/',function (req, res, next) {
    res.send('<center><h1 style="background: linear-gradient(to right, #0017FF 0%, #BA00A1 100%);-webkit-background-clip: text;-webkit-text-fill-color: transparent;">Express.JS API By Yotsapon Thimakham</h1></center>')
})

//# route Family scope #//
const getFamily = router.get('/Family', FamilyController.getFamily);
const getFamilyById = router.get('/Family/:id', FamilyController.getFamilyById);
const postFamily = router.post('/Family', FamilyController.postFamily);
const putFamily = router.put('/Family/:id', FamilyController.putFamily);
const deleteFamily = router.delete('/Family/:id', FamilyController.deleteFamily);

module.exports = {
    index,
    getFamily,getFamilyById,postFamily,putFamily,deleteFamily
};