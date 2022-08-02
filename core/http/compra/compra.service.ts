import { Injectable } from '@angular/core';

import { configuracion } from '../../../configuracion/configuracion';
import { HttpClient, HttpHeaders} from  '@angular/common/http';
import { ICabeceraCompra } from '../../interfaces/ICabeceraCompra';

@Injectable({
  providedIn: 'root'
})
export class CompraService {
  apiUrl = configuracion.apiUrl;
  headers = new HttpHeaders({
    'Content-Type':  'application/json', 
    'Authorization':  'Bearer ' + localStorage.getItem("token"),
  });

  constructor(private httpClient: HttpClient) { }

  async obtenerCompras(id: number){
    try{
      return await this.httpClient.get(this.apiUrl + 'compra/usuario/' + id, {headers: this.headers}).toPromise();
    }
    catch(error){
      let resultado = {
        'status'      : false,
        'data'        : 'error al ejecutar petición'
      };
      return resultado;
    }
  }
  async index(){
    try{
      return await this.httpClient.get(this.apiUrl + 'compra', {headers: this.headers}).toPromise();
    }
    catch(error){
      let resultado = {
        'status'      : false,
        'data'        : 'error al ejecutar petición'
      };
      return resultado;
    }
  }

  async grabar(compra: ICabeceraCompra){
    try{
      return await this.httpClient.post(this.apiUrl + 'compra', compra, {headers: this.headers}).toPromise();
    }
    catch(error){
      let resultado = {
        'status'      : false,
        'data'        : 'error al ejecutar petición'
      };
      return resultado;
    }
  }

  async actualizar(data: any){
    try{
      return await this.httpClient.put(this.apiUrl + 'compra/id/' + data.id, data, {headers: this.headers}).toPromise();
    }
    catch(error){
      let resultado = {
        'status'      : false,
        'data'        : 'error al ejecutar petición'
      };
      return resultado;
    }
  }
}
