import { Select } from 'antd';
import { SizeType } from 'antd/es/config-provider/SizeContext';
import { Rule } from 'antd/es/form';
import FormItem from 'antd/es/form/FormItem';
import { NamePath } from 'antd/es/form/interface';
import React from 'react';

const { Option } = Select;

interface SelectInputProps {
  name: NamePath;
  label: React.ReactNode;
  value?: string;
  rule?: Rule[];
  size?: SizeType;
  onChange?: (value: string | null) => void;
  placeholder?: string;
  disabled?: boolean;
  options: { label: string; value: string | number }[];
  classNameItem?: string;
  initialValue?: unknown;
  hidden?: boolean;
  allowClear?: boolean; // NEW PROP
}

const SelectInput = <Values extends object>({
  name,
  label,
  value,
  rule,
  size,
  onChange,
  placeholder,
  disabled,
  options,
  classNameItem,
  initialValue,
  hidden,
  allowClear = false, // DEFAULT: false
}: Readonly<SelectInputProps>) => {
  
  const computedPlaceholder = placeholder || (typeof label === 'string' ? `Select ${label}` : 'Select an option');

  return (
    <FormItem<Values>
      name={name}
      label={label}
      rules={rule}
      initialValue={initialValue}
      hidden={hidden}
      className={classNameItem}
    >
      <Select
        size={size}
        value={value}
        onChange={onChange}
        placeholder={computedPlaceholder}
        disabled={disabled}
        allowClear={allowClear} // ADDED
      >
        {options.map((option) => (
          <Option key={option.value} value={option.value}>
            {option.label}
          </Option>
        ))}
      </Select>
    </FormItem>
  );
};

export default SelectInput;
