import { DatePicker } from 'antd';
import { SizeType } from 'antd/es/config-provider/SizeContext';
import { Rule } from 'antd/es/form';
import FormItem from 'antd/es/form/FormItem';
import { NamePath } from 'antd/es/form/interface';
import React from 'react';
import dayjs, { Dayjs } from 'dayjs';

const { RangePicker } = DatePicker;

interface RangePickerInputProps {
  name: NamePath;
  label: React.ReactNode;
  value?: [Dayjs, Dayjs]; // Supports dayjs objects for dates
  rule?: Rule[];
  size?: SizeType;
  onChange?: (dates: [Dayjs | null, Dayjs | null] | null) => void;
  placeholder?: [string, string]; // Placeholder for start & end date
  disabled?: boolean;
  classNameItem?: string;
  initialValue?: [Dayjs, Dayjs];
  hidden?: boolean;
  allowClear?: boolean; // NEW: Allow clearing the date
  format?: string; // NEW: Date format
  showTime?: boolean; // NEW: Enable time selection
}

const RangePickerInput = <Values extends object>({
  name,
  label,
  value,
  rule,
  size,
  onChange,
  placeholder = ['Start Date', 'End Date'],
  disabled,
  classNameItem,
  initialValue,
  hidden,
  allowClear = true, // Default: true
  format = 'YYYY-MM-DD', // Default format
  showTime = false, // Default: no time selection
}: Readonly<RangePickerInputProps>) => {
  return (
    <FormItem<Values>
      name={name}
      label={label}
      rules={rule}
      initialValue={initialValue}
      hidden={hidden}
      className={classNameItem}
    >
      <RangePicker
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

export default RangePickerInput;
