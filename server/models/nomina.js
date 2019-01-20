const mongoose = require('mongoose');
const { Schema } = mongoose;

const NominaSchema = new Schema ({
    //id_empleado:{ type: String, required: true },
    nif:{type:String,required:true},
    mes: { type: Number, required: true },
    importe: { type: Number, required: true },
    //irpf: { type: Number, required: true },
});

module.exports = mongoose.model('Nomina', NominaSchema);