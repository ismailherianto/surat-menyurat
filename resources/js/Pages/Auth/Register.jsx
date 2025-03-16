import { Form, Input, Button, Card, Typography } from "antd";
import axios from "axios";
import { useState } from "react";

const { Title, Text } = Typography;

const FormRegistrasi = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);
    axios.post("/register", values)
      .then(() => {
        setLoading(false);
        window.location = "/login";
      })
      .catch(() => setLoading(false));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md p-6 shadow-lg rounded-lg">
        <div className="text-center">
          <Title level={3} className="mb-1">Register</Title>
          <Text type="secondary">Create an account to get started</Text>
        </div>

        <Form
          name="register"
          layout="vertical"
          onFinish={onFinish}
          className="mt-5"
        >
          <Form.Item
            label="Full Name"
            name="name"
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <Input placeholder="Enter your full name" size="large" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please enter your email" },
              { type: "email", message: "Invalid email format" },
            ]}
          >
            <Input type="email" placeholder="Enter your email" size="large" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              { required: true, message: "Please enter your password" },
              { min: 6, message: "Password must be at least 6 characters" },
            ]}
          >
            <Input.Password placeholder="Enter password" size="large" />
          </Form.Item>

          <Form.Item
            label="Confirm Password"
            name="password_confirmation"
            dependencies={["password"]}
            rules={[
              { required: true, message: "Please confirm your password" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("Passwords do not match"));
                },
              }),
            ]}
          >
            <Input.Password placeholder="Confirm password" size="large" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading} size="large" block>
              Register
            </Button>
          </Form.Item>

          <div className="text-center mt-3">
            <Text>Already have an account? 
                <Typography.Link href="/login" className="ml-1">Login</Typography.Link>
            </Text>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default FormRegistrasi;
