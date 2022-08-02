<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cabeceracompra extends Model
{
    use HasFactory;
    protected $table = "cabeceraCompra";


    public function detallecompra(){
        return $this->hasMany(Detallecompra::class, 'id_cabecer');
    }

}
