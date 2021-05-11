import React, { useRef } from 'react';
import DataTable from './components/DataTable';
import './App.css';
import { translations } from './translations';

const App = (props) => {
  const locale = useRef('da');
  const renderPersonRow = (row) => (
    <>
      {' '}
      <a href={row.edit_path}>{row.name1}</a>
      <br />
      <small>{row.email}</small>
    </>
  );
  return (
    <div className="container mt-3">
      <DataTable
        data={props.rows}
        options={{
          rowsPerPage: 5,
          isSearchable: true,
          searchPlaceholder: translations.dataTableSearchPlaceholder[locale.current],
          dataKey: 'per_id',
          excludeFromSearch: ['edit_path', 'per_id'],
        }}
        columns={[
          {
            key: 'person',
            render: renderPersonRow,
          },
        ]}
      />
    </div>
  );
};

export default App;
