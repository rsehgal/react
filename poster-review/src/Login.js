import CommonForm from "./CommonForm";
import { useState } from "react";
import Label from "./Label";

export function Login(props){

    const [ loggedIn,setLoggedIn ] = useState(true);

    const checkLogin = props.checkLogin;

    const formFields = {
        uname: {
          type: 'text',
          label: 'Username',
          initialValue : '',
          color:'text-success',
          required:true
         
        },
        password: {
          type: 'password',
          label: 'Password',
          initialValue : '',
          color:'text-success',
          required:true
        },
      };

    const handleSubmit = (value)=>{
        //console.log("Vlue from Hndlesubmit : "+value);
        setLoggedIn(value);
        checkLogin(value);
       

    };


    const serverUrl = "https://sympnp.org/phpNode/login.php";
    const formType = "Login";

    return(
        <>
        {
            !loggedIn && 
            <div className="d-flex justify-content-center">
            <Label className="text-danger">Authentication failed</Label>
            </div>
        }
        <CommonForm formFields={formFields} serverUrl={serverUrl} handleSubmit={handleSubmit} />
        </>
    );
}