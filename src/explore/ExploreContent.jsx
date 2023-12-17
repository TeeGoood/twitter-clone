import TrendList from "../components/trending/TrendList";
import Searchbar from "../search bar/SearchBar";
import settingIcon from "/src/assets/icons/setting.svg";

const ExploreContent = () => {
    return (  
        <div className="w-100 pt-2 border-x border-zinc-200">
            <div className="flex items-center px-4">
                <Searchbar/>
                <img src={settingIcon} className="ml-10 hover:bg-zinc-100 transition rounded-full p-2"/>
            </div>
            <div className="mt-5 overflow-hidden">
                <h1 className="font-bold text-xl mb-1 mx-4">Trends for you</h1>
                <TrendList/>
            </div>
        </div>
    );
}
 
export default ExploreContent;