import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Nomina } from '../models/nomina';
import { NominasComponent } from '../components/nominas/nominas.component';

@Injectable({
  providedIn: 'root'
})
export class NominaService {

  selectedNomina: Nomina;
  nominas: Nomina[];
  readonly URL_API = 'http://localhost:3000/api/nominas'

  constructor(private http: HttpClient) {
    this.selectedNomina = new Nomina();
  }

  getNominas() {
    return this.http.get(this.URL_API);
  }

  postNomina(Nomina: Nomina) {
    return this.http.post(this.URL_API, Nomina);
  }

  putNomina(nomina: Nomina) {
    return this.http.put(this.URL_API + `/${nomina._id}`, nomina);
  }

  deleteNomina(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
