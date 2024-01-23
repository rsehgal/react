import GeneralForm from './GeneralForm';

function ChangePasswd(){
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
const serverUrl='/api/updateCredentials';
return <GeneralForm formFields={formFields} serverUrl={serverUrl}>Change Password</GeneralForm>;
}

export default ChangePasswd;
