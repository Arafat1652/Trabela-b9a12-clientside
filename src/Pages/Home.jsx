import Story from "../components/AllStory/Story";
import Banner from "../components/Banner/Banner";
import TourAndTravelGuide from "../components/HomeComponents/TourAndTravelGuide";
import TourType from "../components/TourTypeSection/TourType";
import World from "../components/World/World";


const Home = () => {
    return (
        <div>
            <Banner/>
            <TourAndTravelGuide/>
            <TourType/>
            <World/>
            <Story/>
        </div>
    );
};

export default Home;