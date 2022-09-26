

const esAdminRole = (req,res) => {

    if (!req.usuario) {
        return res.status(500).json({
            msg: 'se quire verificar el role sin validar el token primero'
        })
    }
    const { rol, nombre } = req.usuario

    if (rol !== 'ADMIN_ROLE') {
        return res.status(401).json({
            msg: `${nombre} no es administrador - no puede hacer esto`
        })
    }

    next()
}


module.exports = {
    esAdminRole
}