import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Overview from "./Overview";
import OurPackage from "./OurPackage";

const TourAndTravelGuide = () => {
  return (
    <div className="container mx-auto my-24">
        <h3 className="text-3xl mt-24 text-center font-bold"> Tourism and Travel Guide</h3>
                <p className="lg:w-[650px] mx-auto  mb-10 text-center mt-3">Step into our vibrant world of creativity at ARTISAN, where imagination knows no bounds! Our art and craft store is a treasure.</p>
                <div className="max-w-7xl mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-8 p-3 lg:p-0"></div>
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
          <h2>Any content 3</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TourAndTravelGuide;
