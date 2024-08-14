// controllers/events/delete/medicamento.js
const Medicamento = require('../../../models/medicamento');

const deleteMedicament = async (req, res) => {
    const { id } = req.params;

    try {
        // Eliminar el medicamento por ID
        const rowsDeleted = await Medicamento.destroy({
            where: { id: id }
        });

        if (rowsDeleted === 0) {
            return res.status(404).json({ error: 'Medicamento no encontrado' });
        }

        res.json({ message: 'Medicamento eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { 
    deleteMedicament 
};
