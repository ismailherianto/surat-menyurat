import React from "react";
import { Form, Button, Card, Typography, message } from "antd";
import { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import axios from "axios"; // Ensure Axios is imported
import InputText from "../../resources/js/components/form/InputText";
import InputPassword from "../../resources/js/components/form/InputPassword";

const { Title, Text } = Typography;

const LoginPage: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const onFinish = (values: { email: string; password: string }) => {
    setLoading(true);
    axios
      .post(`/login`, values)
      .then(() => {
        message.success("Login Berhasil").then(() => {
          Inertia.visit("/dashboard");
        });
      })
      .catch((err) => message.error(err.response?.data?.message).then(() => setLoading(false)));
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-200 px-4">
      <div className="flex w-full max-w-4xl bg-white shadow-lg rounded-xl overflow-hidden">
        
        {/* Left Side - Image */}
        <div className="hidden md:flex md:w-1/2">
          <img 
            src="/assets/login/bg.jpg" 
            alt="Login Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 p-8">
          <Card className="border-none shadow-none">
            <div className="text-center mb-6">
              <Title level={3} className="text-gray-800">Sign In</Title>
              <Text type="secondary">Access your account</Text>
            </div>

            <Form 
              layout="vertical" 
              onFinish={onFinish} 
              initialValues={{ email: "", password: "" }}
            >
              <InputText 
                label="Email" 
                name="email"
                rules={[ // Fixed: "rule" should be "rules"
                  { type: "email", message: "Email tidak valid", required: true }
                ]}
                size="large"
              />
              
              <InputPassword 
                label="Password"
                name={["password"]}
                rules={[{ required: true, message: "Password harus diisi" }]}
                size="large"
                placeholder="Password"
              />

              <Form.Item>
                <Button type="primary" htmlType="submit" loading={loading} size="large" block>
                  Login
                </Button>
              </Form.Item>
            </Form>

            {/* Uncomment if needed */}
            {/* <div className="text-center text-gray-600">
              <Text>New here?</Text>
              <Typography.Link href="/register" className="ml-1">
                Create an account
              </Typography.Link>
            </div> */}
          </Card>
        </div>

      </div>
    </div>
  );
};

export default LoginPage;
