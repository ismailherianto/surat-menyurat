import React, { useEffect, useState } from 'react';
import TableComponent from '../../../resources/js/components/display/TableComponent';
import { SuratMasuk } from '../../../resources/js/models/SuratMasuk';
import axios from 'axios';
import { message } from 'antd';

interface ListDataProps {
    type: "surat-masuk" | "surat-keluar";
    suratMasuk?: SuratMasuk[];
    suratKeluar?: SuratMasuk[];
}

const columnsConfig = {
    "surat-masuk": [
        { title: "Nomor Surat", dataIndex: "nomor_surat" },
        { title: "Pengirim", dataIndex: "pengirim" },
        { title: "Tanggal Masuk", dataIndex: "tanggal_masuk" },
        { title: "Perihal", dataIndex: "perihal" },
        { title: "Lampiran", dataIndex: "lampiran" },
        { title: "Status", dataIndex: "status" },
    ],
    "surat-keluar": [
        { title: "Nomor Surat", dataIndex: "nomor_surat" },
        { title: "Penerima", dataIndex: "penerima" },
        { title: "Tanggal Keluar", dataIndex: "tanggal_keluar" },
        { title: "Perihal", dataIndex: "perihal" },
        { title: "Lampiran", dataIndex: "lampiran" },
        { title: "Status", dataIndex: "status" },
    ]
};

const ListData: React.FC<ListDataProps> = ({ type, suratMasuk, suratKeluar }) => {
    const [loading, setLoading] = useState<boolean>(true);
    const [data, setData] = useState<SuratMasuk[]>([]);

    useEffect(() => {
        if (type === "surat-masuk" && suratMasuk) {
            setData(suratMasuk);
            setLoading(false);
            return;
        }
        if (type === "surat-keluar" && suratKeluar) {
            setData(suratKeluar);
            setLoading(false);
            return;
        }

        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`dashboard/${type}`);
                setData(response.data.data);
            } catch (error) {
                console.error("Error fetching data:", error);
                message.error("Gagal mengambil data");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [type, suratMasuk, suratKeluar]);

    return (
        <TableComponent
            rowKey={(record: SuratMasuk) => record.id}
            columns={columnsConfig[type]} 
            dataSource={data}
            loading={loading}
            bordered 
        />
    );
};

export default ListData;
