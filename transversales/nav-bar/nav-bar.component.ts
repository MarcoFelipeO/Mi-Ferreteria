import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  cerrar(){
    localStorage.removeItem('isLogged');
    localStorage.removeItem('perfil');
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    localStorage.removeItem('token');

    this.router.navigateByUrl('');
  }
  
  validarLogin(){
    return localStorage.getItem('isLogged');
  }
  obtenerNombre(){
    return localStorage.getItem('name');
  }
}
