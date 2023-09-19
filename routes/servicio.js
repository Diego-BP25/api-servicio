const {Router} = require('express')
//Desestructuracion. EXtrar un atributo de un objeto

const route = Router()

//importar metodos del controlador
const {servicioGet, servicioPost, servicioPut, servicioDelete} = require('../controllers/servicio')

route.get('/',servicioGet) //Listar datos

route.post('/',servicioPost)

route.put('/',servicioPut)

route.delete('/',servicioDelete)


module.exports = route

//APP - SERVER - ROUTE - CONTROLLADOR - MODELO