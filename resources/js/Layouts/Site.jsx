import { Layout, Menu, Avatar, Dropdown } from "antd";
import { useState } from "react";
import {
    FileTextOutlined,
    LogoutOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    DashboardOutlined,
    InboxOutlined,
    SendOutlined,
    ShareAltOutlined,
    BarChartOutlined,
    SettingOutlined,
} from "@ant-design/icons";
import { Link } from "@inertiajs/react";

const { Header, Sider, Content } = Layout;

const Site = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleSidebar = () => setCollapsed(!collapsed);

    const menu = (
        <Menu>
            <Menu.Item key="logout" icon={<LogoutOutlined />}>
                Logout
            </Menu.Item>
        </Menu>
    );

    return (
        <Layout className="min-h-screen">
            {/* Sidebar */}
            <Sider collapsible className="h-screen">
                <div className="text-white text-center py-4 text-lg font-bold">
                    📜 E-Surat
                </div>
                <Menu theme="dark" mode="inline">
                    <Menu.Item key="1" icon={<DashboardOutlined />}>
                        <Link href="/dashboard">Dashboard</Link>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<InboxOutlined />}>
                        <Link href="/surat-masuk">Surat Masuk</Link>
                    </Menu.Item>
                    <Menu.Item key="3" icon={<SendOutlined />}>
                        <Link href="/surat-keluar">Surat Keluar</Link>
                    </Menu.Item>
                    <Menu.Item key="4" icon={<FileTextOutlined />}>
                        <Link href="/arsip">Arsip Surat</Link>
                    </Menu.Item>
                    <Menu.Item key="5" icon={<ShareAltOutlined />}>
                        <Link href="/disposisi">Disposisi</Link>
                    </Menu.Item>
                    <Menu.Item key="6" icon={<BarChartOutlined />}>
                        <Link href="/laporan">Laporan</Link>
                    </Menu.Item>
                    <Menu.Item key="7" icon={<SettingOutlined />}>
                        <Link href="/pengaturan">Pengaturan</Link>
                    </Menu.Item>
                    <Menu.Item key="8" icon={<LogoutOutlined />} danger>
                        <Link href="/logout">Keluar</Link>
                    </Menu.Item>
                </Menu>
            </Sider>

            {/* Main Content */}
            <Layout>
                {/* Navbar */}
                <Header className="bg-white shadow-md flex justify-between items-center px-4">
                    <div
                        className="text-xl cursor-pointer"
                        onClick={toggleSidebar}
                    >
                        {collapsed ? (
                            <MenuUnfoldOutlined />
                        ) : (
                            <MenuFoldOutlined />
                        )}
                    </div>
                    <Dropdown overlay={menu} placement="bottomRight">
                        <Avatar className="cursor-pointer bg-blue-500">
                            U
                        </Avatar>
                    </Dropdown>
                </Header>

                {/* Page Content */}
                <Content className="p-6 bg-gray-100">{children}</Content>
            </Layout>
        </Layout>
    );
};

export default Site;
