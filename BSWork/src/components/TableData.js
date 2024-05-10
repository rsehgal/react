import React, { useEffect, useState } from 'react';
import BS_Table from '../bscomponents/BS_Table';
import { FetchData } from '../core/fetchData';
import tableJsonData from '../data/table.json';
function TableData(props) {

    const { variant = "dark"} = props;
    var dataC = FetchData(props);
    console.log(dataC);
 
    return (
        <>
        <BS_Table jsonData={dataC} bordered variant={variant} hover heading_color="rowColor" />
        {
            // example to display data from json read from a file
            //<BS_Table jsonData={tableJsonData} bordered variant="light" hover heading_color="rowColor"/>
        }
        </>
    );
}

export default TableData;
