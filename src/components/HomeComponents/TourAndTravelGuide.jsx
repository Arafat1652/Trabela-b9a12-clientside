import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Overview from "./Overview";
import OurPackage from "./OurPackage";
import MeetTourGuide from "./MeetTourGuide";

const TourAndTravelGuide = () => {
  return (
    <div className="container mx-auto my-24 p-2">
      <h3 className="mt-24 text-2xl text-orange-2 text-center font-play">Tips & Advice</h3>
        <h3 className="text-4xl mt-4 text-center font-bold font-mont"> Tourism and Travel Guide</h3>
                <p className="lg:w-[650px] text-gray-400 mx-auto  text-center mt-3">Explore comprehensive guides to destinations across the globe. From hidden gems to popular tourist spots, we cover it all with detailed information and local insights.</p>
               <img className="mx-auto mb-10" src="https://roam.qodeinteractive.com/wp-content/plugins/mikado-tours/assets/img/separator.png" alt="" />
      <Tabs>
        <TabList>
          <Tab>Overview</Tab>
          <Tab>Our Packages</Tab>
          <Tab>Meet Our Guides</Tab>
        </TabList>

        <TabPanel>
          {/* some videos */}
          <Overview/>
        </TabPanel>
        <TabPanel>
          {/* our package for card */}
          <OurPackage/>
        </TabPanel>
        <TabPanel>
          {/* all tour guides here */}
          <MeetTourGuide/>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TourAndTravelGuide;
