import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CategoriaService } from 'src/app/core/http/categoria/categoria.service';
import { ICategoria } from 'src/app/core/interfaces/ICategoria';
import { CrearCategoriaComponent } from './crear-categoria/crear-categoria.component';

@Component({
  selector: 'app-mantenedor-categoria',
  templateUrl: './mantenedor-categoria.component.html',
  styleUrls: ['./mantenedor-categoria.component.css']
})
export class MantenedorCategoriaComponent implements OnInit {
  listaCategoria: ICategoria[] = [];

  constructor(private categoriaService: CategoriaService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.listaCategorias();
  }

  async listaCategorias(){
    let response: any = await this.categoriaService.listar();
    this.listaCategoria = response.data;
  }

  openDialog() {
    const dialogRef = this.dialog.open(CrearCategoriaComponent, {
      width: '60%',
      data: { id: 0 }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.listaCategorias();
    });
  }

  openDialogModificar(id: number) {
    const dialogRefModificar = this.dialog.open(CrearCategoriaComponent, {
      width: '60%',
      data: { id: id }
    });

    dialogRefModificar.afterClosed().subscribe(result => {
      this.listaCategorias();
    });
  }
  async eliminar(id: number){
    let response = await this.categoriaService.eliminar(id);
    console.log(response);
    this.listaCategorias();
  }
}
