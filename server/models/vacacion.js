const mongoose = require('mongoose');
const { Schema } = mongoose;

const NominaSchema = new Schema ({
   // id_empleado:{ type: String, required: true },
   nif:{type:String,required:true},
    finicio: { type: String, required: true },
    ffin: { type: String, required: true },
    diasusados: { type: Number, required: true }
});

module.exports = mongoose.model('Vacacion', NominaSchema);