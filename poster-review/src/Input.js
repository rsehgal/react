import { useState } from 'react';

export default function Input(props){

const {type="text",id,children,className,value,name,required}=props;

const parentChange = props.handleChange;
const [inputValue, setValue]=useState('');

const handleChange = (e) =>{
	setValue(e.target.value);
	parentChange(e);
}


//return <input type={type} id={id} name={name} className={className} value = {value} onChange={onChange} required={required}/>;
return <input type={type} id={id} name={name} className={className} value = {value} onChange={handleChange} required={required}/>;

}

