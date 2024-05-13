// src/Login.js
import React, { useState } from 'react';
import Input from './Input';
import Label from './Label';
import axios from 'axios';
import { useAuth } from './AuthContext';
const GeneralForm = (props) => {

  const { isAuthenticated, login, logout, username, SetUName } = useAuth();

  const { formFields, serverUrl = '/home',
    encType = 'application/x-www-form-urlencoded',
    uploadFolder,
    fileForm = false } = props;
  console.log(serverUrl);

  const initialFormState = {};
  for (const fieldName in formFields) {
    initialFormState[fieldName] = formFields[fieldName].initialValue;
  }
  const [formData, setFormData] = useState(initialFormState);
  //console.log(formData); 
  const formName = props.children;

  const handleChange = (e) => {
    if (e.target.type === 'file') {
      console.log("Input is a file : ", e.target.files[0]);
      console.log("Input is a file : ", e.target.files[0].size);
      setFormData({
        ...formData,
        pdfFile: e.target.files[0],
      });
    }
    else {
      const { name, value } = e.target;
      //console.log(name);
      //console.log(value);
      setFormData({
        ...formData,
        [name]: value,
      });
    }
    // console.log(formData);
  };

  const handleSubmit = async (e) => {
   

    
    var dataToSubmit = formData;

    e.preventDefault();
    // Handle login logic here, e.g., send data to a server
    console.log("==== Handle Submit ====");
    console.log(formData);

    if (fileForm) {

      const frmData = new FormData();

      for (const key in formData) {
        if (formData.hasOwnProperty(key)) {
          frmData.append(key, formData[key]);
        }
      }
      frmData.append("uploadFolder", uploadFolder)
      console.log("++++++++++++++++++++++++++++++++++");
      console.log(frmData)
      dataToSubmit = frmData;
    }
    //console.log(JSON.stringify({dataToSave : formData}));
    //var stringifyData = JSON.stringify({dataToSave : formData});
    setFormData(initialFormState); // Reset the form after submission


    try {
      //alert("Try : "+serverUrl);
      //const response = await axios.post(serverUrl, frmData);
      const response = await axios.post(serverUrl, dataToSubmit);
      //const response = await axios.post(serverUrl, stringifyData);
      console.log('Login successful', response.data);
      // You can redirect the user to another page upon successful login.
      if (props.formType === "Login") {
        login();
        SetUName("Raman Sehgal");
      }
    } catch (error) {
      //alert("Catch : "+serverUrl);
      console.error('Login failed', error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h2>{formName}</h2>
          <form onSubmit={handleSubmit} encType={encType}>
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
            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GeneralForm;

