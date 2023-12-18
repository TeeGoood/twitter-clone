import verifiedIcon from "/src/assets/icons/verified.svg";
import moreIcon from "/src/assets/icons/gray-more.svg";
import PostStatus from "./PostStatus";

const PostCard = ({post}) => {
    function calculateTime(time){
        if(time < 60) {
            return time + 'm';
        }
        if(time < 1440) {
            return Math.round(time/60) + 'h';
        }
        if(time < 10080) {
            return Math.round(time/1440) + 'd';
        }
        else  {
            return Math.round(time/10080) + 'w';
        }
    }

    return (  
        <div className="post flex items-start p-4 gap-4 border-x-0 border-zinc-200 border hover:bg-zinc-200 transition">
            <div className="">
                <img src={post.user.profilePic} alt="profile-pic" className="w-10 h-10 rounded-full"/>
            </div>
            <div className="post-content flex-1">
                <div className="profile-info-row flex justify-between items-start">
                    <div className="profile-info flex gap-1">
                        <span className="name font-bold">
                            {post.user.name}
                        </span>
                        <img src={verifiedIcon} alt="verified-icon" />
                        <span className="tag text-zinc-500">
                            {"@"+post.user.tag}
                        </span>
                        <span className="time text-zinc-500">
                            {"· " + calculateTime(post.content.time)}
                        </span>
                    </div>
                    <button className="hover:bg-zinc-300 transition rounded-full p-1">
                        <img src={moreIcon}  className="w-5"/>
                    </button>
                </div>
                <div className="py-4">
                    {post.content.text}
                </div>
                <img src={post.content.image} alt="post-pic" className="rounded-2xl mt-2"/>
                <PostStatus status={post.content.status} />
            </div>
        </div>
    );
}
 
export default PostCard;