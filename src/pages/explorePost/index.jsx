import axios from "axios";
import { useEffect, useState } from "react";

const ExplorePost = () => {
  const [explorePost, setExplorePost] = useState([]);
  const apiKey = import.meta.env.VITE_API_KEY;
  const token = localStorage.getItem("token")

  const getExplorePost = () => {
    axios
      .get(
        "https://photo-sharing-api-bootcamp.do.dibimbing.id/api/v1/explore-post?size=200&page=1",
        {
          headers: {
            "Content-Type": "application/json",
            apiKey: apiKey,
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setExplorePost(res.data.data.posts);
      });
  };

  console.log('ini data explore post',explorePost)

  useEffect(() => {
    getExplorePost();
  },[]);
  return (
    <>
      <h1>ini explore post</h1>
      <div className="grid grid-cols-3">

      {explorePost.map((item, index) => (
        <div key={index} >
            
            
             <img src={item.imageUrl} alt="" />
                

            
        </div>
      ))}
      </div>
      {/* {explorePost.totalItems} */}

    </>
  );
};
export default ExplorePost;
