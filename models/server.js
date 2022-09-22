const express = require("express");
const cors = require('cors')
require('dotenv').config();

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuarioPath = '/api/usuarios'
        this.middleware();
        this.routes();
    }

    middleware(){
        this.app.use(cors());
        // directorio público
        this.app.use(express.static('public'));
        // lectura y parseo del body
        this.app.use(express.json())
    }

    routes (){
        this.app.use(this.usuarioPath, require('../routes/user.routes'));
    }

    listen(){
        this.app.listen(this.port, () => {
           console.log(this.port);
        })
    }
}

module.exports = Server;