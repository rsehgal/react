export default function Label(props){

const {children,className,required}=props;

let capt=children;
if(required)
capt += '*';
return <label className={className} required={required}>{capt}</label>;

}

