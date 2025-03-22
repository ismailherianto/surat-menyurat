import { Input } from 'antd';
import { SizeType } from 'antd/es/config-provider/SizeContext';
import { Rule } from 'antd/es/form';
import FormItem from 'antd/es/form/FormItem';
import { NamePath } from 'antd/es/form/interface';
import React, { ReactNode } from 'react';

interface InputTextProps {
  name: NamePath;
  label: ReactNode;
  value?: string; // Make optional for controlled input
  rule?: Rule[];
  size?: SizeType;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  disabled?: boolean;
  addonBefore?: ReactNode;
  classNameItem?: string;
  initialValue?: unknown;
  hidden?: boolean;
}

const InputText = <Values extends object>({ 
  name, 
  label, 
  value, 
  rule, 
  size, 
  onChange, 
  placeholder, 
  disabled, 
  addonBefore, 
  classNameItem, 
  initialValue, 
  hidden 
}: Readonly<InputTextProps>) => {
  
  const computedPlaceholder = placeholder || (typeof label === "string" ? label : "");

  return (
    <FormItem<Values>
      name={name}
      label={label}
      rules={rule}
      initialValue={initialValue}
      hidden={hidden}
      className={classNameItem}
    >
      <Input
        size={size}
        value={value}
        onChange={onChange}
        placeholder={computedPlaceholder}
        disabled={disabled}
        addonBefore={addonBefore}
      />
    </FormItem>
  );
};

export default InputText;
