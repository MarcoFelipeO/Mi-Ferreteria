import { Component, OnInit, ViewChild, ElementRef, Inject  } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { IProductos } from 'src/app/core/interfaces/IProductos';
import { ProductosService } from 'src/app/core/http/productos/productos.service';
import { CategoriaService } from 'src/app/core/http/categoria/categoria.service';
import { ICategoria } from 'src/app/core/interfaces/ICategoria';
@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {
  @ViewChild('inputEl') inputEl: ElementRef = {} as ElementRef;

  listaCategoria: ICategoria[] = [];

  producto: IProductos = {
    id: 0,
    detalle: '',
    imagen: '',
    precio: 0,
    stock: 0,
    titulo: '',
    id_categoria: 1
  };

  constructor(private productosService: ProductosService,
    private categoriaService: CategoriaService,
    public dialogRef: MatDialogRef<CrearProductoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    if(this.data.id !== 0){
      this.getProducto(this.data.id);
    }
    this.getCategoria();
  }

  async grabar() {
    let inputEl: HTMLInputElement = this.inputEl.nativeElement;

    if(inputEl.files?.item(0) !== null && this.producto.id !== 0){
      this.producto.imagen = await this.getBase64(inputEl.files?.item(0));
      let response: any = await this.productosService.actualizar(this.producto);
      console.log(response);
    }
    else if(this.producto.id !== 0){
      let response: any = await this.productosService.actualizar(this.producto);
      console.log(response);
    }
    else if(this.producto.id === 0){
      this.producto.imagen = await this.getBase64(inputEl.files?.item(0));
      let response: any = await this.productosService.grabar(this.producto);
      console.log(response);
    }
    this.cancelar();
  }

  getBase64(file: any) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  async getProducto(id: number){
    let response: any = await this.productosService.obtenerProducto(id);
    this.producto = response.data;
    console.log(this.producto);
  }
  async getCategoria(){
    let response: any = await this.categoriaService.listar();
    this.listaCategoria = response.data;
    console.log(this.listaCategoria);
  }
  cancelar() {
    this.dialogRef.close();
  }

}
