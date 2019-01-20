import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { from } from 'rxjs';
import { NominasComponent } from './components/nominas/nominas.component';
import { VacacionesComponent } from './components/vacaciones/vacaciones.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    routingComponents,
    NominasComponent,
    VacacionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
