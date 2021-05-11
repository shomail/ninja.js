import React, { useState } from 'react';
import Pagination from '../Pagination';
import Row from './Row';
import Header from './Header';
import TextField from '../TextField';

const DataTable = ({
  data = [],
  options: { rowsPerPage = 40, isSearchable = false, searchPlaceholder = '', dataKey = '', excludeFromSearch = [] },
  columns = [],
  headers = [],
}) => {
  const [rows, setRows] = useState(data);
  const [currentPageNumber, setCurrentPageNumber] = useState(0);

  const search = (event) => {
    const text = event.target.value;
    let rowsFound = data;

    if (text) {
      rowsFound = data.filter((row) => {
        return Object.keys(row).some((key) =>
          excludeFromSearch.includes(key) ? false : row[key].toString().toLowerCase().includes(text.toLowerCase())
        );
      });
    }

    setRows(rowsFound);
    setCurrentPageNumber(0);
  };

  const rowsInPageNumber = (pageNumber) => {
    const startIndex = pageNumber * rowsPerPage;
    return [startIndex, startIndex + rowsPerPage];
  };

  const rowsToRender = rows
    .map((row, idx) => <Row key={dataKey ? row[dataKey] : idx} row={row} columns={columns} />)
    .slice(...rowsInPageNumber(currentPageNumber));

  return (
    <div>
      {isSearchable && <TextField onChange={search} placeholder={searchPlaceholder} type="search" />}
      <table>
        <Header headers={headers} />
        <tbody>{rowsToRender}</tbody>
      </table>
      <Pagination
        currentPageNumber={currentPageNumber}
        perPage={rowsPerPage}
        dataLength={rows.length}
        onChange={setCurrentPageNumber}
      />
    </div>
  );
};

export default DataTable;
