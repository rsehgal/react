import ProceedingsIT from './ProceedingsIT';
import ProceedingsC from './ProceedingsC';
import MyA from './Link';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default function Proceedings(props){

return (<>
		<Router><Link to='#g'>Invited Talk</Link></Router>
                <ProceedingsIT url='/api/data/ProceedingsIT' category='I' id='invited_talk' type='Invited Talk'>Proceedings</ProceedingsIT>
                <ProceedingsC url='/api/data/ProceedingsC' category='C' topic='A' type='Nuclear Structure'>Proceedings</ProceedingsC>
                <ProceedingsC url='/api/data/ProceedingsC' category='C' topic='B' type='Nuclear Reaction'>Proceedings</ProceedingsC>
                <ProceedingsC url='/api/data/ProceedingsC' category='C' topic='C' type='Nuclear Astrophysics'>Proceedings</ProceedingsC>
                <ProceedingsC url='/api/data/ProceedingsC' category='C' topic='D' type='Hadron Physics'>Proceedings</ProceedingsC>
                <ProceedingsC url='/api/data/ProceedingsC' category='C' topic='E' type='Relativistic Nuclear Collision and QGP'>Proceedings</ProceedingsC>
                <ProceedingsC url='/api/data/ProceedingsC' category='C' topic='F' type='Electroweck Interaction in Nuclei'>Proceedings</ProceedingsC>
                <ProceedingsC url='/api/data/ProceedingsC' category='C' id='g'  topic='G' type='Nuclear Instrumentation,Techniques and Applications'>Proceedings</ProceedingsC>
                <ProceedingsC url='/api/data/ProceedingsIT' category='T' type='Thesis Presentations'>Proceedings</ProceedingsC>
                </>
              );


}

