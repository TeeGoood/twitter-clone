import { useState } from "react";
import PostCard from "../post/PostCard";
import TweetForm from "../tweet/TweetForm";
import SelectContent from "./SelectContent";
import PostCardList from "../post/PostCardList";

const HomeContent = () => {
    const [posts, setPosts] = useState([
        
    ]);

    return (  
        <div className="home-content w-100 border-x border-zinc-200">
            <div>
                <SelectContent/>
                <TweetForm lineStart={3}/>
            </div>
            <PostCardList />
        </div>
    );
}

export default HomeContent;