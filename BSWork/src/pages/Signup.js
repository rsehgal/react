import GeneralForm from "../components/GeneralForm";

function Signup(){
const formFields = {firstname: {
      type: 'text',
      label: 'First Name',
      initialValue : '',
      required:true
    },middlename: {
      type: 'text',
      label: 'Middle Name',
      initialValue : '',
    },lastname: {
      type: 'text',
      label: 'Last Name',
      initialValue : '',
      required:true
    },email: {
      type: 'email',
      label: 'Email',
      initialValue : '',
      required:true
    } ,uname: {
      type: 'text',
      label: 'Username',
      initialValue : '',
      required:true
    }  ,password: {
      type: 'password',
      label: 'Password',
      initialValue : '',
      required:true
    } 
}
const serverUrl='/api/saveCredentials';
return <GeneralForm formFields={formFields} serverUrl={serverUrl}>Create New Account</GeneralForm>;
}

export default Signup;
