import WhoToFollow from "../components/followSuggestion/WhoToFollow";
import TrendBox from "../components/trending/TrendBox";
import Searchbar from "../search bar/SearchBar";

const HomeSide = () => {
    return (  
        <div className="home-side flex-1 py-1 px-10">
            <Searchbar />
            <TrendBox />
            <WhoToFollow />
        </div>
    );
}
 
export default HomeSide;