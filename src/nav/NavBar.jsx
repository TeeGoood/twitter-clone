import { Link } from "react-router-dom";
import Logo from "/src/assets/icons/logo.svg"; 
import home from "/src/assets/icons/home.svg";
import explore from "/src/assets/icons/explore.svg";
import Profile from "./Profile";

const NavBar = ({setIsTweet}) => {
    return (  
        <div className="nav-bar w-56">
            <div className="flex-container flex flex-col items-start">
                {[
                    ['', '/home',Logo],
                    ['Home', '/home', home],
                    ['Explore', '/explore', explore],
                ].map(([text, url, icon], id) => {
                    const div_style = (id !== 0) ? "flex hover:bg-zinc-200 align-middle py-3 px-5 rounded-full" : "p-2 py-3 hover:bg-zinc-200 rounded-full ml-2" ;
                    const image_size = (id !== 0) ? "w-7 mr-2" : "w-10";
                    return (<Link 
                                to={url} 
                                className={div_style}>
                                    <img src={icon} alt={text} className={image_size}/>
                                    {text}
                            </Link>);
                })}
                <button 
                    className="font-bold  bg-blue-twitter text-white w-full p-2 rounded-full mt-2 hover:opacity-70"
                    onClick={() => setIsTweet(true)}>
                        Post
                </button>
                <Profile/>
            </div>
        </div>
    );
}
 
export default NavBar;