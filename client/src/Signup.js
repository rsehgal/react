import GeneralForm from './GeneralForm';

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
return <GeneralForm formFields={formFields}>Create New Account</GeneralForm>;
}

export default Signup;
