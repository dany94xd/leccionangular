const mongoose = require('mongoose');
const { Schema } = mongoose;

const EmployeeSchema = new Schema ({
    //id_empleado:{ type: String, required: true },
    nif: { type: String, required: true },
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    social: { type: String, required: true },
    departamento: { type: String, required: true },
    puesto: { type: String, required: true },
    nomina: [{type: Schema.Types.ObjectId, ref:'Nomina'}],
});

module.exports = mongoose.model('Employee', EmployeeSchema);