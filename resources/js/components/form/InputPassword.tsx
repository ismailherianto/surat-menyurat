import { Input } from "antd";
import { NamePath } from "antd/es/form/interface";
import { SizeType } from "antd/es/config-provider/SizeContext";
import { Rule } from "antd/es/form";
import FormItem from "antd/es/form/FormItem";
import React from "react";

interface InputPasswordProps<Values> {
  placeholder?: string;
  label?: React.ReactNode;
  name: NamePath<Values>;
  rule?: Rule[];
  size?: SizeType;
  testValue?: string | number;
  required?: boolean;
  disabled?: boolean;
}

const InputPassword = <Values extends object>(
  props: Readonly<InputPasswordProps<Values>>
) => {
  return (
    <FormItem<Values>
      label={props.label}
      name={props.name}
      rules={props.rule}
      required={props.required}
    >
      <Input.Password
        size={props.size}
        placeholder={props.placeholder}
        disabled={props.disabled}
      />
    </FormItem>
  );
};

export default InputPassword;