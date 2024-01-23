import GeneralForm from './GeneralForm';

function ForgotPassword(){
const formFields = {
    email: {
      type: 'email',
      label: 'Email',
      initialValue : '',
      required:true
    },
    
  }
const serverUrl='/api/login';
return <GeneralForm formFields={formFields} serverUrl={serverUrl}>Forgot Password Form</GeneralForm>;
}

export default ForgotPassword;
