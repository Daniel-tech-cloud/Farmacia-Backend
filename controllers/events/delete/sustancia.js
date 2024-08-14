
const Sustancia = require('../../../models/sustancias');

const deleteSustancia = async (req, res) => {
    const { id } = req.params;

    try {
        // Eliminar la sustancia por ID
        const rowsDeleted = await Sustancia.destroy({
            where: { id: id }
        });

        if (rowsDeleted === 0) {
            return res.status(404).json({ error: 'Sustancia no encontrada' });
        }

        res.json({ message: 'Sustancia eliminada correctamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    deleteSustancia 
};
