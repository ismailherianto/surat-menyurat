import { Empty, Spin, Table } from 'antd';
import { ColumnsType, TableProps, TablePaginationConfig } from 'antd/es/table';
import { GetRowKey } from 'antd/es/table/interface';
import React from 'react';

interface TableComponentProps<T> extends TableProps<T> {
  columns: ColumnsType<T>;
  dataSource: T[];
  loading?: boolean;
  rowKey: GetRowKey<T>;
  pagination?: false | TablePaginationConfig;
  onRowClick?: (record: T, index: number) => void;
}

const TableComponent = <T extends { id: React.Key }>({
  columns,
  dataSource,
  loading = false,
  rowKey = (record: T) => record.id,
  pagination = { pageSize: 10 },
  onRowClick,
  ...rest
}: Readonly<TableComponentProps<T>>) => {
  return (
    <Spin spinning={loading} size='large'>
      <Table<T>
      columns={columns}
      dataSource={dataSource}
      loading={loading}
      rowKey={rowKey}
      pagination={pagination ? { pageSize: 10 } : false}
      onRow={(record, index) => ({
        onClick: () => onRowClick && index !== undefined && onRowClick(record, index),
      })}
      locale={{ emptyText: <Empty description="Data Kosong" /> }}
      {...rest}
    />
    </Spin>
  );
};

export default TableComponent;
