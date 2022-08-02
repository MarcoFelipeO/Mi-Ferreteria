export interface IProductos {
    id: number;
    titulo: string;
    detalle: string;
    precio: number;
    stock: number;
    imagen: any;
    cantidad? : 0;
    id_categoria: number;
}
