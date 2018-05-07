const md5 = require('md5');

const baseUrl = 'http://gateway.marvel.com';

const marvelKeys = {
    privateKey: process.env.PRIVATE_KEY,
    publicKey: process.env.PUBLIC_KEY
}

const auth = () => {
    let timesTamp = new Date().getTime();
    authKey = md5(timesTamp + marvelKeys.privateKey + marvelKeys.publicKey);
    return `?ts=${timesTamp}&apikey=${marvelKeys.publicKey}&hash=${authKey}`
}


class EndPoints {
    static characters() { return baseUrl + `/v1/public/characters` + auth() }
    static characterById(id) { return baseUrl + `/v1/public/characters/${id}` + auth() }
}

module.exports = {
    EndPoints
}