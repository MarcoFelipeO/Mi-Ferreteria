import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/http/auth/auth.service';
import { IToken } from 'src/app/core/interfaces/IToken';
import { IUser } from 'src/app/core/interfaces/IUser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: IUser = {
    email: '',
    password: ''
  }

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  async login(){
    let response: any = await this.authService.login(this.usuario);
    if(response.status === 'success'){
      let token: IToken = response.authorisation;
      let login: IUser = response.user;

      localStorage.setItem('isLogged', 'true');
      localStorage.setItem('perfil', login.perfil as '');
      localStorage.setItem('name', login.name as '');
      localStorage.setItem('email', login.email);
      localStorage.setItem('id', (login.id as 0).toString());
      localStorage.setItem('token', token.token);

      if(login.perfil === 'administrador'){
        this.router.navigateByUrl('productos-mantenedor');
      }
      else{
        this.router.navigateByUrl('carrito');
      }

    }
    else{
      alert('credenciales invalidas');
    }
  }

  registro(){
    this.router.navigateByUrl('registro');
  }

}
