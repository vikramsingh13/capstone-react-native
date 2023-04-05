import ScreenHeaderBtn from "./common/header/ScreenHeaderBtn";

// home screen
import Welcome from "./home/welcome/Welcome";
//import CarouselScreen from "./home/carousel/Carousel";
import HomeBoxes from "./home/homeBoxes/HomeBoxes";

//steps screen
import LocationPerms from "./steps/locationPerms/LocationPerms";
import GoogleFitSignIn from "./steps/googleSignIn/GoogleFitSignIn";

// job details screen
import Company from "./jobdetails/company/Company";
import { default as JobTabs } from "./jobdetails/tabs/Tabs";
import { default as JobAbout } from "./jobdetails/about/About";
import { default as JobFooter } from "./jobdetails/footer/Footer";
import Specifics from "./jobdetails/specifics/Specifics";

// common
import BoxCard from "./common/cards/BoxCard/BoxCard";

export {
  ScreenHeaderBtn,
  //Home exports
  Welcome,
  //CarouselScreen,
  HomeBoxes,
  //Steps exports
  LocationPerms,
  GoogleFitSignIn,
  Company,
  JobTabs,
  JobAbout,
  JobFooter,
  Specifics,
  BoxCard,
};
