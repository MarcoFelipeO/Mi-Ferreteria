import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosService } from 'src/app/core/http/productos/productos.service';
import { IProductos } from 'src/app/core/interfaces/IProductos';

import { ICabeceraCompra } from 'src/app/core/interfaces/ICabeceraCompra';
import { IDetalleCompra } from 'src/app/core/interfaces/IDetalleCompra';
import { CompraService } from 'src/app/core/http/compra/compra.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  listaProductos: IProductos[] = [];

  constructor( private productoService: ProductosService, 
    private compraService: CompraService,
    private router: Router) { }

  ngOnInit(): void {
    this.getCarritoStorage();
  }

  getCarritoStorage(){
    this.listaProductos = [];
    let productosCarrito: any = localStorage.getItem('carrito');
    productosCarrito = JSON.parse(productosCarrito);
    productosCarrito.forEach((element: any) => {
      this.getProducto(element.id, element.cantidad);
    });
  }

  async getProducto(id: number, cantidad: number){
    let response: any = await this.productoService.obtenerProducto(id);
    let producto: IProductos = response.data;
    producto.cantidad = cantidad as 0 ;
    this.listaProductos.push(producto);
  }

  eliminar(id: number){
    let productosCarrito: any = localStorage.getItem('carrito');
    productosCarrito = JSON.parse(productosCarrito);
    productosCarrito = productosCarrito.filter((e: any) => {
      return e.id !== id;
    });
    localStorage.setItem('carrito', JSON.stringify(productosCarrito));
    this.getCarritoStorage();
  }

  validar(producto: IProductos){
    if(producto.cantidad as 0 <= 0 || producto.cantidad as 0 > 5 ){
      producto.cantidad = 1 as 0;
    }
    let productosCarrito: any = localStorage.getItem('carrito');
    productosCarrito = JSON.parse(productosCarrito);
    let index = productosCarrito.indexOf(productosCarrito.find((e: any) => {
      return e.id === producto.id;
    }));
    productosCarrito[index] = { id: producto.id, cantidad: producto.cantidad };
    localStorage.setItem('carrito', JSON.stringify(productosCarrito));
  }

  obtenerTotalProducto(producto: IProductos){
    return producto.precio * (producto.cantidad || 1);
  }

  obtenerTotal(){
    let total = 0;
    this.listaProductos.forEach((e: any) => {
      total += e.precio * (e.cantidad || 1);
    });
    return total;
  }

  async comprar(){
    let login = localStorage.getItem('isLogged');
    if(login === 'true'){
      console.log(this.listaProductos);
      let detalles:any = [];

      this.listaProductos.forEach(item => {
        let detalle:IDetalleCompra = {
          cantidad: item.cantidad as 0,
          id_producto: item.id,
          preciofecha: item.precio
        }
        detalles.push(detalle);
      });

      let compra: ICabeceraCompra = {
        id_usuario: parseInt(localStorage.getItem('id') as '0'),
        total: this.obtenerTotal(),
        detallecompra: detalles
      };

      let response: any = await this.compraService.grabar(compra);
      if(response.status){
        alert('compra registrada exitosamente');
        localStorage.setItem('carrito', '[]');
        this.router.navigateByUrl('mis-compras');
      }
    }
    else{
      this.router.navigateByUrl('login');
    }
  }

  seguir(){
    this.router.navigateByUrl('');
  }

}
