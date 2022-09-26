const Pelicula = require('../models/peliculas')
const Personaje = require('../models/personaje')

const listarPelicula = async (req, res) => {


    const pelicula = await Pelicula.findAll({
        attributes: ['img', 'titulo', 'fecha']
    })
    res.json(pelicula)
}



const DetallePeliculas = async (req, res) => {

    const pelicula = await Pelicula.findAll({
        include: {
            model: Personaje,
            attributes: ['nombre', 'edad']

        },



    })

    res.json({ pelicula })
}

const crearPelicula = async (req, res) => {

    const { titulo, fecha, calificacion, personajeId, generoId } = req.body

    const peliculaCreada = await Pelicula.create({
        titulo,
        fecha,
        calificacion,
        personajeId,
        generoId
    })

    res.json({
        peliculaCreada
    })
}


const actualizarPelicula = async (req, res) => {

    const { id } = req.params

    const { body } = req

    const peliculaActualizada = await Pelicula.findByPk(id)

    await peliculaActualizada.update(body)

    res.json({
        peliculaActualizada
    })

}


const eliminarPelicula = async (req, res) => {

    const { id } = req.params

    const peliculaEliminada = await Pelicula.findByPk(id)

    await peliculaEliminada.destroy()

    res.json({
        peliculaEliminada
    })
}


module.exports = {
    crearPelicula,
    DetallePeliculas,
    listarPelicula,
    actualizarPelicula,
    eliminarPelicula
}