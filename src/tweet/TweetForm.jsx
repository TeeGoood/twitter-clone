import DynamicTextArea from "./DynamicTextArea";
import closeIcon from "/src/assets/icons/close.svg";
import profile from "/src/assets/image/profile-pic.webp";
import globalIcon from "/src/assets/icons/global.svg";
import imageIcon from "/src/assets/icons/image.svg";
import gifIcon from "/src/assets/icons/gif.svg";
import pollIcon from "/src/assets/icons/poll.svg";
import emojiIcon from "/src/assets/icons/emoji.svg";
import calendarIcon from "/src/assets/icons/calendar.svg";
import locationIcon from "/src/assets/icons/location.svg";

const TweetForm = ({lineStart}) => {
    return (  
        <form action="" className="p-1 px-4 ">
            <div className="flex items-start gap-4">
                <img src={profile} alt="profile-icon" className="w-10"/>
                <DynamicTextArea lineStart={lineStart}/>
            </div>
            <button className="flex items-center text-blue-twitter font-bold text-sm hover:bg-blue-twitter hover:bg-opacity-10  transition p-1 px-2 rounded-full gap-2">
                <img src={globalIcon} alt="global-icon" className="w-4"/>
                <span>Everyone can reply</span>
            </button>
            <div className="utility-div border-t border-zinc-200 py-2 mt-2 flex justify-between items-center">
                <div className="left flex gap-2">
                    <button>
                        <img src={imageIcon} alt="image-icon" className="hover:bg-blue-twitter hover:bg-opacity-10 transition p-1 rounded-full w-7" />
                    </button>
                    <button>
                        <img src={gifIcon} alt="gif-icon" className="hover:bg-blue-twitter hover:bg-opacity-10 transition p-1 rounded-full w-7" />
                    </button>
                    <button>
                        <img src={pollIcon} alt="poll-icon" className="hover:bg-blue-twitter hover:bg-opacity-10 transition p-1 rounded-full w-7" />
                    </button>
                    <button>
                        <img src={emojiIcon} alt="emoji-icon" className="hover:bg-blue-twitter hover:bg-opacity-10 transition p-1 rounded-full w-7" />
                    </button>
                    <button>
                        <img src={calendarIcon} alt="calendar-icon" className="hover:bg-blue-twitter hover:bg-opacity-10 transition p-1 rounded-full w-7" />
                    </button>
                    <button>
                        <img src={locationIcon} alt="location-icon" className="hover:bg-blue-twitter hover:bg-opacity-10 transition p-1 rounded-full w-7 opacity-40" />
                    </button>
                </div>
                <div className="right">
                    <button className="text-white bg-blue-twitter px-5 py-2 rounded-full font-bold hover:opacity-50 transition">Post</button>
                </div>
            </div>
        </form>
    );
}
 
export default TweetForm;