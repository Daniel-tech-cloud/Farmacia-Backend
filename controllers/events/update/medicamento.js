const Medicamento = require('../../../models/medicamento');
const multer = require('multer');

// Configura multer para manejar la subida de archivos
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage });

const updateMedicament = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, tipo, idSustancia, idPresentacion, idLaboratorio, descripcion, indicaciones, compuesto } = req.body;

        const medicamento = await Medicamento.findByPk(id);
        if (!medicamento) {
            return res.status(404).json({ ok: false, message: 'Medicamento no encontrado' });
        }

        medicamento.nombre = nombre;
        medicamento.tipo = tipo;
        medicamento.idSustancia = idSustancia;
        medicamento.idPresentacion = idPresentacion;
        medicamento.idLaboratorio = idLaboratorio;
        medicamento.descripcion = descripcion;
        medicamento.indicaciones = indicaciones;
        medicamento.compuesto = compuesto;

        if (req.file) {
            medicamento.imagen = req.file.path;
        }

        await medicamento.save();

        res.json({ ok: true, medicamento });
    } catch (error) {
        console.error('Error al actualizar el medicamento:', error);
        res.status(500).json({ ok: false, message: 'Error al actualizar el medicamento' });
    }
};

module.exports = {
    updateMedicament,
    upload
};