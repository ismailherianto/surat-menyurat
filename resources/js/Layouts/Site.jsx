import { Layout, Menu, Avatar, Dropdown } from "antd";
import { useState } from "react";
import AdminMenu from "./menu/AdminMenu";

const { Header, Sider, Content } = Layout;

const Site = ({ content }) => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleSidebar = () => setCollapsed(!collapsed);

    const buildMenu = AdminMenu();

    return (
        <Layout className="min-h-screen">
            {/* Sidebar */}
            <Sider collapsible className="h-screen">
                <div className="text-white text-center py-4 text-lg font-bold">
                    📜 E-Surat
                </div>
                <Menu theme="dark" mode="inline" items={buildMenu} />
            </Sider>

            {/* Main Content */}
            <Layout>
                {/* Navbar */}
                <Header className="bg-white shadow-md flex justify-between items-center px-4">
                    <div></div>{" "}
                    {/* Empty div to push the avatar to the right */}
                    <Avatar className="cursor-pointer bg-blue-500">U</Avatar>
                </Header>
                {/* Page Content */}
                <Content className="p-6 bg-gray-100">{content}</Content>
            </Layout>
        </Layout>
    );
};

export default Site;
