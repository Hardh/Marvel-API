const marvelService = require('../services/marvelapi.service')

exports.post = (req, res, next) => {
    res.status(200).send('Requisição recebida com sucesso!');
};
exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Requisição recebida com sucesso! ${id}`);
};
exports.delete = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Requisição recebida com sucesso! ${id}`);
};
exports.get = (req, res, next) => {
    let data = marvelService.dataCaracters();
    data.then((values) => { res.status(200).send(JSON.stringify(values)); });
    data.catch((error) => { res.status(200).send(JSON.stringify(values)); });
}
