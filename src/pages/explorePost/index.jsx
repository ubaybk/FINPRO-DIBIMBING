import axios from "axios";
import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import ButtonBack from "../../components/buttonback";

const ExplorePost = () => {
  const [explorePost, setExplorePost] = useState([]);
  const apiKey = import.meta.env.VITE_API_KEY;
  const token = localStorage.getItem("token");

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

  console.log("ini data explore post", explorePost);

  useEffect(() => {
    getExplorePost();
  }, []);
  return (
    <>
    <div className="flex items-center py-2 px-2 gap-1">
      <ButtonBack />
      <div className="relative flex items-center flex-grow">
        <IoSearch className="absolute left-2 text-gray-600" />

        <input
          placeholder="Search"
          type="text"
          className="w-full text-white h-8 bg-green-300 rounded-md pl-8"
        />
      </div>

    </div>
      <div className="grid grid-cols-3">
        {explorePost.map((item, index) => (
          <div key={index}>
            <img src={item.imageUrl} alt="" />
          </div>
        ))}
      </div>
      {/* {explorePost.totalItems} */}
    </>
  );
};
export default ExplorePost;
