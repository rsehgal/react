export default function Message(props){
const {className,children}=props;
return <div className={className} role="alert">{children}</div>;
}

