// src/Table.js
import React from 'react';
import LatexComp from './Latex';
const TableProc = ({ data, id, type }) => {
  const headers = Object.keys(data[0] || {});

  return (
    <>
    <h3 className='text-success' id={id}>{type}</h3>
    <table className="table">
       <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            {headers.map((header) => (
		(<td key={header}><LatexComp>{item[header]}</LatexComp></td>)
            ))}
          </tr>
        ))}
      </tbody>
    </table>
   </>
  );
};

export default TableProc;

