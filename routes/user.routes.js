const { Router } = require('express');
const { check } = require('express-validator');
const { userGet, userPost, userPut, userDelete } = require('../controllers/user.controllers');
const { esRolValido } =  require('../helpers/db-validators');

const router = Router();

router.get('/', userGet);

router.post('/', [
    check('correo', 'El correo no es válido').isEmail(),
    check('contraseña', 'El password debe contener como mínimo 6 letras').isLength({min:6}),
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    //check('rol', 'No es un rol válido').isIn(['ADMIN_ROLE', 'USER_ROLE'])
    check('rol').custom(esRolValido)
    
], userPost);

router.put('/:id', userPut);

router.delete('/', userDelete);

module.exports = router;