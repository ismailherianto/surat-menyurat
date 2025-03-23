<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SuratKeluar extends Model
{
    use HasFactory;

    protected $table = 'surat_keluar';

    public function to_approved_by()
    {
        return $this->belongsTo(user::class, 'approved_by');
    }

    public function to_created_by()
    {
        return $this->belongsTo(user::class, 'created_by');
    }


}
