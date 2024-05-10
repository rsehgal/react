import Carousel from 'react-bootstrap/Carousel';
//import ExampleCarouselImage from 'components/ExampleCarouselImage';
import bombay from "../images/bombay.jpeg"
import BS_Card from './BS_Card';
//import jsonData from "../data/headerdata.json";
import { Emoji } from '../components/smallcomponents';

function BS_Carousel(props) {
    const { jsonData, showCaption, showEmoji } = props;
    /*
    const handleHeartClick = () => {
        // Handle heart click action
        alert("HEART clicked");
      };
      */
    return (
        <Carousel className={props.className} indicators>
            {
                jsonData.map(item =>
                    //{jsonData}.map(item =>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={`images/${item.img}`}
                        

                        />
                        
                         
                         {
                         showEmoji 
                            && <Emoji emojiName={item.emojiName} location="emojiLocation"/>
                            
                        }
                        {
                        showCaption && <Carousel.Caption>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </Carousel.Caption>
                        }
                    </Carousel.Item>
                )
            }
        </Carousel>
    );
}

export default BS_Carousel;