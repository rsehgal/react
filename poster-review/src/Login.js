import GeneralForm from "./GeneralForm";
import { useState } from "react";

export function Login(){

    const [ loggedIn,setLoggedIn ] = useState(false);

    const formFields = {
        email: {
          type: 'text',
          label: 'Username',
          initialValue : '',
          required:true
        },
        password: {
          type: 'password',
          label: 'Password',
          initialValue : '',
          required:true
        },
      };
    
    return(
        <>
        <GeneralForm formFields={formFields} />
        </>
    );
}