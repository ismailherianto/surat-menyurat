import { Form, Input, Button, Card, Typography } from "antd";
import { useState } from "react";
import { Inertia } from "@inertiajs/inertia";

const { Title, Text } = Typography;

const LoginForm = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);
    Inertia.post("/login", values, {
      onFinish: () => setLoading(false),
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-sm p-6 shadow-lg rounded-lg">
        <div className="text-center">
          <Title level={3} className="mb-1">Welcome Back</Title>
          <Text type="secondary">Please sign in to continue</Text>
        </div>

        <Form
          name="login"
          layout="vertical"
          onFinish={onFinish}
          className="mt-5"
          initialValues={{ email: "", password: "" }}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please enter your email" }]}
          >
            <Input type="email" placeholder="Enter email" size="large" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please enter your password" }]}
          >
            <Input.Password placeholder="Enter password" size="large" />
          </Form.Item>

          {/* <div className="flex justify-between items-center mb-4">
            <Text className="text-gray-600 hover:underline cursor-pointer">
              Forgot password?
            </Text>
          </div> */}

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              size="large"
              block
            >
              Login
            </Button>
          </Form.Item>

          <div className="text-center mt-3">
            <Text>Don’t have an account? 
              <Typography.Link href="/register" className="ml-1">Sign up</Typography.Link>
            </Text>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default LoginForm;
