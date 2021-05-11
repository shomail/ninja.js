import React from 'react';

export default function Header({ headers }) {
  const headersToRender = headers.map((header) => <th key={header.key}>{header.title}</th>);

  return headers.length ? (
    <thead>
      <tr>{headersToRender}</tr>
    </thead>
  ) : null;
}
