const db = require('../config');
const Famiry = require('../models/FamilyModel');
const uuidv4 = require('uuid/v4');

const getFamily = (req, res) => {
    Famiry.findAll().then(results => {
        res.status(200).send(results)
    }).catch(err => {
        res.status(400).send(err)
    })
    // -- Or not use sequelize ORM --
    // var query = "SELECT * FROM family";
    // db.db.query(query, function (error, results, fields) {
    //     if (error) throw error;
    //     res.status(200).send(results);
    //   });
};

const getFamilyById = (req, res) => {
    Famiry.findByPk(req.params.id).then(results => {
        res.status(200).send(results)
    }).catch(err => {
        res.status(400).send(err)
    }) 
    // -- Or not use sequelize ORM -- //
    // var query = `SELECT * FROM family WHERE id = '${req.params.id}'`;
    // db.db.query(query, function (error, results, fields) {
    //     if (error) throw error;
    //     res.status(200).send(results);
    //   });
};

const postFamily = (req, res) => {
    var obj = req.body
    obj.id = uuidv4(); // generate UUID for primary key
    Famiry.create(obj).then(results => {
        res.status(201).send(results)
    }).catch(err => {
        res.status(400).send(err)
    }) 
}

const putFamily = (req, res) => {
    Famiry.findByPk(req.params.id).then(item => {
        if (item) {
            item.update(req.body).then((results) => {
                res.status(200).send(results)
            })
        }else{
            res.status(400).send("Bad Request")
        }
    })
}

const deleteFamily = (req, res) => {
    Famiry.destroy({ where: {id: req.params.id}}).then(() => {
        res.status(204).send("Deleted item success.")
    }).catch(err => {
        res.status(400).send(err)
    }) 
}

module.exports = {getFamily,getFamilyById,postFamily,putFamily,deleteFamily};