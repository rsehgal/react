// FormBuilder.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useFetchAxiosData_V2 } from '../core/fetchData';
import { useMemo } from 'react';

const FormBuilder = (props) => {
  const [schema, setSchema] = useState([]);
  const [formData, setFormData] = useState({});

  const queryData = useMemo(() => {
    return {
      tablename: props.tablename,
      username : 'rsehgal'
      // other query data here
    };
  }, [props.tablename]); // Dependencies that affect queryData

  /*const queryData={
                    tablename : props.tablename,
                    username : 'rsehgal'
                  };
  */
    
    console.log(queryData);

    
    const { data, loading, error } = useFetchAxiosData_V2(props,queryData);
    console.log(JSON.stringify(data));
    

  useEffect(() => {

    
    axios.post(props.schemaUrl,props)
      .then(response => {
        setSchema(response.data);
        const initialFormData = response.data.reduce((acc, field) => {
          //acc[field.Field] = props.initialValues[field.Field] || '';
          if(props.url){
          acc[field.Field] = data[0][field.Field] || '';
          }else{
            acc[field.Field] = '';
            }
          return acc;
        }, {});
        setFormData(initialFormData);
      })
      .catch(error => {
        console.error('Error fetching schema:', error);
      });
  }, [props.tablename,props.url,props.schemaUrl]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    // Here you can handle form submission, e.g., sending data to the backend
  };

  return (
    <form onSubmit={handleSubmit}>
      {schema.map(field => (
        <div key={field.Field}>
          <label>{field.Field}</label>
          <input
            type={field.type}
            name={field.Field}
            value={formData[field.Field]}
            className='form-control'
            onChange={handleChange}
          />
        </div>
      ))}
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </form>
  );
};

export default FormBuilder;
