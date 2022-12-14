const { response } = require('express');
const Usuario = require('../models/usuario');
const bcryptjs = require("bcryptjs");
const { validationResult } = require('express-validator');

// localhost:8081/api/usuarios?q=hola&nombre=juan&pkey=123
const userGet = async (req, res) => {
    const {limite=3, rango} = req.query;
    const resp = await Promise.all([
        Usuario.find({estado:true}).limit(Number(limite)).skip(Number(rango)),
        Usuario.countDocuments()
    ]);

    const usuarios = resp[0] ;
    const total = resp[1];

    res.json({
        'key': 'Hellow Wolrd',
        usuarios,
        total
    });
}

const userPost =  async (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()){
        return res.status(400).json(errors);
    }

    const {nombre, correo, contraseña, rol} = req.body
    const body = req.body;
    const usuario = new Usuario({nombre, correo, contraseña, rol});

    //verificar si el correo existe
    const correoExiste = await Usuario.findOne({correo})
    if (correoExiste){
        return res.status(400).json({
            "msj": "Este email ya existe"
        })
    }
    //encriptar la constraseña
    const salt = bcryptjs.genSaltSync(10);
    usuario.contraseña = bcryptjs.hashSync(contraseña, salt);

    //guardar en la bd
    await usuario.save();
    res.json({
        key: 'Hellow Wolrd',
        usuario
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