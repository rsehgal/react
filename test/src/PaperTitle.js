import Latex from "react-latex";
export default function PaperTitle(props){

const {children,className}=props;

return <color className={className}>
	<Latex>{children}</Latex>
	</color>;
}

