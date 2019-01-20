import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vacacion } from '../models/vacacion';
import { VacacionesComponent } from '../components/vacaciones/vacaciones.component';

@Injectable({
  providedIn: 'root'
})
export class VacacionService {

  selectedVacacion: Vacacion;
  vacaciones: Vacacion[];
  readonly URL_API = 'http://localhost:3000/api/vacaciones'

  constructor(private http: HttpClient) {
    this.selectedVacacion = new Vacacion();
  }

  getVacaciones() {
    return this.http.get(this.URL_API);
  }

  postVacacion(Vacacion: Vacacion) {
    return this.http.post(this.URL_API, Vacacion);
  }

  putVacacion(vacacion: Vacacion) {
    return this.http.put(this.URL_API + `/${vacacion._id}`, vacacion);
  }

  deleteVacacion(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
