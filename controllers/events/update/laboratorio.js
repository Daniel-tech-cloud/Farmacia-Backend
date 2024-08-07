
const Laboratorio = require('../../../models/laboratorios');

const updateLaboratorio = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, descripcion } = req.body;

        const laboratorio = await Laboratorio.findByPk(id);
        if (!laboratorio) {
            return res.status(404).json({ ok: false, message: 'Laboratorio no encontrado' });
        }

        laboratorio.nombre = nombre;
        laboratorio.descripcion = descripcion;

        await laboratorio.save();

        res.json({ ok: true, laboratorio });
    } catch (error) {
        console.error('Error al actualizar el laboratorio:', error);
        res.status(500).json({ ok: false, message: 'Error al actualizar el laboratorio' });
    }
};

module.exports = {
    updateLaboratorio
};