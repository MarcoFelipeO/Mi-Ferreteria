import { Component, OnInit } from '@angular/core';
import { CompraService } from 'src/app/core/http/compra/compra.service';
import { ProductosService } from 'src/app/core/http/productos/productos.service';
import { ICabeceraCompra } from 'src/app/core/interfaces/ICabeceraCompra';

@Component({
  selector: 'app-admin-compras',
  templateUrl: './admin-compras.component.html',
  styleUrls: ['./admin-compras.component.css']
})
export class AdminComprasComponent implements OnInit {
  listaCompras: ICabeceraCompra[] = []

  constructor( private compraService: CompraService,
    private productoService: ProductosService ) { }

  ngOnInit(): void {
    this.obtenerCompras();
  }

  async obtenerCompras(){
    let response: any = await this.compraService.index();
    if(response.status){
      this.listaCompras = response.data;
      console.log(this.listaCompras);
    }
    else{
      alert('error en el servicio');
    }
  }
  obtenerId(data: any){
    return data.id;
  }
  obtenerImagen(data: any){
    return data.imagen;
  }
  obtenerTitulo(data: any){
    return data.titulo;
  }
  async procesar(data: any, id: any){
    let procesar = true;
    let stocksRestar: any = { productos: []};

    data.forEach((item: any) => {
      console.log(item);
      if(item.producto.stock >= item.cantidad){
        stocksRestar.productos.push({ id: item.producto.id, cantidad: item.cantidad });
      }
      else{
        procesar = false;
      }
    });

    if(procesar){
      let response: any = await this.productoService.actualizarStock(stocksRestar);
      console.log(response);
      if(response.status){
        let response: any = await this.compraService.actualizar({ id: id, estado: 'procesada' });
        if(response){
          alert('compra procesada correctamente');
        }
        else{
          alert('ha ocurrido un error al procesar la compra');
        }
      }
      else{
        alert('ha ocurrido un error al procesar la compra');
      }
    }
    else{
      let response: any = await this.compraService.actualizar({ id: id, estado: 'rechazada' });
      if(response){
        alert('Existe un producto sin stock, se cancelara la compra');
      }
      else{
        alert('ha ocurrido un error al procesar la compra');
      }
    }
    this.obtenerCompras();
  }
}
