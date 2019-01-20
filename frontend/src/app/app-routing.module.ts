import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './components/employees/employees.component';
import { NominasComponent } from './components/nominas/nominas.component';
import { VacacionesComponent } from './components/vacaciones/vacaciones.component';
import { Employee } from './models/employee';

const routes: Routes = [
  //{ path: '', component: EmployeesComponent },
  { path: 'nominas', component: NominasComponent },
  { path: 'vacaciones', component: VacacionesComponent },
  { path: 'empleados', component: EmployeesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})




export class AppRoutingModule { }
export const routingComponents = [VacacionesComponent, NominasComponent]