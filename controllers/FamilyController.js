var db = require('../config');

const getFamily = (req, res) => {
    var query = "SELECT * FROM family";
    db.query(query, function (error, results, fields) {
        if (error) throw error;
        res.status(200).send(results);
      });
};

const getFamilyById = (req, res) => {
    var query = `SELECT * FROM family WHERE id = '${req.params.id}'`;
    db.query(query, function (error, results, fields) {
        if (error) throw error;
        res.status(200).send(results);
      });
};

module.exports = {getFamily,getFamilyById};