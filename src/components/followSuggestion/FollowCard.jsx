const FollowCard = ({profile}) => {
    return (  
        <div className="flex justify-between items-center px-4 py-2 hover:bg-zinc-200 transition">
            <img src={profile.image} className="w-8 h-8 rounded-full"/>
            <div className="flex-1 px-3 py-0">
                <p className="font-bold">{profile.name}</p>
                <p className="text-zinc-500 text-sm">{`@${profile.tag}`}</p>
            </div>
            <button className="text-white font-bold px-4 py-2 text-sm bg-black rounded-full">Follow</button>
        </div>
    );
}
 
export default FollowCard;