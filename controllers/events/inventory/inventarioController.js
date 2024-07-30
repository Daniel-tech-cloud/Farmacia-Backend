// controllers/inventarioController.js

const Inventario = require('../../../models/inventario');

const getAllInventario = async (req, res) => {
    try {
        const inventarios = await Inventario.findAll();
        res.json(inventarios);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el inventario' });
    }
};

const addInventario = async (req, res) => {
    const { nombreMedicamento, idLaboratorio, cantidad, precioCompra, precioVenta, fechaCompra, caducidad } = req.body;

    try {
        const nuevoMedicamento = await Inventario.create({
            nombreMedicamento,
            idLaboratorio,
            cantidad,
            precioCompra,
            precioVenta,
            fechaCompra,
            caducidad
        });

        res.status(201).json(nuevoMedicamento);
    } catch (error) {
        res.status(500).json({ error: 'Error al agregar el medicamento' });
    }
};

const updateInventario = async (req, res) => {
    const { id } = req.params;
    const { cantidad, precioCompra, precioVenta, fechaCompra, caducidad } = req.body;

    try {
        const inventario = await Inventario.findByPk(id);
        if (!inventario) {
            return res.status(404).json({ error: 'Inventario no encontrado' });
        }

        inventario.cantidad = cantidad;
        inventario.precioCompra = precioCompra;
        inventario.precioVenta = precioVenta;
        inventario.fechaCompra = fechaCompra;
        inventario.caducidad = caducidad;

        await inventario.save();
        res.json(inventario);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el inventario' });
    }
};

const deleteInventario = async (req, res) => {
    const { id } = req.params;

    try {
        const inventario = await Inventario.findByPk(id);
        if (!inventario) {
            return res.status(404).json({ error: 'Inventario no encontrado' });
        }

        await inventario.destroy();
        res.json({ message: 'Inventario eliminado con éxito' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el inventario' });
    }
};

module.exports = {
    getAllInventario,
    addInventario,
    updateInventario,
    deleteInventario
};
