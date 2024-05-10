// src/Table.js
import React from 'react';
import "../css/table.css";
import { Table } from 'react-bootstrap';


const BS_Table = (props) => {
  const { jsonData, bordered, responsive, hover, variant, heading_color } = props;
  const headers = Object.keys(jsonData[0] || {});

  return (
    <>
      <h3 className='text-success'>Data</h3>
      <Table bordered={bordered}
        responsive={responsive}
        hover={hover}
        variant={variant}
      >
        <thead className="bold-heading uppercase">
          <tr>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {jsonData.map((item, index) => (
            <tr key={index}>
              {headers.map((header) => (
                (<td key={header}>{item[header]}</td>)
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default BS_Table;

