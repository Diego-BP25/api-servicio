const {response}= require('express')

//Importancia de los modelos
const Servicio = require('../models/servicio')

//Metodo GET de la API
const servicioGet = async (req, res = response) =>{
    //const {nombre} = req.query //Desestructuracion

    //Consultar todos los Vehiculos
    const servicio = await Servicio.find()

    res.json({ //RESPUESTA EN JSOn
        servicio
    })
   
}
//Método POST de la api
const servicioPost = async(req, res) => {
    let mensaje = 'Inserción Exitosa'
    const body = req.body //Captura de atributos
    //console.log(body);
    try {
        const servicio = new Servicio(body) //Instanciando el objeto
        await servicio.save() //Inserta en la colección
    } catch (error) {
        mensaje = error
        console.log(error)
    }
    res.json({
        msg: mensaje
    })
}


//Método Put de la api
const servicioPut = async(req, res = response) => {

    const {id, nombre, id_categoria, estado} = req.body
    let mensaje = 'Modificación exitosa'
    try{
         await Servicio.findOneAndUpdate({id:id}, 
            {id:id, nombre:nombre, id_categoria:id_categoria, estado:estado})
    }
    catch(error){
        mensaje = 'Se presentaron problemas en la modificación.'
    }

    res.json({
        msg: mensaje
    })
}
//Método DELETE de la api
const servicioDelete = async(req, res) => {

    const {_id} = req.body
    let mensaje = 'La eliminiación se efectuó exitosamente.'

    try{
        const servicio = await Servicio.deleteOne({_id: _id})
    }
    catch(error){
        mensaje = 'Se presentaron problemas en la eliminación.'
    }

    res.json({
        msg: mensaje
    })
}


module.exports= {
    servicioGet, 
    servicioPost,
    servicioPut,
    servicioDelete
}
