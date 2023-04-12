import ScreenHeaderBtn from "./common/header/ScreenHeaderBtn";

// home screen
import Welcome from "./home/welcome/Welcome";
import HomeBoxes from "./home/homeBoxes/HomeBoxes";

//steps screen
import LocationPerms from "./steps/locationPerms/LocationPerms";
import GoogleFitSignIn from "./steps/googleSignIn/GoogleFitSignIn";
import StepsIos from "./steps/stepsIos/StepsIos";

//workout screen
import WorkoutBoxes from "./workout/workoutBoxes/WorkoutBoxes";
import WorkoutPlan from "./workout/workoutPlan/WorkoutPlan";
import RepTracker from "./workout/repTracker/RepTracker";
import RepCard from "./workout/repCard/RepCard";


// job details screen
import Company from "./jobdetails/company/Company";
import { default as JobTabs } from "./jobdetails/tabs/Tabs";
import { default as JobAbout } from "./jobdetails/about/About";
import { default as JobFooter } from "./jobdetails/footer/Footer";
import Specifics from "./jobdetails/specifics/Specifics";

// common
import BoxCard from "./common/cards/BoxCard/BoxCard";
import ExpCard from "./common/cards/expCard/ExpCard";
import CalorieCard from "./common/cards/calorieCard/CalorieCard";

export {
  ScreenHeaderBtn,
  BoxCard,
  ExpCard,
  CalorieCard,
  //Home exports
  Welcome,
  HomeBoxes,
  //Steps exports
  LocationPerms,
  GoogleFitSignIn,
  StepsIos,
  //Workout exports
  WorkoutBoxes,
  WorkoutPlan,
  RepTracker,
  RepCard,

  Company,
  JobTabs,
  JobAbout,
  JobFooter,
  Specifics,
  
};
