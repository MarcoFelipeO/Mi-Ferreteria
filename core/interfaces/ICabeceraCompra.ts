import { IDetalleCompra } from "./IDetalleCompra";

export interface ICabeceraCompra {
    id?: number,
    total: number,
    id_usuario: number,
    created_at?: Date,
    estado?: string,
    detallecompra: IDetalleCompra[]
}