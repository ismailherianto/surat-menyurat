import { DatePicker } from 'antd';
import { SizeType } from 'antd/es/config-provider/SizeContext';
import { Rule } from 'antd/es/form';
import FormItem from 'antd/es/form/FormItem';
import { NamePath } from 'antd/es/form/interface';
import React from 'react';
import dayjs, { Dayjs } from 'dayjs';

interface DatePickerInputProps {
  name: NamePath;
  label: React.ReactNode;
  value?: Dayjs; // Supports dayjs object for the selected date
  rule?: Rule[];
  size?: SizeType;
  onChange?: (date: Dayjs | null) => void;
  placeholder?: string;
  disabled?: boolean;
  classNameItem?: string;
  initialValue?: Dayjs;
  hidden?: boolean;
  allowClear?: boolean; // NEW: Allow clearing the date
  format?: string; // NEW: Date format
  showTime?: boolean; // NEW: Enable time selection
}

const DatePickerInput = <Values extends object>({
  name,
  label,
  value,
  rule,
  size,
  onChange,
  placeholder = 'Select a date',
  disabled,
  classNameItem,
  initialValue,
  hidden,
  allowClear = true, // Default: true
  format = 'YYYY-MM-DD', // Default format
  showTime = false, // Default: no time selection
}: Readonly<DatePickerInputProps>) => {
  return (
    <FormItem<Values>
      name={name}
      label={label}
      rules={rule}
      initialValue={initialValue}
      hidden={hidden}
      className={classNameItem}
    >
      <DatePicker
        size={size}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        allowClear={allowClear}
        format={format}
        showTime={showTime}
      />
    </FormItem>
  );
};

export default DatePickerInput;
