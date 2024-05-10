import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import bombay from "../images/bombay.jpeg";
import "bootstrap/dist/css/bootstrap.css";
import BS_Carousel from './BS_Carousel';


function BS_Card_Carousel(props) {

  const { card_boundary = "border-1 border-dark", img_boundary = "border border-dark", card_text_color = "dark", card_bg = "light", card_img, card_text, card_title, card_grad } = props;

  return (

    <Card style={{ width: '25rem' }} className={card_boundary} bg={card_bg} text={card_text_color} >
      <div className={card_grad} > </div> {/* Gradient overlay */}
      {
       // <Card.Img variant="top" src={card_img} className={img_boundary} />
      }
      {props.children}
      <Card.Body>
        <Card.Title>{card_title}</Card.Title>
        <Card.Text>
          {card_text}
        </Card.Text>
        <Button variant="danger">Go somewhere</Button>
      </Card.Body>

    </Card>

  );
}

export default BS_Card_Carousel;