import { Component, OnInit } from '@angular/core';

import { VacacionService } from '../../services/vacacion.service';
import { NgForm } from '@angular/forms';
import { Vacacion } from 'src/app/models/vacacion';

import { EmployeeService } from '../../services/employee.service';
import { Employee } from 'src/app/models/employee';

declare var M: any;

@Component({
  selector: 'app-vacaciones',
  templateUrl: './vacaciones.component.html',
  styleUrls: ['./vacaciones.component.css'],
  providers: [VacacionService]
})
export class VacacionesComponent implements OnInit {

  constructor(private vacacionService: VacacionService, private employeeService:EmployeeService) { }

  ngOnInit() {
    this.getVacaciones();
    this.getEmployees();
  }

  addVacacion(form: NgForm) {
    if(form.value._id) {
      this.vacacionService.putVacacion(form.value)
        .subscribe(res => {
          this.resetForm(form);
          M.toast({html: 'Actualizado Satisfactoriamente'});
          this.getVacaciones();
        })
    } else {
      this.vacacionService.postVacacion(form.value)
      .subscribe(res =>{
        this.resetForm(form);
        M.toast({html: 'Guardado Satisfactoriamente'});
        this.getVacaciones();
      });
    }
  }

  getVacaciones() {
    this.vacacionService.getVacaciones()
      .subscribe(res => {
        this.vacacionService.vacaciones = res as Vacacion[];
      });
  }

  getEmployees() {
    this.employeeService.getEmployees()
      .subscribe(res => {
        this.employeeService.employees = res as Employee[];
      });
  }

  editVacacion(vacacion: Vacacion) {
    this.vacacionService.selectedVacacion = vacacion;
  }

  deleteVacacion(_id: string){
    if(confirm('Esta seguro de querer eliminar?')){
      this.vacacionService.deleteVacacion(_id)
      .subscribe(res => {
        this.getVacaciones();
        M.toast({html: 'Eliminado Satisfactoriamente'});
      });
    }
  }

  resetForm(form?: NgForm){
    if (form){
      form.reset();
      this.vacacionService.selectedVacacion = new Vacacion();
    }
  }

}
