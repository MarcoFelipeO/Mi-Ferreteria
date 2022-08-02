import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/core/http/categoria/categoria.service';
import { ICategoria } from 'src/app/core/interfaces/ICategoria';
import { IProductos } from 'src/app/core/interfaces/IProductos';

import { ProductosService } from '../../core/http/productos/productos.service';

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.css']
})
export class ListadoProductosComponent implements OnInit {
  listaProducto: IProductos[] = [];
  listaProductoF: IProductos[] = [];
  listaCategoria: ICategoria[] = [];
  categoriaFiltro: number = 0;

  constructor(private productosService: ProductosService,
    private categoriaService: CategoriaService) { }

  ngOnInit(): void {
    console.log('inicia');
    this.listarProductos();
    this.getCategoria();
  }

  async listarProductos(){
    let response: any = await this.productosService.listar();
    this.listaProducto = response.data;
    this.listaProductoF = response.data;
  }
  async getCategoria(){
    let response: any = await this.categoriaService.listar();
    this.listaCategoria = response.data;
    console.log(this.listaCategoria);
  }
  filtrarCategoria(){
    if(this.categoriaFiltro != 0){
      this.listaProductoF = this.listaProducto.filter((item: any) => {
        return item.id_categoria == this.categoriaFiltro;
      });
    }
    else{
      this.listaProductoF = this.listaProducto;
    }
  }

}
