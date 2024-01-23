import Latex from "react-latex";
import PaperTitle from './PaperTitle';
import AuthorName from './AuthorName';

export default function PaperDetail(props){

const {title,authors}=props;

return (
	<>
	<h5>{props.meta}</h5>
	<PaperTitle className='text-primary'>{title}</PaperTitle>
	<br/> 
       	<AuthorName className='text-secondary'>{authors}</AuthorName>
	</>
	);	
}

