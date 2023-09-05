//export default 
function Container(prop){
    const {id,className,children}=prop;
//return <div id={id} className={className}>{children}</div>;
return <div id={id} className="ui-container">{children}</div>;
}
