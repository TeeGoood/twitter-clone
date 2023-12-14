import { Link } from "react-router-dom";
import Logo from "/src/assets/icons/logo.svg"; 
import home from "/src/assets/icons/home.svg";
import explore from "/src/assets/icons/explore.svg";
import Profile from "./Profile";

const NavBar = () => {
    return (  
        <div className="nav-bar w-56">
            <div className="flex-container flex flex-col items-start">
                <div className="p-2 py-3 hover:bg-zinc-200 rounded-full ml-2">
                    <img src={Logo} alt="logo" className="w-10"/>
                </div>
                {[
                    ['Home', '/home', home],
                    ['Explore', '/explore', explore],
                ].map(([text, url, icon]) => (
                    <Link 
                        to={url} 
                        className="flex hover:bg-zinc-200 align-middle py-3 px-5 rounded-full">
                            <img src={icon} alt={text} className="w-7 mr-2"/>
                            {text}
                    </Link>
                ))}
                <button 
                    className="font-bold  bg-blue-twitter text-white w-full p-2 rounded-full mt-2 hover:opacity-70">Post</button>
                <Profile/>
            </div>
        </div>
    );
}
 
export default NavBar;