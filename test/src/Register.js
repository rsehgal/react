import GeneralForm from './GeneralForm';

function Register(){
const formFields = {firstname: {
      type: 'text',
      label: 'First Name',
      initialValue:'',
      required:true
    },middlename: {
      type: 'text',
      label: 'Middle Name',
      initialValue:'',
    },lastname: {
      type: 'text',
      label: 'Last Name',
      initialValue:'',
      required:true
    },email: {
      type: 'email',
      label: 'Email',
      initialValue:'',
      required:true
    } ,affiliation: {
      type: 'text',
      label: 'Affiliation',
      initialValue:'',
      required:true
    }  ,designation: {
      type: 'text',
      label: 'Designation',
      initialValue:'',
      required:true
    } 
}
return <GeneralForm formFields={formFields}>Registration Form</GeneralForm>;
}

export default Register;
