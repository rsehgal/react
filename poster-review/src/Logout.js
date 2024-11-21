export default function Logout(props){

//const { username } = props;

const logout = props.logout;

const handleSubmit = ()=>{
    console.log("Handle submit of Logout called.....");
    logout();
}

const logoutButtonName = "Logout ";//+ username;
return (
<>
<button type="" className="btn btn-primary btn-danger" onClick={handleSubmit} value={logoutButtonName}> {logoutButtonName} </button>
</>
);

}

