import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BS_Card from "./BS_Card";
//import bombay from "../images/bombay.jpeg";
//import bombay2 from "../images/bombay2.jpeg";
//import bombay3 from "../images/bombay3.jpeg";
//import jsonData from "../data/cardsdata.json"


function Card_Carousel(props) {

    const { jsonData } = props;

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (
        <Carousel responsive={responsive}>
            {jsonData.map(item =>
                <div><BS_Card card_img={`images/${item.img}`} card_title={item.title} card_text={item.text} card_grad="gradient-overlay" card_boundary="border-0 border-warning zoom text-center"   /></div>
            )
            }
            {/*
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
            */}
        </Carousel>
    );
}

export default Card_Carousel;