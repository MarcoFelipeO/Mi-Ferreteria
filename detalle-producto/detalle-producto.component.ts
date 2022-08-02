import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from 'src/app/core/http/productos/productos.service';
import { IProductos } from 'src/app/core/interfaces/IProductos';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {
  public id: string = '0';

  agregar: number = 1;

  producto: IProductos = {
    id: 0,
    detalle: '',
    imagen: '',
    precio:  0,
    stock: 0,
    titulo: '',
    id_categoria: 1,
  };

  constructor(private route: ActivatedRoute,
    private productoService: ProductosService,
    private router: Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.id = (id)? id: '0';

    this.getProducto();
  }

  async getProducto(){
    let response: any = await this.productoService.obtenerProducto(parseInt(this.id));
    this.producto = response.data;
  }

  agregarCarro(id: number){
    let items: any = [];
    let carro = {
      id: id,
      cantidad: this.agregar
    }
    let carrito: any = localStorage.getItem('carrito');
    console.log(carrito);

    if(carrito === '' || carrito === null || carrito === '[]'){
      items.push(carro);
      localStorage.setItem('carrito', JSON.stringify(items));
      alert('se agrego un nuevo producto a su carrito de compras');
    }
    else{
      carrito = JSON.parse(carrito);
      carrito.forEach((element: any) => {
        items.push(element);
      });
      let mismoItem = items.find((e: any) => {
        return e.id === carro.id
      });
      let index = items.indexOf(items.find((e: any) => {
        return e.id === carro.id
      }));

      if(mismoItem){
        if(mismoItem.cantidad + carro.cantidad <=100){
          mismoItem.cantidad = mismoItem.cantidad + carro.cantidad;
          items[index] = mismoItem;
          localStorage.setItem('carrito', JSON.stringify(items));
          alert('carrito de compras actualizado');
        }
        else{
          alert('ya supero la cantidad permitida para este producto, máximo 5');
        }
      }
      else{
        items.push(carro);
        localStorage.setItem('carrito', JSON.stringify(items));
        alert('se agrego un nuevo producto a su carrito de compras');
      }
    }
    this.router.navigateByUrl('carrito');
  }

}
