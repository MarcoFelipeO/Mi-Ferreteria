import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  validarLogin(){
    return localStorage.getItem('isLogged');
  }

  validarPerfil(){
    return localStorage.getItem('perfil');
  }

}
