import ExploreContent from "./ExploreContent";
import ExploreSide from "./ExploreSide";

const Explore = () => {
    return (  
        <div className="explore flex-1 flex h-screen">
            <ExploreContent/>
            <ExploreSide/>
        </div>
    );
}
 
export default Explore;