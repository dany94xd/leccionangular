const Employee = require('../models/employee');

const employeeCtrl = {};

employeeCtrl.getEmployees = async (req, res) => {
    const employees = await Employee.find()
    res.json(employees);
};

employeeCtrl.createEmployees = async (req, res) => {
    const employee = new Employee({
        //id_empleado: req.body.id_empleado,
        nif: req.body.nif,
        name: req.body.name,
        lastname: req.body.lastname,
        social: req.body.social,
        departamento: req.body.departamento,
        puesto: req.body.puesto
    });
    await employee.save();
    res.json({
        'status': 'Employee Saved'
    });
};

employeeCtrl.getEmployee = async (req, res) => {
    const employee = await Employee.findById(req.params.id);
    res.json(employee);
};

employeeCtrl.editEmployee = async (req, res) => {
    const { id } = req.params;
    const employee = {
        id_empleado: req.body.id_empleado,
        name: req.body.name,
        lastname: req.body.lastname,
        nif: req.body.nif,
        social: req.body.social,
        departamento: req.body.departamento,
        puesto: req.body.puesto
    }
    await Employee.findByIdAndUpdate(id, {$set: employee}, {new: true});
    res.json({status: 'Employee Update'});
};

employeeCtrl.deleteEmployee = async (req, res) => {
    await Employee.findByIdAndRemove(req.params.id);
    res.json({status:'Employee Deleted'});
}


module.exports = employeeCtrl;