import { User } from "./User";

export interface SuratKeluar {
    id: number;
    nomor_surat: string;
    tujuan: string;
    tanggal_keluar: string;
    perihal: string;
    lampiran: string;
    status: "DRAFT" | "DIPROSES" | "SELESAI";
    approved_by: number;
    created_by: number;
    to_approved_by?: User;
    to_created_by?: User;
    created_at: string;
    updated_at: string;
}