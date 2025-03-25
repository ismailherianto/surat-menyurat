import React, { ReactNode } from "react";
import { Inertia } from "@inertiajs/inertia";
import { Layout, Menu, Avatar, Modal, Dropdown, Breadcrumb } from "antd";
import AdminMenu from "./menu/AdminMenu";
import useUser from "../hooks/useUser";
import { HomeOutlined } from "@ant-design/icons";

const { Header, Sider, Content } = Layout;

interface SiteProps {
    children?: ReactNode;
    title: string;
    breadcrumbs: { title: string; href?: string }[];
    width?: "middle";
}

const Site = (p: Readonly<SiteProps>) => {
    const [modal, contextHolder] = Modal.useModal();
    const user = useUser();
    const { children, title, breadcrumbs, width } = p;

    interface User {
        name?: string;
    }

    const userInitials: string = user?.name
        ? user.name
              .split(" ")
              .map((word: string) => word[0])
              .join("")
              .substring(0, 2)
        : "U";

    const buildMenu = AdminMenu(modal);

    return (
        <Layout className="min-h-screen">
            {/* Sidebar */}
            {/* <Sider
                collapsible
                breakpoint="lg"
                collapsedWidth="80"
                className="h-screen"
            >
                <div className="text-white text-center py-4 text-lg font-bold">
                    📜 E-Surat
                </div>
                <Menu theme="dark" mode="inline" items={buildMenu} />
            </Sider> */}

            <Sider collapsible className="min-screen bg-gray-900 text-white">
                <div className="text-center text-xl font-bold text-white py-4">
                    📜 <span className="text-blue-400">E-Surat</span>
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    className="bg-gray-900"
                    items={buildMenu}
                />
            </Sider>

            {/* Main Content */}
            <Layout>
                {/* Navbar */}
                <Header className="bg-white shadow-md flex justify-between items-center px-4">
                    <div className="text-lg font-semibold">{title}</div>

                    <Avatar className="cursor-pointer bg-blue-500" onClick={() => Inertia.visit("/profile")}>
                        {userInitials}
                    </Avatar>
                </Header>

                {/* Breadcrumbs */}
                <div className="px-6 py-3 mb-4 bg-white flex items-center space-x-3">
                    <Breadcrumb
                        separator={<span className="text-gray-400">/</span>}
                    >
                        {breadcrumbs.map((item, index) => (
                            <Breadcrumb.Item
                                key={index}
                                href={item.href}
                                className="text-gray-600 hover:text-blue-500 transition-colors duration-200 font-medium"
                            >
                                {index === breadcrumbs.length - 1 ? (
                                    <span className="text-gray-900 font-semibold">
                                        {item.title}
                                    </span>
                                ) : (
                                    <HomeOutlined className="text-gray-600" />
                                )}
                            </Breadcrumb.Item>
                        ))}
                    </Breadcrumb>
                </div>

                {/* Page Content */}
                <Content className="p-8 bg-white shadow-md rounded-lg mx-6 my-4">
                    {contextHolder}
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
};

export default Site;
