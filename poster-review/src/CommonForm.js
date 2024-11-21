import React, { useState } from "react";
import Input from "./Input";
import Label from "./Label";

const CommonForm = (props) => {

  const {formFields,serverUrl}=props;
  const originSubmit = props.handleSubmit;

  const initialFormState = {};
  for (const fieldName in formFields) {
    initialFormState[fieldName] = formFields[fieldName].initialValue;
  }

  const [formData, setFormData] = useState(initialFormState);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value, // Dynamically update the field based on the input's `name`
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(formData);
      const response = await fetch(serverUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData), // Send the entire form data object
      });

      const data = await response.json();
      console.log(data);
      originSubmit(data);

      if (data.status === "success") {
        setMessage("Login successful!");

        // Perform additional actions like redirecting
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          {
           // <h2>{formName}</h2>
          }
          <form onSubmit={handleSubmit} >
            {Object.entries(formFields).map(([fieldName, fieldData]) => (
              <div className="form-group" key={fieldName}>
                <Label className={fieldData.color} required={fieldData.required}>{fieldData.label}</Label>
                <Input
                  type={fieldData.type}
                  name={fieldName}
                  className="form-control"
                  value={formData[fieldName]}
                  handleChange={handleChange}
		  required={fieldData.required}
                />
              </div>
            ))}
            <button type="submit" className="btn btn-primary" >
             Submit 
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CommonForm;
