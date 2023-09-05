//export default 
function Input(prop){
const {type="text",id,children,className,placeholder,name}=prop;

//return <input type={type} id={id} className={className}/>;
return <input type={type} id={id} placeholder={placeholder} name={name} className="ui-textfield"/>;
}
