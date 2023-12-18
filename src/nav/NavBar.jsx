import { Link, useLocation } from "react-router-dom";
import Logo from "/src/assets/icons/logo.svg"; 
import homeIconActive from "/src/assets/icons/nav/home-active.svg";
import homeIconInactive from "/src/assets/icons/nav/home-inactive.svg";
import exploreIconActive from "/src/assets/icons/nav/explore-active.svg";
import exploreIconInactive from "/src/assets/icons/nav/explore-inactive.svg";
import Profile from "./Profile";

const NavBar = ({setIsTweet}) => {
    function checkRoute(pathName){
        return ('/' + pathName) === useLocation().pathname;
    }

    return (  
        <div className="nav-bar w-72 p-2">
            <div className="flex-container flex flex-col items-start">
                <Link 
                    to='/home' 
                    className="transition p-2 py-3 hover:bg-zinc-200 rounded-full ml-2">
                        <img src={Logo} alt="logo" className="w-10"/>
                </Link>
                <Link 
                    to='/home' 
                    className="transition flex items-center hover:bg-zinc-200 py-3 px-5 rounded-full text-lg">
                        <img src={checkRoute('home') || checkRoute('') ? homeIconActive : homeIconInactive} alt="home-icon" className="w-7 mr-2"/>
                        <span className={(checkRoute('home') || checkRoute('')) && "font-semibold"}>Home</span>
                </Link>
                <Link 
                    to='/explore' 
                    className="transition flex items-center hover:bg-zinc-200 py-3 px-5 rounded-full text-lg">
                        <img src={checkRoute('explore') ? exploreIconActive : exploreIconInactive} alt="home-icon" className="w-7 mr-2"/>
                        <span className={checkRoute('explore') && "font-semibold"}>Explore</span>
                </Link>
                <button 
                    className="font-bold  bg-blue-twitter text-white w-48 h-12 text-lg p-2 rounded-full hover:opacity-70 transition mt-20 shadow-lg"
                    onClick={() => setIsTweet(true)}>
                        Post
                </button>
                <Profile/>
            </div>
        </div>
    );
}
 
export default NavBar;