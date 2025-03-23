import React from "react";
import Site from "../../resources/js/layouts/Site";
import { Card } from "antd";
import {
    MailOutlined,
    FileTextOutlined,
    FolderOutlined,
    UsergroupAddOutlined,
} from "@ant-design/icons";
import ListData from "./Components/listData";
const cards = [
    {
        title: "Total Surat Masuk",
        count: 120,
        color: "blue",
        icon: <MailOutlined className="text-blue-500 text-3xl" />,
    },
    {
        title: "Total Surat Keluar",
        count: 85,
        color: "green",
        icon: <FileTextOutlined className="text-green-500 text-3xl" />,
    },
    {
        title: "Total Arsip",
        count: 250,
        color: "yellow",
        icon: <FolderOutlined className="text-yellow-500 text-3xl" />,
    },
    {
        title: "Pengguna Aktif",
        count: 34,
        color: "red",
        icon: <UsergroupAddOutlined className="text-red-500 text-3xl" />,
    },
];

const indexPage = () => {
    return (
        <Site
            title="Dashboard"
            breadcrumbs={[
                { title: "Home", href: "/" },
                { title: "Dashboard", href: "/" },
            ]}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {cards.map((card, index) => (
                    <Card
                        key={index}
                        className={`shadow-md border-l-4 border-${card.color}-500 bg-${card.color}-50 transition-all hover:shadow-lg hover:scale-105`}
                        title={
                            <div className="flex justify-between items-center">
                                <span>{card.title}</span>
                                {card.icon}
                            </div>
                        }
                        variant="borderless"
                    >
                        <p
                            className={`text-3xl font-bold text-${card.color}-600`}
                        >
                            {card.count}
                        </p>
                    </Card>
                ))}
            </div>
            <Card title="Surat Masuk" className="mt-6" variant="borderless">
                {/* Table Component */}
                <ListData type="surat-masuk" />
            </Card>
            <Card title="Surat Keluar" className="mt-6" variant="borderless">
                {/* Table Component */}
                <ListData type="surat-keluar" />
            </Card>

        </Site>
    );
};

export default indexPage;
