import { Input } from 'antd'
import { SizeType } from 'antd/es/config-provider/SizeContext'
import { Rule } from 'antd/es/form'
import FormItem from 'antd/es/form/FormItem'
import { NamePath } from 'antd/es/form/interface'
import React, { ReactNode } from 'react'

interface InputTextProps {
  name: NamePath
  label: React.ReactNode
  value: string
  rule?: Rule[]; // Optional
  size?: SizeType; // Optional
  onChange: React.ChangeEventHandler<HTMLInputElement>
  placeholder?: string; // Optional
  disabled?: boolean; // Optional
  addonBefore?: ReactNode; // Optional
  required?: boolean; // Optional
  classNameItem?: string; // Optional
  initialValue?: unknown; // Optional
  disable?: boolean; // Optional
  hidden?: boolean; // Optional
}

const InputText = <Values extends object>(
  props: Readonly<InputTextProps>
) => {
  const buildPlaceholder = () => {
    if (props.placeholder) {
      return props.placeholder;
    }

    if (props.label && typeof props.label === "string") {
      return props.label;
    }

    return "";
  };

  return (
    <FormItem<Values>
    initialValue={props.initialValue}
    label={props.label}
    name={props.name}
    rules={props.rule}
    hidden={props.hidden}
    className={`${props.disabled ? "disabled" : ""} ${props.classNameItem}`}
      >
        <Input
          size={props.size}
          value={props.value}
          onChange={props.onChange}
          placeholder={buildPlaceholder()}
          disabled={props.disabled}
          addonBefore={props.addonBefore}
          required={props.required} />
      
    </FormItem>
  );

};



export default InputText