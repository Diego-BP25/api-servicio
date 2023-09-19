const {Schema, model} = require('mongoose')

const ServicioSchema = Schema({
    id: {
        type: String,
        required:[true, "El id es obligatorio"]
    },

    nombre: {
        type: String,
        required:[true, "El nombre es obligatoria"]
    },

    id_categoria: {
        type: Schema.Types.ObjectId,
        ref:'categorias',
        required:[true, "La categoria es obligatoria"]
    },

    estado: {
        type: String,
        required:[true, "El estado es obligatoria"]
    },

    
})

//Exportar la función UsuarioSchema
module.exports = model('Servicio',ServicioSchema)

