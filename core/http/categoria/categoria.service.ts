import { Injectable } from '@angular/core';

import { configuracion } from '../../../configuracion/configuracion';
import { HttpClient, HttpHeaders} from  '@angular/common/http';
import { ICategoria } from '../../interfaces/ICategoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  apiUrl = configuracion.apiUrl;
  headers = new HttpHeaders({
    'Content-Type':  'application/json', 
    'Authorization':  'Bearer ' + localStorage.getItem("token"),
  });

  constructor(private httpClient: HttpClient) { }

  async obtenerCategoria(id: number){
    try{
      return await this.httpClient.get(this.apiUrl + 'categoria/id/' + id, {headers: this.headers}).toPromise();
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
      return await this.httpClient.get(this.apiUrl + 'categoria', {headers: this.headers}).toPromise();
    }
    catch(error){
      let resultado = {
        'status'      : false,
        'data'        : 'error al ejecutar petición'
      };
      return resultado;
    }
  }

  async grabar(categoria: ICategoria){
    try{
      return await this.httpClient.post(this.apiUrl + 'categoria', categoria, {headers: this.headers}).toPromise();
    }
    catch(error){
      let resultado = {
        'status'      : false,
        'data'        : 'error al ejecutar petición'
      };
      return resultado;
    }
  }

  async actualizar(categoria: ICategoria){
    try{
      return await this.httpClient.put(this.apiUrl + 'categoria/id/' + categoria.id, categoria, {headers: this.headers}).toPromise();
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
      return await this.httpClient.delete(this.apiUrl + 'categoria/id/' + id, {headers: this.headers}).toPromise();
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
