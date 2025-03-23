<?php

namespace App\Collections;

use App\Models\SuratKeluar;

class SuratKeluarCollection
{
    public static function pagination($pageSize, $filter = [])
    {
        $filter = array_merge(['search' => null], $filter);

        return SuratKeluar::with(['to_approved_by', 'to_created_by'])
            ->when($filter['search'], function ($query, $search) {
                $query->where('nomor_surat', 'like', "%$search%");
            })
            ->orderByDesc('created_at')
            ->paginate((int) $pageSize);
    }

    public static function findOrFail($id)
    {
        return SuratKeluar::with(['to_approved_by', 'to_created_by'])->findOrFail($id);
    }
}