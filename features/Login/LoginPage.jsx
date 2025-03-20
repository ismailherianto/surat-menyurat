import { Form, Button, Card, Typography, message } from "antd";
import { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import InputText from "@/components/form/InputText";
import InputPassword from "@/components/form/InputPassword";

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

        <Form layout="vertical" onFinish={onFinish} initialValues={{ email: "", password: "" }}>
          <InputText label="Email" name="email" required rule={[{
            type: "email",
            message: "Email tidak valid",
            required: true,
          }]}/>
          <InputPassword label="Password" name="password" required size="large"/>

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
