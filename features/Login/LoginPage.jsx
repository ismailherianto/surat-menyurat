import { Form, Input, Button, Card, Typography, message } from "antd";
import { useState } from "react";
import { Inertia } from "@inertiajs/inertia";

const { Title, Text } = Typography;

const LoginPage = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);
    axios
      .post(`/login`, values)
      .then(() => {
        message.success("Login Berhasil");
        Inertia.visit("/dashboard");
      })
      .catch((err) => message.error(err.response.data.message))
      .finally(() => setLoading(false));
  };

  

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4">
      <Card className="w-full max-w-md p-6 shadow-md rounded-xl bg-white">
        <div className="text-center mb-6">
          <Title level={3} className="text-gray-800">Sign In</Title>
          <Text type="secondary">Access your account</Text>
        </div>

        <Form name="login" layout="vertical" onFinish={onFinish} initialValues={{ email: "", password: "" }}>
          <Form.Item label="Email" name="email" rules={[{ required: true, message: "Enter your email" }]}>
            <Input type="email" placeholder="Enter email" size="large" />
          </Form.Item>

          <Form.Item label="Password" name="password" rules={[{ required: true, message: "Enter your password" }]}>
            <Input.Password placeholder="Enter password" size="large" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading} size="large" block>
              Login
            </Button>
          </Form.Item>
        </Form>

        {/* <div className="text-center text-gray-600">
          <Text>New here?</Text>
          <Typography.Link href="/register" className="ml-1">
            Create an account
          </Typography.Link>
        </div> */}
      </Card>
    </div>
  );
};

export default LoginPage;
