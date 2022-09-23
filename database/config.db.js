const mongoose = require("mongoose");
require('dotenv').config();

const dbConection = async()=> {
    try{
        await mongoose.connect(process.env.MONGO_CNN, {

        });
        console.log("Conexión exitosa");
    }catch (error){
        console.log("Error al iniciar la bd", err);
        throw new Error("Error al iniciar la bd")
    }
}

module.exports={
    dbConection
}