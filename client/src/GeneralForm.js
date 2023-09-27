// src/Login.js
import React, { useState } from 'react';
import Input from './Input';
import Label from './Label';
const GeneralForm = (props) => {

  const {formFields} = props;

  const initialFormState = {};
  for (const fieldName in formFields) {
    initialFormState[fieldName] = formFields[fieldName].initialValue;
  }
  const [formData, setFormData] = useState(initialFormState);
  
  const formName = props.children;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here, e.g., send data to a server
    console.log(formData);


     /*try {
      const response = await fetch('/api/SaveCredentials', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ dataToSave: formData }),
      });

      if (response.status === 200) {
        console.log('Data saved successfully');
        // Reset form or perform any other actions
      } else {
        console.error('Error saving data');
      }
    } catch (error) {
      console.error('Error:', error);
    }*/

    console.log(JSON.stringify({dataToSave : formData}));
    
    setFormData(initialFormState); // Reset the form after submission
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h2>{formName}</h2>
          <form onSubmit={handleSubmit}>
            {Object.entries(formFields).map(([fieldName, fieldData]) => (
              <div className="form-group" key={fieldName}>
                <Label className="text-danger" required={fieldData.required}>{fieldData.label}</Label>
                <Input
                  type={fieldData.type}
                  name={fieldName}
                  className="form-control"
                  value={formData[fieldName]}
                  onChange={handleChange}
		  required={fieldData.required}
                />
              </div>
            ))}
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GeneralForm;

