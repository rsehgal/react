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
const serverUrl='/api/login';
return <GeneralForm formFields={formFields} serverUrl={serverUrl}>Login Form</GeneralForm>;
}

export default Login;
