 
import AdsBanner from "./components/AdsBanner";
import BestSellers from "./components/BestSellers";
import BottomAdd from "./components/BottomAds";
import NavBar from "./components/NavBar";
import NewArrivalProducts from "./components/NewArrivalProducts";
import RecommandedProduct from "./components/RecommandedProduct";
import ShopCollection from "./components/ShopCollection";
import TopAdd from "./components/TopAds";
import TopNavBar from "./components/TopNavBar";

const App = () => {
  return <div>
    <TopAdd/>
    <TopNavBar/>
    <NavBar/>
    <BottomAdd/>
    <div className="w-[1200px] mx-auto">
    <AdsBanner/>
    <ShopCollection/>
    <RecommandedProduct/>
    <NewArrivalProducts/>
    <BestSellers/>
    </div>
  </div>;
};

export default App;
