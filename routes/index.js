var express = require('express');
var router = express.Router();
var FamilyController = require('../controllers/FamilyController');

const index = router.get('/',function (req, res, next) {
    res.send('Index')
})

const getFamily = router.get('/getFamily', FamilyController.getFamily);
const getFamilyById = router.get('/getFamily/:id', FamilyController.getFamilyById);

// const getFamilyById = router.get('/:id', Family.getFamilyById);

module.exports = {
    index,getFamily,getFamilyById
};