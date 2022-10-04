const db = require('../database');
exports.cities = (req, res) => {
    db.all('select * from city').then((rows) => {
        res.json(rows);
    });
}