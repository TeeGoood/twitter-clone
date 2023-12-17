import searchIcon from "/src/assets/icons/search bar/search-gray.svg";
import searchIconBlue from "/src/assets/icons/search bar/search-blue.svg";
import { useEffect, useState } from "react";

const Searchbar = () => {
    const [focus, setFocus] = useState(false);

    return (  
        <div className="flex w-full relative box-border h-10">
            <img src={focus ? searchIconBlue : searchIcon } className="absolute top-2 left-2"/>
            <input type="text" placeholder="Search" className="bg-zinc-100 p-1 rounded-full pl-12 outline-none focus:bg-white focus:border focus:border-blue-twitter w-full py-2" 
            onFocus={() => setFocus(!focus)}
            onBlur={() => setFocus(!focus)}/>
        </div>
    );
}
 
export default Searchbar