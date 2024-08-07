const Sustancia = require('../../../models/sustancias');

const updateSustancia = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, descripcion } = req.body;

        const sustancia = await Sustancia.findByPk(id);
        if (!sustancia) {
            return res.status(404).json({ ok: false, message: 'Sustancia no encontrada' });
        }

        sustancia.nombre = nombre;
        sustancia.descripcion = descripcion;

        await sustancia.save();

        res.json({ ok: true, sustancia });
    } catch (error) {
        console.error('Error al actualizar la sustancia:', error);
        res.status(500).json({ ok: false, message: 'Error al actualizar la sustancia' });
    }
};

module.exports = {
    updateSustancia
};