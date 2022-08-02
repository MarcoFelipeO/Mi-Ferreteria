<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cabeceracompra;
use App\Models\Detallecompra;

class CompraController extends Controller
{
    public function index(){
        try{
            $cabeceracompra = Cabeceracompra::with(['detallecompra', 'detallecompra.producto'])
                                ->get();
            return response()->json(['status'=> true, 'data' =>  $cabeceracompra], 200);
        }
        catch(Exception $ex){
            return response()->json(['message' => 'Error al obtener los datos'], 500);
        }
    }
    public function indexUser($id){
        try{
            $cabeceracompra = Cabeceracompra::with(['detallecompra', 'detallecompra.producto'])
                                ->where('id_usuario', $id)
                                ->get();
            return response()->json(['status'=> true, 'data' =>  $cabeceracompra], 200);
        }
        catch(Exception $ex){
            return response()->json(['message' => 'Error al obtener los datos'], 500);
        }
    }
    public function store(Request $request){
        try{
            $cabeceracompra = new Cabeceracompra();
            $cabeceracompra->total = $request->total;
            $cabeceracompra->estado = 'pendiente';
            $cabeceracompra->id_usuario = $request->id_usuario;
    
            $res = $cabeceracompra->save();
    
            if ($res) {
                foreach($request->detallecompra as $detalle) {
                    $detallecompra = new Detallecompra();
                    $detallecompra->id_producto = $detalle['id_producto'];
                    $detallecompra->cantidad = $detalle['cantidad'];
                    $detallecompra->preciofecha = $detalle['preciofecha'];
                    $detallecompra->id_cabecer = $cabeceracompra->id;
                
                    $detallecompra->save();
                }
                return response()->json(['status'=> true, 'message' => 'compra registrada'], 201);
            }
            return response()->json(['message' => 'Error to create post'], 500);

        }
        catch(Exception $ex){
            return response()->json(['message' => 'Error to create post'], 500);
        }
    }
    public function update($id, Request $request){
        try{
            $cabeceracompra = Cabeceracompra::find($id);
            $cabeceracompra->estado = $request->estado;
    
            $res = $cabeceracompra->save();
    
            if ($res) {
                return response()->json(['status' => true, 'message' => 'producto updated succesfully'], 201);
            }
            return response()->json(['message' => 'Error to create update'], 500);

        }
        catch(Exception $ex){
            return response()->json(['message' => 'Error to create update'], 500);
        }
    }
}
