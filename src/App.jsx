import { Outlet } from "react-router-dom";
import NavBar from "./nav/NavBar";
import { useState } from "react";
import TweetPopup from "./tweet/TweetPopup";

function App() {
  const [isTweet, setIsTweet] = useState(false);
  return (
    <div className='container m-auto max-w-8xl w-5/6 flex'>
      <NavBar setIsTweet={setIsTweet}/>
      <Outlet />
      {isTweet && <TweetPopup setIsTweet={setIsTweet}/>}
    </div>
  )
}

export default App
