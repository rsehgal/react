import Latex from "react-latex";
export default function LatexComp(props){

const {children,className}=props;

return <color className={className}>
	<Latex>{children}</Latex>
	</color>;
}

