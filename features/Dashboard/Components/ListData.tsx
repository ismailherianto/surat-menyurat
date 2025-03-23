import React from 'react'
import TableComponent from '../../../resources/js/components/display/TableComponent';
import { SuratMasuk } from '../../../resources/js/models/SuratMasuk';
import axios from 'axios';
import { message } from 'antd';

interface ListDataProps {
    type: "surat-masuk" | "surat-keluar";
    suratMasuk?: SuratMasuk[] | undefined;
    suratKeluar?: SuratMasuk[] | undefined;
}

const ListData = (props: Readonly<ListDataProps>) => {
    const { type } = props;

    const [loading, setLoading] = React.useState<boolean>(true);
    
    const [dataMasuk, setDataMasuk] = React.useState<SuratMasuk[]>([]);
    const [dataKeluar, setDataKeluar] = React.useState<SuratMasuk[]>([]);

    const getUrl = () => {
        switch (type) {
            case "surat-masuk":
                return "dashboard/surat-masuk";
            case "surat-keluar":
                return "dashboard/surat-keluar";
            default:
                return "/";
        }
    }

    const getColumns = () => {
        switch (type) {
            case "surat-masuk":
                return [
                    {
                        title: "Nomor Surat",
                        dataIndex: "nomor_surat",
                    },
                    {
                        title: "Pengirim",
                        dataIndex: "pengirim",
                    },
                    {
                        title: "Tanggal Masuk",
                        dataIndex: "tanggal_masuk",
                    },
                    {
                        title: "Perihal",
                        dataIndex: "perihal",
                    },
                    {
                        title: "Lampiran",
                        dataIndex: "lampiran",
                    },
                    {
                        title: "Status",
                        dataIndex: "status",
                    },
                ];
            case "surat-keluar":
                return [
                    {
                        title: "Nomor Surat",
                        dataIndex: "nomor_surat",
                    },
                    {
                        title: "Penerima",
                        dataIndex: "penerima",
                    },
                    {
                        title: "Tanggal Keluar",
                        dataIndex: "tanggal_keluar",
                    },
                    {
                        title: "Perihal",
                        dataIndex: "perihal",
                    },
                    {
                        title: "Lampiran",
                        dataIndex: "lampiran",
                    },
                    {
                        title: "Status",
                        dataIndex: "status",
                    },
                ];
            default:
                return [];
        }
    }

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(getUrl());
                const data = response.data.data;
                switch (type) {
                    case "surat-masuk":
                        setDataMasuk(data);
                        break;
                    case "surat-keluar":
                        setDataKeluar(data);
                        break;
                    default:
                        break;
                }
            } catch (error) {
                message.error("Gagal mengambil data");
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [type]);

  return (
    <TableComponent
        rowKey={(record: SuratMasuk) => record.id}
        columns={[...getColumns()]} 
        dataSource={type === "surat-masuk" ? dataMasuk : dataKeluar}
        loading={loading}
        bordered 
    />
  )
}

export default ListData;