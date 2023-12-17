const TrendCard = ({hastag}) => {

    function calculatePosts(posts){
        if(posts < 1000){
            return posts;
        }
        if(posts < 10000){
            return Math.round(posts/1000) + ',' + posts%1000;
        }
        if(posts < 100000){
            return posts/1000 + 'k';
        }
        if(posts < 1000000) {
            return Math.round(posts/1000) + 'k';
        }
        else {
            return Math.round(posts/1000000) + 'M';
        } 
    }

    return (  
        <div className="py-3 px-6 hover:bg-zinc-200 transition ">
            <div>
                <p className="font-bold ">
                    {"#" + hastag.name}
                </p>
                <p className="text-sm text-zinc-600">
                    {calculatePosts(hastag.posts) + " posts"}
                </p>
            </div>
        </div>
    );
}
 
export default TrendCard;