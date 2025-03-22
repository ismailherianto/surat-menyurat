import { Table } from 'antd';
import { ColumnsType, TableProps, TablePaginationConfig } from 'antd/es/table';
import React from 'react';

interface TableComponentProps<T> extends TableProps<T> {
  columns: ColumnsType<T>;
  dataSource: T[];
  loading?: boolean;
  rowKey?: string;
  pagination?: false | TablePaginationConfig;
  onRowClick?: (record: T, index: number) => void;
}

const TableComponent = <T extends object>({
  columns,
  dataSource,
  loading = false,
  rowKey = 'id',
  pagination = { pageSize: 10 },
  onRowClick,
  ...rest
}: Readonly<TableComponentProps<T>>) => {
  return (
    <Table<T>
      columns={columns}
      dataSource={dataSource}
      loading={loading}
      rowKey={rowKey}
      pagination={pagination ? { pageSize: 10 } : false}
      onRow={(record, index) => ({
        onClick: () => onRowClick && index !== undefined && onRowClick(record, index),
      })}
      {...rest}
    />
  );
};

export default TableComponent;
