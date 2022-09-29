const Role = require('../models/role');

const esRolValido = async (rol='') =>{
    const existeRol = await Role.findOne({"rol": rol});
    if (!existeRol){
        throw new Error(`Èl rol ${rol} no está en la BD`)
    }
}

module.exports={esRolValido}