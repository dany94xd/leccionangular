export class Nomina{
    constructor(_id = '', id_empleado = '', mes = 0, importe= 0, irpf = 0) {
        this._id = _id;
        this.id_empleado = id_empleado;
        this.mes = mes;
        this.importe = importe;
        this.irpf = irpf;

    }

    _id: string;
    id_empleado: string;
    mes: number;
    importe: number;
    irpf: number;
}
