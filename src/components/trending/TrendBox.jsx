import TrendList from "./TrendList";

const TrendBox = () => {
    return (  
        <div className="bg-zinc-100 rounded-xl mt-10 pt-3 overflow-hidden">
            <h1 className="font-bold text-xl mb-1 mx-4">Trends for you</h1>
            <TrendList />
        </div>
    );
}
 
export default TrendBox;