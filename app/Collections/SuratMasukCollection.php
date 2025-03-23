<?php 

namespace App\Collections;

use App\Models\SuratMasuk;

class SuratMasukCollection
{
    public static function pagination($pageSize, $filter = [])
    {
        $filter = array_merge(['search' => null], $filter);

        return SuratMasuk::with(['to_disposisi', 'to_created_by'])
            ->when($filter['search'], function ($query, $search) {
                $query->where('nomor_surat', 'like', "%$search%");
            })
            ->orderByDesc('created_at')
            ->paginate((int) $pageSize);
    }

    public static function findOrFail($id)
    {
        return SuratMasuk::with(['to_disposisi', 'to_created_by'])->findOrFail($id);
    }
}
