const Vacacion = require('../models/vacacion');

const vacacionCtrl = {};

vacacionCtrl.getVacaciones = async (req, res) => {
    const vacaciones = await Vacacion.find()
    res.json(vacaciones);
};

vacacionCtrl.createVacaciones = async (req, res) => {
    const vacacion = new Vacacion({
       // id_empleado: req.body.id_empleado,
       nif:req.body.nif, 
       finicio: req.body.finicio,
        ffin: req.body.ffin,
        diasusados: req.body.diasusados
    });
    await vacacion.save();
    res.json({
        'status': 'Vacacion Saved'
    });
};

vacacionCtrl.getVacacion = async (req, res) => {
    const vacacion = await Vacacion.findById(req.params.id);
    res.json(vacacion);
};

vacacionCtrl.editVacacion = async (req, res) => {
    const { id } = req.params;
    const vacacion = {
        id_empleado: req.body.id_empleado,
        finicio: req.body.finicio,
        ffin: req.body.ffin,
        diasusados: req.body.diasusados
    }
    await Vacacion.findByIdAndUpdate(id, {$set: vacacion}, {new: true});
    res.json({status: 'Vacacion Update'});
};

vacacionCtrl.deleteVacacion = async (req, res) => {
    await Vacacion.findByIdAndRemove(req.params.id);
    res.json({status:'Vacacion Deleted'});
}


module.exports = vacacionCtrl;