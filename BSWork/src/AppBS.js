import BS_Card from "./bscomponents/BS_Card";
import BS_Carousel from "./bscomponents/BS_Carousel";
import Card_Carousel from "./bscomponents/Card_Carousel";
import BS_Navbar from "./bscomponents/BS_Navbar";
import CarouselOnClick from "./test/carouselonclick";
import jsonData from "./data/headerdata.json";
import cardsJsonData from "./data/cardsdata.json";
import HorizontalDiv from "./components/horizontaldiv";
import BS_Table from "./bscomponents/BS_Table";
import tableJsonData from "./data/table.json";
import BS_Card_Carousel from "./bscomponents/BS_Card_Carousel";
import teamJsonData from "./data/team.json";
import Login from "./pages/Login";
import Footer from "./components/Footer";


function AppBS() {
  return (
    <>
    <Login />
   <BS_Table jsonData={tableJsonData} bordered variant="dark" hover heading_color="rowColor"/>
   <BS_Navbar />
   
    <BS_Card_Carousel>
    <BS_Carousel jsonData={jsonData} showCaption  showEmoji/>
    </BS_Card_Carousel>
    <BS_Card_Carousel>
        <BS_Carousel  jsonData={teamJsonData}  showCaption showEmoji/>
    </BS_Card_Carousel>

    <CarouselOnClick />
    <Card_Carousel jsonData={cardsJsonData}/>
    <BS_Carousel  jsonData={jsonData} showCaption/>
    <Footer />
    
    </>
  );
}

export default AppBS;
