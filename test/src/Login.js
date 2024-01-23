import ForgotPassword from './ForgotPassword';
import GeneralForm from './GeneralForm';
import { useState } from 'react';
import Input from './Input';
function Login2(props){
  const { onClick } = props;

const formFields = {
    email: {
      type: 'email',
      label: 'Email',
      initialValue : '',
      required:true
    },
    password: {
      type: 'password',
      label: 'Password',
      initialValue : '',
      required:true
    },
  }

  const handleForgotButton = ()=>{

    //alert("Button Clickeed....");
    onClick();

  };

const serverUrl='/api/login';
return (
  <>

<GeneralForm formFields={formFields} serverUrl={serverUrl}>Login Form</GeneralForm>

<div className='text-center'>
<button type="button" className="btn btn-warning" onClick={handleForgotButton} 
value = "Forgot Password">Forgot Password </button>
</div>
</>
);

}

function Login(){
  const [showComponentLoginForm, setShowComponentLoginForm] = useState(false);

  const handleButtonClick = () => {
    setShowComponentLoginForm(true);
  };

  return (
    <div>
      {showComponentLoginForm ? <ForgotPassword /> : <Login2 onClick={handleButtonClick} />}
    </div>
  );
}
  

export default Login;
