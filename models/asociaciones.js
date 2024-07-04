
const Presentaciones = require('./presentaciones');
const Laboratorios = require('./laboratorios');
const Sustancias = require('./sustancias');
const Medicamento = require('./medicamento');
const Inventario = require('./inventario');
const Usuario = require('./usuario');
const Roles = require('./roles');

// Relaciones de Medicamento
Medicamento.belongsTo(Sustancias, { foreignKey: 'idSustancia' });
Medicamento.belongsTo(Presentaciones, { foreignKey: 'idPresentacion' });
Medicamento.belongsTo(Laboratorios, { foreignKey: 'idLaboratorio' });

// Relaciones de Inventario
Inventario.belongsTo(Medicamento, { foreignKey: 'idMedicamento' });
Inventario.belongsTo(Laboratorios, { foreignKey: 'idLaboratorio' });

// Relaciones de Usuario
Usuario.belongsTo(Roles, { foreignKey: 'idRol' });

module.exports = {
    Presentaciones,
    Laboratorios,
    Sustancias,
    Medicamento,
    Inventario,
    Usuario,
    Roles
};