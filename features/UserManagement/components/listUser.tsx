import React, { useEffect, useState } from "react";
import TableComponent from "../../../resources/js/components/display/TableComponent";
import { UserModel } from "../../../resources/js/models/User";
import axios from "axios";
import { Button, Divider, message, Space } from "antd";
import ButtonComponent from "../../../resources/js/components/display/ButtonComponent";

const listUser = () => {
    const [data, setData] = useState<UserModel[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`user-management/list`);
                setData(response.data.data);
            } catch (error) {
                message.error("Gagal mengambil data");
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <ButtonComponent type="primary" className="float-right mb-4">
                Tambah User
            </ButtonComponent>
            <Divider />
            <TableComponent<UserModel>
                bordered
                rowKey={(record) => record.id}
                columns={[
                    { title: "Nama", dataIndex: "name" },
                    { title: "Email", dataIndex: "email" },
                    { title: "Role", dataIndex: "role" },
                    {
                        title: "Action",
                        width: 150,
                        render: (record) => (
                            <Space>
                                <ButtonComponent type="primary">
                                    Edit
                                </ButtonComponent>
                                <ButtonComponent type="primary" danger>
                                    Delete
                                </ButtonComponent>
                            </Space>
                        ),
                    },
                ]}
                dataSource={data}
                loading={loading}
            />
        </>
    );
};

export default listUser;
