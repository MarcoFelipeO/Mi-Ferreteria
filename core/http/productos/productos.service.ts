import { Injectable } from '@angular/core';

import { configuracion } from '../../../configuracion/configuracion';
import { HttpClient, HttpHeaders} from  '@angular/common/http';
import { IProductos } from '../../interfaces/IProductos';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  apiUrl = configuracion.apiUrl;
  headers = new HttpHeaders({
    'Content-Type':  'application/json', 
    'Authorization':  'Bearer ' + localStorage.getItem("token"),
  });

  constructor(private httpClient: HttpClient) { }

  async obtenerProducto(id: number){
    try{
      return await this.httpClient.get(this.apiUrl + 'producto/id/' + id, {headers: this.headers}).toPromise();
    }
    catch(error){
      let resultado = {
        'status'      : false,
        'data'        : 'error al ejecutar petición'
      };
      return resultado;
    }
  }

  async listar(){
    try{
      return await this.httpClient.get(this.apiUrl + 'producto', {headers: this.headers}).toPromise();
    }
    catch(error){
      let resultado = {
        'status'      : false,
        'data'        : 'error al ejecutar petición'
      };
      return resultado;
    }
  }

  async grabar(producto: IProductos){
    try{
      return await this.httpClient.post(this.apiUrl + 'producto', producto, {headers: this.headers}).toPromise();
    }
    catch(error){
      let resultado = {
        'status'      : false,
        'data'        : 'error al ejecutar petición'
      };
      return resultado;
    }
  }

  async actualizar(producto: IProductos){
    try{
      return await this.httpClient.put(this.apiUrl + 'producto/id/' + producto.id, producto, {headers: this.headers}).toPromise();
    }
    catch(error){
      let resultado = {
        'status'      : false,
        'data'        : 'error al ejecutar petición'
      };
      return resultado;
    }
  }

  async actualizarStock(data: any){
    try{
      return await this.httpClient.put(this.apiUrl + 'producto/stock', data, {headers: this.headers}).toPromise();
    }
    catch(error){
      let resultado = {
        'status'      : false,
        'data'        : 'error al ejecutar petición'
      };
      return resultado;
    }
  }

  async eliminar(id: number){
    try{
      return await this.httpClient.delete(this.apiUrl + 'producto/id/' + id, {headers: this.headers}).toPromise();
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
