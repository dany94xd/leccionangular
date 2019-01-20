import { Component, OnInit } from '@angular/core';
import { NominaService } from '../../services/nomina.service';
import { NgForm } from '@angular/forms';
import { Nomina } from 'src/app/models/nomina';

import { EmployeeService } from '../../services/employee.service';
import { Employee } from 'src/app/models/employee';


declare var M: any;

@Component({
  selector: 'app-nominas',
  templateUrl: './nominas.component.html',
  styleUrls: ['./nominas.component.css'],
  providers: [NominaService]
})
export class NominasComponent implements OnInit {

  Items = [];

nif:String;
// employeeeID: String;
employeeeName: String;
employeeeLastName: String;

  constructor(private nominaService: NominaService, private employeeService:EmployeeService) { }

  ngOnInit() {
    this.getNominas();
    this.getEmployees();
  }

  addNomina(form: NgForm) {
    if(form.value._id) {
      this.nominaService.putNomina(form.value)
        .subscribe(res => {
          this.resetForm(form);
          M.toast({html: 'Actualizado Satisfactoriamente'});
          this.getNominas();
        })
    } else {
      this.nominaService.postNomina(form.value)
      .subscribe(res =>{
        this.resetForm(form);
        M.toast({html: 'Guardado Satisfactoriamente'});
        this.getNominas();
      });
    }
  }

  getNominas() {
    this.nominaService.getNominas()
      .subscribe(res => {
        this.nominaService.nominas = res as Nomina[];
      });
  }

  getEmployees() {
    this.employeeService.getEmployees()
      .subscribe(res => {
        this.employeeService.employees = res as Employee[];
      });
  }
  
  
  editNomina(nomina: Nomina) {
    this.nominaService.selectedNomina = nomina;
  }

  // deleteEmployee(_id: string){
  //   if(confirm('Esta seguro de querer eliminar?')){
  //     this.nominaService.deleteNomina(_id)
  //     .subscribe(res => {
  //       this.getNominas();
  //       M.toast({html: 'Eliminado Satisfactoriamente'});
  //     });
  //   }
  // }



   deleteNomina(_id: string){
     if(confirm('Esta seguro de querer eliminar?')){
       this.nominaService.deleteNomina(_id)
      .subscribe(res => {
         this.getNominas();
         M.toast({html: 'Eliminado Satisfactoriamente'});
       });
    }
  }

  resetForm(form?: NgForm){
    if (form){
      form.reset();
      this.nominaService.selectedNomina = new Nomina();
    }
  }

}
