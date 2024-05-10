import React from "react";
import "../css/table.css";
//import jsonData from "../data/table.json";
import { Table } from 'react-bootstrap';

export default function BS_Table(props) {

    const { jsonData, bordered, responsive, hover, variant, heading_color} = props;
    
    const keyArray = Object.keys(jsonData[0]);

    return (
        <>
            <Table  bordered={bordered}
                    responsive={responsive}
                    hover={hover}
                    variant={variant}
                    
            >
                <thead className="bold-heading uppercase">
                    <tr className={heading_color}>
                        <td className="font-weight-bold">S. No.</td>
                        {
                            keyArray.map(item => (
                                <td>{item}</td>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        //Looping over rows
                        jsonData.map((data, index) => (
                            <tr>
                                <td>{index}</td>
                                {
                                    //Looping over columns
                                    Object.values(data).map((colval, colindex) => (
                                        <td>{colval}</td>
                                    ))
                                }
                                {
                                /*  //Manual feeding
                                    <td>{data.name}</td>   
                                    <td>{data.id}</td>   
                                */
                                }
                            </tr>
                        ))

                    }

                </tbody>
            </Table>
        </>
    );
}