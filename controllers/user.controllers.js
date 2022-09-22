const { response } = require('express')

// localhost:8081/api/usuarios?q=hola&nombre=juan&pkey=123
const userGet = (req, res) => {
    const query = req.query;
    res.json({
        'key': 'Hellow Wolrd',
        query
    });
}

const userPost = (req, res) => {
    const body = req.body;
    res.json({
        key: 'Hellow Wolrd',
        body: body
    });
}

const userPut = (req, res) => {
    const id = req.params;
    const body = req.body;
    res.json({
        'key': 'Hellow Wolrd',
        id
    });
}

const userDelete = (req, res) => {
    res.json({
        'key': 'Hellow Wolrd'
    });
}

module.exports = {
    userGet, userPost, userPut, userDelete
}