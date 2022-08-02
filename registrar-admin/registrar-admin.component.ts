import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/http/auth/auth.service';
import { IUser } from 'src/app/core/interfaces/IUser';

@Component({
  selector: 'app-registrar-admin',
  templateUrl: './registrar-admin.component.html',
  styleUrls: ['./registrar-admin.component.css']
})
export class RegistrarAdminComponent implements OnInit {
  usuario: IUser = {
    email: '',
    password: '',
    repassword: '',
    perfil: 'administrador',
    name: ''
  }

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  async registrar(){
    if((this.usuario.name as '').length === 0){
      alert('nombre vacio');
    }
    else if(this.usuario.email.length === 0){
      alert('email vacio');
    }
    else if((this.usuario.password as '').length === 0){
      alert('password vacio');
    }
    else if((this.usuario.repassword as '').length === 0){
      alert('repetir password vacio');
    }
    else if((this.usuario.password as '') !== (this.usuario.repassword as '')){
      alert('las password no coinciden');
    }
    else{
      let response:any = await this.authService.registrar(this.usuario);
      if(response.status === 'success'){
        alert('administrador registrado');
        this.limpiar();
      }
      else{
        alert('error al registrar administrador, compruebe el formato del email');
      }
    }
  }

  limpiar(){
    this.usuario = {
      email: '',
      password: '',
      repassword: '',
      perfil: 'administrador',
      name: ''
    };
  }

}
