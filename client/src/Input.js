import { useState } from 'react';

export default function Input(props){

const {type="text",id,children,className,value,name,onChange,required}=props;

const [inputValue, setValue]=useState('');

const handleChange = (e) =>{
	setValue(e.target.value);
	onChange(e);
}


//return <input type={type} id={id} name={name} className={className} value = {value} onChange={onChange} required={required}/>;
return <input type={type} id={id} name={name} className={className} value = {value} onChange={handleChange} required={required}/>;

}

