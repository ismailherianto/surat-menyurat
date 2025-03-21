import { ItemType, MenuItemType } from "antd/es/menu/interface";
import { HookAPI } from "antd/es/modal/useModal";
import React from "react";
import { Inertia } from "@inertiajs/inertia";

import {
    DashboardOutlined,
    InboxOutlined,
    SendOutlined,
    FileDoneOutlined,
    SolutionOutlined,
    FileTextOutlined,
    SettingOutlined,
    UserOutlined,
    LogoutOutlined,
} from "@ant-design/icons";

const AdminMenu = (modal: HookAPI): ItemType<MenuItemType>[] | undefined => [
    {
        key: "FGOoX",
        label: "Dashboard",
        icon: <DashboardOutlined />,
        onClick: () => Inertia.get("/"),
    },
    {
        key: "eaMAD",
        label: "Surat Masuk",
        icon: <InboxOutlined />,
        onClick: () => Inertia.get("/surat-masuk"),
    },
    {
        key: "wfjWj",
        label: "Surat Keluar",
        icon: <SendOutlined />,
        children: [
            {
                key: "nJDXl",
                label: "Surat Tugas",
                onClick: () => Inertia.get("surat-keluar/surat-tugas"),
            },
            {
                key: "xRQAK",
                label: "Surat Rekomendasi",
                onClick: () => Inertia.get("surat-keluar/surat-rekomendasi"),
            },
            {
                key: "PbyaB",
                label: "SK Dosen Tetap",
                onClick: () => Inertia.get("surat-keluar/sk-dosen-tetap"),
            },
            {
                key: "lyarr",
                label: "Undangan Rapat",
                onClick: () => Inertia.get("surat-keluar/undangan-rapat"),
            },
        ],
    },
    {
        key: "lTgaB",
        label: "Arsip",
        icon: <FileDoneOutlined />,
        onClick: () => Inertia.get("/arsip"),
    },
    {
        key: "GWwMz",
        label: "Disposisi",
        icon: <SolutionOutlined />,
        onClick: () => Inertia.get("/disposisi"),
    },
    {
        key: "xdodP",
        label: "Laporan",
        icon: <FileTextOutlined />,
        onClick: () => Inertia.get("/laporan"),
    },
    {
        key: "GxnwL",
        label: "Pengaturan",
        icon: <SettingOutlined />,
        onClick: () => Inertia.get("/pengaturan"),
    },
    {
        key: "hEWgg",
        label: "Pengguna",
        icon: <UserOutlined />,
        onClick: () => Inertia.get("/pengguna"),
    },
    {
        key: "LhlFL",
        label: "Logout",
        icon: <LogoutOutlined />,
        onClick: () =>
            modal.confirm({
                title: "Logout",
                content: "Apakah anda yakin ingin keluar?",
                open: true,
                width: 300,
                onOk: () => Inertia.visit("/login"),
            }),
    },
];

export default AdminMenu;
