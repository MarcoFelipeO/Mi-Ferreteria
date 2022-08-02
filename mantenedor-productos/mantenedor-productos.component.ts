import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CategoriaService } from 'src/app/core/http/categoria/categoria.service';
import { ProductosService } from 'src/app/core/http/productos/productos.service';
import { ICategoria } from 'src/app/core/interfaces/ICategoria';
import { IProductos } from 'src/app/core/interfaces/IProductos';
import { CrearProductoComponent } from './crear-producto/crear-producto.component';

@Component({
  selector: 'app-mantenedor-productos',
  templateUrl: './mantenedor-productos.component.html',
  styleUrls: ['./mantenedor-productos.component.css']
})
export class MantenedorProductosComponent implements OnInit {
  listaProducto: IProductos[] = [];
  listaProductoF: IProductos[] = [];
  listaCategoria: ICategoria[] = [];
  categoriaFiltro: number = 0;

  constructor(private productosService: ProductosService,
    private categoriaService: CategoriaService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.listarProductos();
    this.getCategoria();
  }
  async getCategoria(){
    let response: any = await this.categoriaService.listar();
    this.listaCategoria = response.data;
    console.log(this.listaCategoria);
  }

  async listarProductos(){
    let response: any = await this.productosService.listar();
    this.listaProducto = response.data;
    this.listaProductoF = response.data;
  }

  openDialog() {
    const dialogRef = this.dialog.open(CrearProductoComponent, {
      width: '60%',
      data: { id: 0 }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.listarProductos();
    });
  }

  openDialogModificar(id: number) {
    const dialogRefModificar = this.dialog.open(CrearProductoComponent, {
      width: '60%',
      data: { id: id }
    });

    dialogRefModificar.afterClosed().subscribe(result => {
      this.listarProductos();
    });
  }
  async eliminar(id: number){
    let response = await this.productosService.eliminar(id);
    console.log(response);
    this.listarProductos();
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
