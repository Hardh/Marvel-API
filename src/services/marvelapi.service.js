const request = require('request');
const endPoints = require('../config/enviroment').EndPoints;

/**
* Metodo que retorna Todos os DADOS de Caracters da API Marvel
* @return All Caracters
*/
const dataCaracters = () => {
    let point = endPoints.characters();
    return new Promise((resolve, reject) => {
        request(point, { json: true }, (err, res, body) => {
            if (err) reject(err);
            if (body) resolve(body);
        });
    })
};

module.exports = {
    dataCaracters
}