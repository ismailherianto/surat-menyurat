import { User } from "./User";

export interface SuratMasuk {
    id: number;
    nomor_surat: string;
    pengirim: string;
    tanggal_masuk: string;
    perihal: string;
    lampiran: string;
    status: "BARU" | "DIPROSES" | "SELESAI";
    file_disposisi: string;
    created_at: string;
    updated_at: string;
    to_created_by?: User;
    to_disposisi?: User;
    disposisi_ke: number;
    created_by: number;
}
    