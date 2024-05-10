// src/Table.js
import React from 'react';

const Table = ({ data, type }) => {
  const headers = Object.keys(data[0] || {});

  return (
    <>
      <h3 className='text-success'>{type}</h3>
      <table className="table">
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              {headers.map((header) => (
                (<td key={header}>{item[header]}</td>)
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;

