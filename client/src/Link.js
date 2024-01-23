import { Link } from "react-router-dom";

export default function MyA(props){
	var address="/"+props.url;
return (
	<h2><Link to={address}>{props.children}</Link></h2>
	);
}
