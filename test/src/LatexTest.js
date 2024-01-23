import Latex from "react-latex-next";
import LatexComp from './Latex';
import PaperTitle from './PaperTitle';
import AuthorName from './AuthorName';
import PaperDetail from './PaperDetail';
import "katex/dist/katex.min.css";

export default function LatexTest(props){
const VcLatex = "A test equation : $V_c = V_s(1 - 10^{-\\frac{t}{T}})$";
  const enerEq = "Energy equation : $E=mc^2$"
  const title = "TPSM Study of even-even $^{144-148}$Ce Isotopes";
  //const title2="Description of one-neutron pick-up angular distribution for $^{40}$Ca+$^{96}$Zr within coupled reaction channels framework";
  const title2="The investigation of neutrinoless double beta decay of $^{136}$Xe using nuclear shell model";
  const author="Shahariar  Sarkar, Rajdeep Chatterjee";

return (
<div>
    <center>
	<hr/>
     <h2>{props.children}</h2>
	<hr/>
     <br/>
     <LatexComp className='text-danger'>{VcLatex}</LatexComp>
     <br/>
     <br/>
     <LatexComp className='text-primary'>{enerEq}</LatexComp>
     <br/>
     <br/>
     <Latex>{VcLatex}</Latex>
     <br/>
     <br/>
     <raman className='text-success'>
     <Latex>{enerEq}</Latex>
     </raman>
      <br/>
     <br/>
     <LatexComp className='text-info'>{title}</LatexComp>
         <br/>
     <br/>
     <PaperTitle className='text-warning'>{title2}</PaperTitle>
     <br/>
     <AuthorName>{author}</AuthorName>
     <br/>
     <br/>
     <PaperDetail title={title} authors={author} meta="A Tag to be used directly for complete paper detail. Content spectified as value of *meta* will display like this"/>
     <PaperDetail title={title} authors={author} />
     </center>
    </div>);

}
