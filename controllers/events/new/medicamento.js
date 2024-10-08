const multer = require('multer');
const Medicamento = require('../../../models/medicamento');
const Sustancia = require('../../../models/sustancias');
const Laboratorio = require('../../../models/laboratorios');
const Presentacion = require('../../../models/presentaciones');

// Configuración de multer para manejar la carga de archivos
const storage = multer.memoryStorage();
const upload = multer({ storage: storage }).single('imagen');

const createMedicament = async (req, res) => {
    upload(req, res, async (err) => {
        if (err) {
            return res.status(500).json({ ok: false, error: 'Error al subir el archivo.' });
        }

        try {
            const { nombre, tipo, sustancia: nombreSustancia, presentacion: nombrePresentacion, laboratorio: nombreLaboratorio, descripcion, indicaciones, compuesto } = req.body;
            const imagen = req.file ? req.file.buffer : null;

            // Buscar el ID de la sustancia por nombre
            const sustancia = await Sustancia.findOne({ where: { nombre: nombreSustancia } });
            if (!sustancia) {
                return res.status(404).json({ ok: false, error: 'Sustancia no encontrada.' });
            }
            const idSustancia = sustancia.id;

            // Buscar el ID de la presentación por nombre
            const presentacion = await Presentacion.findOne({ where: { nombre: nombrePresentacion } });
            if (!presentacion) {
                return res.status(404).json({ ok: false, error: 'Presentación no encontrada.' });
            }
            const idPresentacion = presentacion.id;

            // Buscar el ID del laboratorio por nombre
            const laboratorio = await Laboratorio.findOne({ where: { nombre: nombreLaboratorio } });
            if (!laboratorio) {
                return res.status(404).json({ ok: false, error: 'Laboratorio no encontrado.' });
            }
            const idLaboratorio = laboratorio.id;

            // Crear el nuevo medicamento
            const nuevoMedicamento = await Medicamento.create({
                nombre,
                tipo,
                idSustancia,
                idPresentacion,
                idLaboratorio,
                descripcion,
                indicaciones,
                imagen,
                compuesto: compuesto || null // Asegúrate de manejar el campo compuesto correctamente
            });

            res.status(201).json({ ok: true, medicamento: nuevoMedicamento });
        } catch (error) {
            res.status(500).json({ ok: false, error: error.message });
        }
    });
};

module.exports = {
    createMedicament
};
