import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoProductosComponent } from './paginas/listado-productos/listado-productos.component';
import { DetalleProductoComponent } from './paginas/detalle-producto/detalle-producto.component';
import { MantenedorProductosComponent } from './paginas/mantenedor-productos/mantenedor-productos.component';
import { CarritoComponent } from './paginas/carrito/carrito.component';
import { LoginComponent } from './paginas/login/login.component';
import { RegistroComponent } from './paginas/registro/registro.component';
import { VerifyLoginGuard } from './guard/verify-login.guard';
import { VerifyPerfilGuard } from './guard/verify-perfil.guard';
import { RegistrarAdminComponent } from './paginas/registrar-admin/registrar-admin.component';
import { MantenedorCategoriaComponent } from './paginas/mantenedor-categoria/mantenedor-categoria.component';
import { MisComprasComponent } from './paginas/mis-compras/mis-compras.component';
import { VerifyClientGuard } from './guard/verify-client.guard';
import { AdminComprasComponent } from './paginas/admin-compras/admin-compras.component';
import { QuienessomosComponent } from './quienessomos/quienessomos.component';
import { ComprasComponent } from './paginas/compras/compras.component';







const routes: Routes = [
  { path: '', component: ListadoProductosComponent },
  { path: 'productos', component: ListadoProductosComponent },
  { path: 'detalle-producto/:id', component: DetalleProductoComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'quienessomos', component: QuienessomosComponent},
  { path: 'compras' , component: ComprasComponent},

 
  

  { path: 'mis-compras', component: MisComprasComponent, canActivate: [ VerifyLoginGuard, VerifyClientGuard ] },


  { path: 'productos-mantenedor', component: MantenedorProductosComponent, canActivate: [ VerifyLoginGuard, VerifyPerfilGuard ]},
  { path: 'categorias-mantenedor', component: MantenedorCategoriaComponent, canActivate: [ VerifyLoginGuard, VerifyPerfilGuard ]},
  { path: 'admin-mantenedor', component: RegistrarAdminComponent, canActivate: [ VerifyLoginGuard, VerifyPerfilGuard ]},
  { path: 'admin-compras', component: AdminComprasComponent, canActivate: [ VerifyLoginGuard, VerifyPerfilGuard ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
 
})
export class AppRoutingModule { }
