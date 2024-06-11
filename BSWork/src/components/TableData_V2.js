import React, { useEffect, useState } from 'react';
import BS_Table from '../bscomponents/BS_Table';
import { FetchData, useFetchAxiosData_V2 } from '../core/fetchData';
import tableJsonData from '../data/table.json';
//import { fetcherConfigParameter } from '../core/fetchData';
import { FetchAxiosData } from '../core/fetchData';
import { useFetchAxiosData } from '../core/fetchData';


function TableData_V2(props) {

    const { variant = "dark",queryData} = props;
    console.log(queryData);
    //alert(queryData.firstname);

    /*
    ** Below we have specified two ways of fetching data
    ** and both are working. We are going to use 2nd ie.
    ** FetAxiosData because it does not require explicit
    ** JSON parse,and will handle that implicitly.
    */
    //var dataC = FetchData(props); // Also working
    //var dataC = FetchAxiosData(props);
    const { data, loading, error } = useFetchAxiosData_V2(props,queryData);
    
    console.log("RAMANNN : ",data);
 
    return (
        <>
        <BS_Table jsonData={data} bordered variant={variant} hover heading_color="rowColor" />
        {
            // example to display data from json read from a file
            //<BS_Table jsonData={tableJsonData} bordered variant="light" hover heading_color="rowColor"/>
        }
        </>
    );
}

export default TableData_V2;
