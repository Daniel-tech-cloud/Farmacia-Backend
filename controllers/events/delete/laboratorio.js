
const Laboratorio = require('../../../models/laboratorios');

const deleteLaboratorio = async (req, res) => {
    const { id } = req.params;

    try {
        // Eliminar el laboratorio por ID
        const rowsDeleted = await Laboratorio.destroy({
            where: { id: id }
        });

        if (rowsDeleted === 0) {
            return res.status(404).json({ error: 'Laboratorio no encontrado' });
        }

        res.json({ message: 'Laboratorio eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { 
    deleteLaboratorio 
};
