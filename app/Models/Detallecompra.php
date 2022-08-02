<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Detallecompra extends Model
{
    use HasFactory;
    protected $table = "detallecompra";

    public function producto(){
        return $this->hasOne(Producto::class, 'id', 'id_producto');
    }
}
