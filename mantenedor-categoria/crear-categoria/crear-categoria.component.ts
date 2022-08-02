import { Component, OnInit, Inject  } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoriaService } from 'src/app/core/http/categoria/categoria.service';
import { ICategoria } from 'src/app/core/interfaces/ICategoria';

@Component({
  selector: 'app-crear-categoria',
  templateUrl: './crear-categoria.component.html',
  styleUrls: ['./crear-categoria.component.css']
})
export class CrearCategoriaComponent implements OnInit {

  categoria: ICategoria = {
    id: 0,
    detalle: '',
  };

  constructor(private categoriaService: CategoriaService,
    public dialogRef: MatDialogRef<CrearCategoriaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    if(this.data.id !== 0){
      this.getCategoria(this.data.id);
    }
  }

  async grabar() {

    if(this.categoria.id !== 0){
      let response: any = await this.categoriaService.actualizar(this.categoria);
      console.log(response);
    }
    else if(this.categoria.id === 0){
      let response: any = await this.categoriaService.grabar(this.categoria);
      console.log(response);
    }
    this.cancelar();
  }

  async getCategoria(id: number){
    let response: any = await this.categoriaService.obtenerCategoria(id);
    this.categoria = response.data;
    console.log(this.categoria);
  }

  cancelar() {
    this.dialogRef.close();
  }

}

