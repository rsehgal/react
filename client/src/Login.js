import GeneralForm from './GeneralForm';

function Login(){
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
return <GeneralForm formFields={formFields}>Login Form</GeneralForm>;
}

export default Login;
