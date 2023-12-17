import settingIcon from "/src/assets/icons/setting.svg";

const SelectContent = () => {
    return (  
        <div className="select-content flex items-center border-b border-zinc-200 mb-4">
            <div className="flex-1 hover:bg-zinc-200 transition flex justify-center items-center p-4 font-semibold">For you</div>
            <div className="flex-1 hover:bg-zinc-200 transition flex justify-center items-center p-4 font-semibold text-zinc-400">Following</div>
            <img src={settingIcon} className="p-3 hover:bg-zinc-200 transition rounded-full mx-2" />
        </div>
    );
}
 
export default SelectContent;