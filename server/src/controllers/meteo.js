const axios = require('axios').default;
const db = require('../database');

const API_URL = 'https://api.meteo-concept.com/api'
// Le token a utiliser pour l'API météo  :
const TOKEN = 'ce3f9e80a67aafb9c8f02ad0328714a2591c79244122b41695d61cbdea7c345f';

const apiRequest = async (route, params={}) => {
    try {
        const response = await axios.get(API_URL + route, {
            params: {
                token: TOKEN,
                ...params
            }
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

const insertForecast = (forecastAPIData) => {
    let sql = 'INSERT INTO forecast (date, insee, details) VALUES ';
    let sqlStrings = forecastAPIData.forecast.map(elem => {
        return `("${elem.datetime}", "${elem.insee}", '${JSON.stringify(elem)}')`
    })
    sql += sqlStrings.join(', ');
    db.run(sql)
}
const selectForecast = async (insee) => {
    // let sql = `SELECT * FROM forecast WHERE insee = "${insee}"`;
    let sql = `SELECT * FROM forecast`;
    return db.all(sql);
}

exports.meteo = async (req, res) => {
    res.send('You need to indicate the insee of a city');
}
exports.insee = async(req, res) => {
    const insee = req.params.insee;
    let dbForecast = await selectForecast(insee);
    if (!dbForecast || !dbForecast.length) {
        let response = await apiRequest('/forecast/daily', {insee});
        insertForecast(response);
        dbForecast = await selectForecast(insee);
    }
    const result = dbForecast.map(elem => {
       return {...elem, details: JSON.parse(elem.details)}
    })
    res.json(result)
}