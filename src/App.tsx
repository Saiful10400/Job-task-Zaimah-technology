 
import AdsBanner from "./components/AdsBanner";
import BottomAdd from "./components/BottomAds";
import NavBar from "./components/NavBar";
import TopAdd from "./components/TopAds";
import TopNavBar from "./components/TopNavBar";

const App = () => {
  return <div>
    <TopAdd/>
    <TopNavBar/>
    <NavBar/>
    <BottomAdd/>
    <div className="w-[1400px] mx-auto">
    <AdsBanner/>
    </div>
  </div>;
};

export default App;
