import { useState } from "react";
import profilePic from "/src/assets/image/profile-pic.webp";
import profilePic2 from "/src/assets/image/profile-pic2.jpg";
import profilePic3 from "/src/assets/image/profile-pic3.jpg";
import postPic from "/src/assets/image/post-pic.avif";
import postPic2 from "/src/assets/image/post-pic2.avif";
import postPic3 from "/src/assets/image/post-pic3.avif";
import PostCard from "./PostCard";

const PostCardList = () => {
    const [posts, setPost] = useState([
        {
            user : {
                name: 'TEE',
                tag:'tee',
                profilePic : profilePic, 
            },
            
            content : {
                image : postPic,
                time : 120,
                text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga labore impedit provident magnam obcaecati quod similique adipisci laboriosam at est beatae, id quisquam tenetur. Magni soluta suscipit pariatur assumenda facere.",
                status : {
                    comments : 36,
                    retweet : 4,
                    likes : 213,
                    viewed : 74
                }
            }
        },
        {
            user : {
                name: 'K',
                tag:'k',
                profilePic : profilePic2, 
            },
            
            content : {
                image : postPic2,
                time : 20,
                text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga labore impedit provident magnam obcaecati quod similique adipisci laboriosam at est beatae, id quisquam tenetur. Magni soluta suscipit pariatur assumenda facere.",
                status : {
                    comments : 36,
                    retweet : 4,
                    likes : 213,
                    viewed : 74
                }
            }
        },
        {
            user : {
                name: 'PUTT',
                tag:'putt',
                profilePic : profilePic3, 
            },
            
            content : {
                image : postPic3,
                time : 2000,
                text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga labore impedit provident magnam obcaecati quod similique adipisci laboriosam at est beatae, id quisquam tenetur. Magni soluta suscipit pariatur assumenda facere.",
                status : {
                    comments : 36,
                    retweet : 4,
                    likes : 213,
                    viewed : 74
                }
            }
        },
    ]);
    
    return (  
        <div>
            {
                posts.map((post) => <PostCard post={post} key={post.content.text}/>)
            }
        </div>
    );
}
 
export default PostCardList;