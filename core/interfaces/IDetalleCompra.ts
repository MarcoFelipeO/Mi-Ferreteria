import { IProductos } from "./IProductos";

export interface IDetalleCompra {
    id?: number,
    id_producto: number,
    cantidad: number,
    preciofecha: number,
    producto?: IProductos
}