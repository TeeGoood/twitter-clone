import commentIcon from "/src/assets/icons/comment.svg";
import reTweetIcon from "/src/assets/icons/retweet.svg";
import likeIcon from "/src/assets/icons/like.svg";
import viewedIcon from "/src/assets/icons/viewed.svg";
import bookmarkIcon from "/src/assets/icons/bookmark.svg";
import dowloadIcon from "/src/assets/icons/dowload.svg";

const PostStatus = ({status}) => {
    return (  
        <div className="button-container flex justify-between mt-2">
            <div className="flex gap-1 items-start">
                <img src={commentIcon} className="w-6 hover:bg-blue-twitter hover:bg-opacity-40 transition rounded-full p-1"/>
                <div className="text-sm">
                    {status.comments}
                </div>
            </div>
            <div className="flex gap-1 items-start">
                <img src={reTweetIcon} className="w-6 hover:bg-green-300 hover:bg-opacity-40 transition rounded-full p-1"/>
                <div className="text-sm">
                    {status.retweet}
                </div>
            </div>
            <div className="flex gap-1 items-start">
                <img src={likeIcon} className="w-6 hover:bg-red-300 hover:bg-opacity-40 transition rounded-full p-1"/>
                <div className="text-sm">
                    {status.likes}
                </div>
            </div>
            <div className="flex gap-1 items-start">
                <img src={viewedIcon} className="w-6 hover:bg-blue-twitter hover:bg-opacity-40 transition rounded-full p-1"/>
                <div className="text-sm">
                    {status.viewed}
                </div>
            </div>
            <div className="flex gap-1">
                <img src={bookmarkIcon} alt="" className="w-6 hover:bg-blue-twitter hover:bg-opacity-40 transition rounded-full p-1"/>
                <img src={dowloadIcon} alt="" className="w-6 hover:bg-blue-twitter hover:bg-opacity-40 transition rounded-full p-1"/>
            </div>
        </div>
    );
}
 
export default PostStatus;