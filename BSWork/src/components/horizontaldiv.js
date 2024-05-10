import React from "react";

export default function HorizontalDiv(props){

    return (
        <>
        <div className={props.className} >
            {props.children}
            </div>
        </>
    );
}