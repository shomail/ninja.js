import React from 'react';

const Row = ({ row, columns }) => {
  const columnsToRender = columns.map((column) => {
    return <td key={column.key}>{column.render ? column.render(row) : row[column.key]}</td>;
  });
  return <tr>{columnsToRender}</tr>;
};

export default Row;
