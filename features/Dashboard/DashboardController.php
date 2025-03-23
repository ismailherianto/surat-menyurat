<?php

namespace Feature\Dashboard;

use App\Collections\SuratKeluarCollection;
use App\Collections\SuratMasukCollection;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function __construct(protected SuratMasukCollection $suratMasukCollection, protected SuratKeluarCollection $suratKeluarCollection) {}

    public function index()
    {
        return Inertia::render('Dashboard/indexPage');
    }

    public function getSuratMasuk(Request $request)
    {
        return response($this->suratMasukCollection->pagination($request->pageSize, [
            'tanggal_masuk' => $request->tanggal_masuk,
            'no_surat' => $request->no_surat
        ]));
    }

    public function getSuratKeluar(Request $request)
    {
        return response($this->suratKeluarCollection->pagination($request->pageSize, [
            'tanggal_masuk' => $request->tanggal_masuk,
            'no_surat' => $request->no_surat
        ]));
    }
}
