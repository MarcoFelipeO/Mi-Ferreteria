<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Producto;

class ProductoController extends Controller
{
    public function index(){
        try{
            $producto = Producto::get();
            return response()->json(['data' =>  $producto], 200);
        }
        catch(Exception $ex){
            return response()->json(['message' => 'Error al obtener los datos'], 500);
        }
    }
    public function show($id){
        try{
            $producto = Producto::findOrFail($id);
    
            if ($producto) {
                return response()->json(['data' => $producto], 200);
            }
            return response()->json(['message' => 'Error not found'], 500);

        }
        catch(Exception $ex){
            return response()->json(['message' => 'Error not found'], 500);
        }
    }
    public function store(Request $request){
        try{
            $producto = new Producto();
            $producto->titulo = $request->titulo;
            $producto->detalle = $request->detalle;
            $producto->stock = $request->stock;
            $producto->precio = $request->precio;
            $producto->imagen = $request->imagen;
            $producto->id_categoria = $request->id_categoria;
    
            $res = $producto->save();
    
            if ($res) {
                return response()->json(['message' => 'producto create succesfully'], 201);
            }
            return response()->json(['message' => 'Error to create post'], 500);

        }
        catch(Exception $ex){
            return response()->json(['message' => 'Error to create post'], 500);
        }
    }
    public function update($id, Request $request){
        try{
            $producto = Producto::find($id);
            $producto->titulo = $request->titulo;
            $producto->detalle = $request->detalle;
            $producto->stock = $request->stock;
            $producto->precio = $request->precio;
            $producto->imagen = $request->imagen;
            $producto->id_categoria = $request->id_categoria;
    
            $res = $producto->save();
    
            if ($res) {
                return response()->json(['message' => 'producto updated succesfully'], 201);
            }
            return response()->json(['message' => 'Error to create update'], 500);

        }
        catch(Exception $ex){
            return response()->json(['message' => 'Error to create update'], 500);
        }
    }
    public function updateStock(Request $request){
        try{
            foreach($request->productos as $prod) {
                $producto = Producto::find($prod['id']);
                $producto->stock = $producto->stock - $prod['cantidad'];
                $producto->save();
            }
            return response()->json(['status' => true, 'message' => 'producto updated succesfully'], 201);

        }
        catch(Exception $ex){
            return response()->json(['message' => 'Error to create update'], 500);
        }
    }
    public function delete($id){
        try{
            $producto = Producto::findOrFail($id);
    
            if ($producto) {
                $producto->delete(); 
                return response()->json(['message' => 'producto eliminado'], 200);
            }
            return response()->json(['message' => 'Error to delete'], 500);

        }
        catch(Exception $ex){
            return response()->json(['message' => 'Error to delete'], 500);
        }
    }
}
