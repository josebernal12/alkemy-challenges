const Personaje = require('../models/peliculas')
const sequelize = require('sequelize')
const Op = sequelize.Op

const filtrarPersonaje = async (req, res) => {
   
    try {

        let personaje;
        const { name, age, Idmovie } = req.query



        if (name) {
            personaje = await Personaje.findAll({ where: { nombre: { [Op.like]: '%' + name + '%' } } })

        }
        else if (age) {
            personaje = await Personaje.findAll({ where: { edad: { [Op.like]: '%' + age + '%' } } })

        }
        else if (Idmovie) {
            personaje = await Personaje.findAll({ where: { peliculaId: { [Op.like]: '%' + Idmovie + '%' } } })

        }
        else {
            return res.json('el termino no esta correcto')
        }
        res.json(personaje)

    } catch (error) {
        res.json(error)
    }

}

module.exports = {
    filtrarPersonaje
}