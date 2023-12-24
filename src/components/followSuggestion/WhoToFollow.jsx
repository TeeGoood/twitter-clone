import FollowCard from "./FollowCard";
import profilePic from "/src/assets/image/profile-pic.webp";
import profilePic2 from "/src/assets/image/profile-pic2.jpg";
import profilePic3 from "/src/assets/image/profile-pic3.jpg";

const WhoToFollow = () => {
    return (  
        <div className="bg-zinc-100 rounded-xl mt-10 pt-3 overflow-hidden">
            <h1 className="font-bold text-xl mb-1 mx-4">Who to follow</h1>
            {[
                {
                    name  : "TEE",
                    tag   : "tee",
                    image : profilePic
                },
                {
                    name  : "K",
                    tag   : "k",
                    image : profilePic2
                },
                {
                    name  : "PUTT",
                    tag   : "putt",
                    image : profilePic3
                },
                {
                    name  : "TEE",
                    tag   : "tee",
                    image : profilePic
                },
                {
                    name  : "K",
                    tag   : "k",
                    image : profilePic2
                },
                {
                    name  : "PUTT",
                    tag   : "putt",
                    image : profilePic3
                },
                
            ].map((profile, id) => (
                id < 3 && <FollowCard profile={profile} />
            ))
            }
        </div>
    );
}
 
export default WhoToFollow;