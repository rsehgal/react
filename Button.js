//export default 
function Button(prop){
    const {type,className,disabled,children}=prop;
    //return <button type={type} className={className} disabled={disabled}>{children}</button>;
    return <button type={type} className="ui-button" disabled={disabled}>{children}</button>
}
