export class Vacacion {

    constructor(_id = '', id_empleado = '', finicio = '', ffin= '', diasusados = 0) {
        this._id = _id;
        this.id_empleado = id_empleado;
        this.finicio = finicio;
        this.ffin = ffin;
        this.diasusados = diasusados;

    }

    _id: string;
    id_empleado: string;
    finicio: string;
    ffin: string;
    diasusados: number;
}
