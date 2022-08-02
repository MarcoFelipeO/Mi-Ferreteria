import { Injectable } from '@angular/core';
import { configuracion } from '../../../configuracion/configuracion';
import { HttpClient, HttpHeaders} from  '@angular/common/http';
import { IUser } from '../../interfaces/IUser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = configuracion.apiUrl;
  headers = new HttpHeaders({
    'Content-Type':  'application/json', 
    'Authorization':  'Bearer ' + localStorage.getItem("token"),
  });

  constructor(private httpClient: HttpClient) { }

  async login(auth: IUser){
    try{
      return await this.httpClient.post(this.apiUrl + 'login', auth, {headers: this.headers}).toPromise();
    }
    catch(error){
      let resultado = {
        'status'      : false,
        'data'        : 'error al ejecutar petición'
      };
      return resultado;
    }
  }

  async registrar(usuario: IUser){
    try{
      return await this.httpClient.post(this.apiUrl + 'register', usuario, {headers: this.headers}).toPromise();
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
