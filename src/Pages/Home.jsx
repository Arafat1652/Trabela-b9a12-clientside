import Story from "../components/AllStory/Story";
import Banner from "../components/Banner/Banner";
import TourAndTravelGuide from "../components/HomeComponents/TourAndTravelGuide";
import TourType from "../components/TourTypeSection/TourType";


const Home = () => {
    return (
        <div>
            <Banner/>
            <TourAndTravelGuide/>
            <TourType/>
            <Story/>
        </div>
    );
};

export default Home;