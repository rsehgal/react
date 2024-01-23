import GeneralForm from './GeneralForm';

function Upload(){
const formFields = {
  fname: {
    type: 'text',
    label: 'First Name',
    initialValue : '',
    required:true
  },
  lname: {
    type: 'text',
    label: 'Last Name',
    initialValue : '',
    required:true
  },
  email: {
    type: 'email',
    label: 'Email',
    initialValue : '',
    required:true
  },
    file : {
      type: 'file',
      fieldName: 'file',
      label: 'File',
      initialValue : '',
      required:true,

    },
  }
const serverUrl='/api/upload';
return <GeneralForm 
        formFields={formFields} 
        serverUrl={serverUrl} 
        enctype="multipart/form-data" 
        uploadFolder='test/contributions' 
        fileForm="true"
      > 
  Upload your contribution</GeneralForm>;
}

export default Upload;
