<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Categoria;

class CategoriaController extends Controller
{
    public function index(){
        try{
            $categoria = Categoria::get();
            return response()->json(['data' =>  $categoria], 200);
        }
        catch(Exception $ex){
            return response()->json(['message' => 'Error al obtener los datos'], 500);
        }
    }
    public function show($id){
        try{
            $categoria = Categoria::findOrFail($id);
    
            if ($categoria) {
                return response()->json(['data' => $categoria], 200);
            }
            return response()->json(['message' => 'Error not found'], 500);

        }
        catch(Exception $ex){
            return response()->json(['message' => 'Error not found'], 500);
        }
    }
    public function store(Request $request){
        try{
            $categoria = new Categoria();
            $categoria->detalle = $request->detalle;
    
            $res = $categoria->save();
    
            if ($res) {
                return response()->json(['message' => 'categoria create succesfully'], 201);
            }
            return response()->json(['message' => 'Error to create post'], 500);

        }
        catch(Exception $ex){
            return response()->json(['message' => 'Error to create post'], 500);
        }
    }
    public function update($id, Request $request){
        try{
            $categoria = Categoria::find($id);
            $categoria->detalle = $request->detalle;
    
            $res = $categoria->save();
    
            if ($res) {
                return response()->json(['message' => 'categoria updated succesfully'], 201);
            }
            return response()->json(['message' => 'Error to create update'], 500);

        }
        catch(Exception $ex){
            return response()->json(['message' => 'Error to create update'], 500);
        }
    }
    public function delete($id){
        try{
            $categoria = Categoria::findOrFail($id);
    
            if ($categoria) {
                $categoria->delete(); 
                return response()->json(['message' => 'categoria eliminado'], 200);
            }
            return response()->json(['message' => 'Error to delete'], 500);

        }
        catch(Exception $ex){
            return response()->json(['message' => 'Error to delete'], 500);
        }
    }
}
