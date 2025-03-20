import React, { ReactNode } from "react";
import { Inertia } from "@inertiajs/inertia";
import { Layout, Menu, Avatar, Modal, Dropdown, Breadcrumb } from "antd";
import AdminMenu from "./menu/AdminMenu";
import useUser from "../hooks/useUser";

const { Header, Sider, Content } = Layout;

interface SiteProps {
    children: ReactNode;
    title: string;
    breadcrumbs: { title: string; href?: string }[];
    width?: "middle";
}

const Site = (p: Readonly<SiteProps>) => {
    const [modal, contextHolder] = Modal.useModal();
    const user = useUser();
    const { children, title, breadcrumbs, width } = p;

    console.log(user?.name); // Prevent error if user is undefined

    const buildMenu = AdminMenu(modal);

    const menuItems = [
        {
            key: "profile",
            label: "Profile",
            onClick: () => Inertia.get("/profile"),
        },
    ];

    return (
        <Layout className="min-h-screen">
            {/* Sidebar */}
            <Sider collapsible breakpoint="lg" collapsedWidth="80" className="h-screen">
                <div className="text-white text-center py-4 text-lg font-bold">
                    📜 E-Surat
                </div>
                <Menu theme="dark" mode="inline" items={buildMenu} />
            </Sider>

            {/* Main Content */}
            <Layout>
                {/* Navbar */}
                <Header className="bg-white shadow-md flex justify-between items-center px-4">
                    <div className="text-lg font-semibold">{title}</div>

                    <Dropdown menu={{ items: menuItems }} trigger={["click"]}>
                        <Avatar className="cursor-pointer bg-blue-500">
                            U
                        </Avatar>
                    </Dropdown>
                </Header>

                {/* Breadcrumbs */}
                <div className="px-6 pt-4">
                    <Breadcrumb>
                        {breadcrumbs.map((item, index) => (
                            <Breadcrumb.Item key={index} href={item.href}>
                                {item.title}
                            </Breadcrumb.Item>
                        ))}
                    </Breadcrumb>
                </div>

                {/* Page Content */}
                <Content className="p-6 bg-gray-100">
                    {contextHolder}
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
};

export default Site;
