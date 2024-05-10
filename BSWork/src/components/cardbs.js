import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import bombay from "../images/bombay.jpeg";

function CardBS() {
  return (
    <Card>
      <Card.Img variant="top" src={bombay} className='card-image'/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CardBS;