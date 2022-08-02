import { Component, OnInit } from '@angular/core';
import { CompraService } from 'src/app/core/http/compra/compra.service';
import { ICabeceraCompra } from 'src/app/core/interfaces/ICabeceraCompra';
import { IProductos } from 'src/app/core/interfaces/IProductos';

@Component({
  selector: 'app-mis-compras',
  templateUrl: './mis-compras.component.html',
  styleUrls: ['./mis-compras.component.css']
})
export class MisComprasComponent implements OnInit {
  listaCompras: ICabeceraCompra[] = []

  constructor( private compraService: CompraService ) { }

  ngOnInit(): void {
    this.obtenerCompras();
  }

  async obtenerCompras(){
    let response: any = await this.compraService.obtenerCompras(parseInt(localStorage.getItem('id') as '0'));
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
}
