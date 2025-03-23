<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SuratMasuk extends Model
{
    use HasFactory;

    protected $table = 'surat_masuk';

    public function to_disposisi()
    {
        return $this->belongsTo(user::class, 'disposisi_ke');
    }

    public function to_created_by()
    {
        return $this->belongsTo(user::class, 'created_by');
    }
}
