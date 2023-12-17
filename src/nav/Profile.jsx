import more from "/src/assets/icons/more.svg";
import profile from "/src/assets/image/profile-pic.webp";

const Profile = () => {
    return (  
        <div className="transition profile w-full flex justify-between items-center gap-3 p-2 hover:bg-zinc-200 rounded-full mt-2">
            <img src={profile} alt="profile-pic" className="w-8 h-8"/>
            <div className="info flex-1">
                <div className="font-bold">TEE</div>
                <div>@tee</div>
            </div>
            <img src={more} alt="more-icon" />
        </div>
    );
}
 
export default Profile;