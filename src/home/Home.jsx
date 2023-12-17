import HomeContent from "./HomeContent";
import HomeSide from "./HomeSide";

const Home = () => {
    return (  
        <div className="home flex-1 flex h-screen">
            <HomeContent/>
            <HomeSide/>
        </div>
    );
}
 
export default Home;