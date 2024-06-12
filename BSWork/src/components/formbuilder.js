// FormBuilder.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FormBuilder = (props) => {
  const [schema, setSchema] = useState([]);
  const [formData, setFormData] = useState({});

  

  useEffect(() => {
    axios.post("/api/data/schema",props)
      .then(response => {
        setSchema(response.data);
        const initialFormData = response.data.reduce((acc, field) => {
          acc[field.Field] = '';
          return acc;
        }, {});
        setFormData(initialFormData);
      })
      .catch(error => {
        console.error('Error fetching schema:', error);
      });
  }, [props.tablename]);

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
            type="text"
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
