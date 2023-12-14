import TweetForm from "./TweetForm";
import closeIcon from "/src/assets/icons/close.svg";

const TweetPopup = ({setIsTweet}) => {
    return (  
        <div className="post-form-container fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-40">
            <div className="post-form w-full max-w-xl rounded-2xl bg-white m-auto mt-10">
                <div className="button-container flex justify-between p-3 items-center">
                    <button className="hover:bg-zinc-200 p-1 rounded-full"
                    onClick={() => setIsTweet(false)}>
                        <img
                        src={closeIcon} alt="close-icon"
                        className="w-5" />
                    </button>
                    <button className="text-blue-twitter font-bold hover:bg-blue-twitter hover:bg-opacity-10 px-4 py-1 rounded-full">
                        Drafts
                    </button>
                </div>
                <TweetForm/>
            </div>
        </div>
    );
}
 
export default TweetPopup;