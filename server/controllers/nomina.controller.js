const Nomina = require('../models/nomina');

const nominaCtrl = {};

nominaCtrl.getNominas = async (req, res) => {
    const nominas = await Nomina.find()
    res.json(nominas);
};

nominaCtrl.createNominas = async (req, res) => {
    const nomina = new Nomina({
       // id_empleado: req.body.id_empleado,
       nif:req.body.nif,
        mes: req.body.mes,
        importe: req.body.importe,
        //irpf: req.body.irpf
    });
    await nomina.save();
    res.json({
        'status': 'Nomina Saved'
    });
};

nominaCtrl.getNomina = async (req, res) => {
    const nomina = await Nomina.findById(req.params.id);
    res.json(nomina);
};

nominaCtrl.editNomina = async (req, res) => {
    const { id } = req.params;
    const nomina = {
        id_empleado: req.body.id_empleado,
        mes: req.body.mes,
        importe: req.body.importe,
        irpf: req.body.irpf
    }
    await Nomina.findByIdAndUpdate(id, {$set: nomina}, {new: true});
    res.json({status: 'Nomina Update'});
};

nominaCtrl.deleteNomina = async (req, res) => {
    await Nomina.findByIdAndRemove(req.params.id);
    res.json({status:'Nomina Deleted'});
}


module.exports = nominaCtrl;