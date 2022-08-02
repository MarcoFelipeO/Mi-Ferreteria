import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/http/auth/auth.service';
import { IToken } from 'src/app/core/interfaces/IToken';
import { IUser } from 'src/app/core/interfaces/IUser';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  usuario: IUser = {
    email: '',
    password: '',
    repassword: '',
    perfil: 'cliente',
    name: ''
  }

  constructor(
    private authService: AuthService,
    private router: Router
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
        let token: IToken = response.authorisation;
        let login: IUser = response.user;
        localStorage.setItem('isLogged', 'true');
        localStorage.setItem('perfil', login.perfil as '');
        localStorage.setItem('name', login.name as '');
        localStorage.setItem('email', login.email);
        localStorage.setItem('token', token.token);

        this.router.navigateByUrl('carrito');
      }
    }
  }

}
