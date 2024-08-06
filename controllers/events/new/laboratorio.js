const Laboratorio = require('../../../models/laboratorios');

const createLaboratorio = async (req, res) => {
    try {
        const { nombre, descripcion } = req.body;

        // Verificar que el nombre no esté vacío
        if (!nombre) {
            return res.status(400).json({ message: 'El nombre es obligatorio' });
        }

        // Crear el nuevo laboratorio
        const nuevoLaboratorio = await Laboratorio.create({ nombre, descripcion });
        res.status(201).json(nuevoLaboratorio);
    } catch (error) {
        // Manejar errores de validación y otros errores
        if (error.name === 'SequelizeValidationError') {
            return res.status(400).json({ message: 'Error de validación', errors: error.errors });
        }
        console.error('Error al crear el laboratorio:', error);
        res.status(500).json({ message: 'Error al crear el laboratorio', error });
    }
};

module.exports = {
    createLaboratorio
};