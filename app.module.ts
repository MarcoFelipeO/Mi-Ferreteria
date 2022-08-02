import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoProductosComponent } from './paginas/listado-productos/listado-productos.component';
import { NavBarComponent } from './transversales/nav-bar/nav-bar.component';
import { SideBarComponent } from './transversales/side-bar/side-bar.component';
import { MantenedorProductosComponent } from './paginas/mantenedor-productos/mantenedor-productos.component';
import { CrearProductoComponent } from './paginas/mantenedor-productos/crear-producto/crear-producto.component';
import { DetalleProductoComponent } from './paginas/detalle-producto/detalle-producto.component';
import { CarritoComponent } from './paginas/carrito/carrito.component';
import { LoginComponent } from './paginas/login/login.component';
import { RegistroComponent } from './paginas/registro/registro.component';
import { RegistrarAdminComponent } from './paginas/registrar-admin/registrar-admin.component';
import { MantenedorCategoriaComponent } from './paginas/mantenedor-categoria/mantenedor-categoria.component';
import { CrearCategoriaComponent } from './paginas/mantenedor-categoria/crear-categoria/crear-categoria.component';
import { MisComprasComponent } from './paginas/mis-compras/mis-compras.component';
import { AdminComprasComponent } from './paginas/admin-compras/admin-compras.component';
import { ComprasComponent } from './paginas/compras/compras.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoProductosComponent,
    NavBarComponent,
    SideBarComponent,
    MantenedorProductosComponent,
    CrearProductoComponent,
    DetalleProductoComponent,
    CarritoComponent,
    LoginComponent,
    RegistroComponent,
    RegistrarAdminComponent,
    MantenedorCategoriaComponent,
    CrearCategoriaComponent,
    MisComprasComponent,
    AdminComprasComponent,
    ComprasComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
