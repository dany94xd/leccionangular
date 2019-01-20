export class Employee {

    constructor(_id = '', id_empleado = '',name = '', lastname = '', nif = '', social = '', departamento = '', puesto = '') {
        this._id = _id;
        this.id_empleado = id_empleado;
        this.name = name;
        this.lastname = lastname;
        this.nif = nif;
        this.social = social;
        this.departamento = departamento;
        this.puesto = puesto

    }

    _id: string;
    id_empleado: string;
    name: string;
    lastname: string;
    nif: string;
    social: string;
    departamento: string;
    puesto: string;
}
