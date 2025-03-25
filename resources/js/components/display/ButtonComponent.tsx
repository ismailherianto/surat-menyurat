import React from "react";
import { Button } from "antd";
import { ButtonProps } from "antd/es/button";
import { LoadingOutlined } from "@ant-design/icons";

interface ButtonComponentProps extends ButtonProps {
  loading?: boolean;
  icon?: React.ReactNode;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  loading = false,
  icon,
  children,
  ...rest
}) => {
  return (
    <Button {...rest} icon={loading ? <LoadingOutlined spin /> : icon}>
      {children}
    </Button>
  );
};

export default ButtonComponent;
