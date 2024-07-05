const { response } = require('express');
const Laboratorio = require('../../models/laboratorios');

const getLaboratorios = async (req, res = response) => {
  try {
    const laboratorios = await Laboratorio.findAll();
    res.status(200).json({
      ok: true,
      laboratorios
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Por favor hable con el administrador'
    });
  }
}

const getLaboratorioById = async (req, res = response) => {
  const { id } = req.params;
  try {
    const laboratorio = await Laboratorio.findByPk(id);
    if (!laboratorio) {
      return res.status(404).json({
        ok: false,
        msg: 'Laboratorio no encontrado'
      });
    }
    res.status(200).json({
      ok: true,
      laboratorio
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Por favor hable con el administrador'
    });
  }
}

const getLaboratoriosByName = async (req, res = response) => {
    const { nombre } = req.query;
    try {
        const laboratorios = await Laboratorio.findAll({
        where: {
            nombre: {
            [Op.like]: `%${nombre}%`
            }
        }
        });
        res.status(200).json({
        ok: true,
        laboratorios
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
        ok: false,
        msg: 'Por favor hable con el administrador'
        });
    }
}

module.exports = {
    getLaboratorios,
    getLaboratorioById,
    getLaboratoriosByName
};