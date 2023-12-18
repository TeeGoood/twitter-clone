import { useState } from "react";
import TrendCard from "./TrendCard";

const TrendList = () => {
    const [hashtags , setHashtags] = useState([
        {
            name : "dota2",
            posts : 36100
        },
        {
            name : "programing",
            posts : 23000000
        },
        {
            name : "cp",
            posts : 70000
        },
    ]);

    return (  
        <div>
            { hashtags.map((hastag, id) => (
            id < 3 && <TrendCard hastag={hastag} />))
        }
        </div>
    );
}
 
export default TrendList;