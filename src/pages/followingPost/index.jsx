import axios from "axios";
import { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { Link } from "react-router-dom";


const FollowingPost = () => {
  const [followingPost, setFollowingPost] = useState([]);

  const apiKey = import.meta.env.VITE_API_KEY;
  const token = localStorage.getItem("token");

  const getFollowingPost = () => {
    axios
      .get(
        `https://photo-sharing-api-bootcamp.do.dibimbing.id/api/v1/following-post?size=10&page=1`,
        {
          headers: {
            "Content-Type": "application/json",
            apiKey: apiKey,
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setFollowingPost(res.data.data.posts);
      })

      .catch((err) => {
        console.log(err);
      });
  };

  console.log(followingPost);

  useEffect(() => {
    getFollowingPost();
  }, []);

  return (
    <>
      <div>
        {followingPost.map((item, index) => (
          <div key={index}>
            <div className="flex items-center gap-3 p-3">
              <div className="w-8 ">
                <img
                  className="rounded-full"
                  src={item.user.profilePictureUrl}
                  alt=""
                />
              </div>
              <div></div>
              <Link to={`/detailuser/${item.userId}`}>
              <button>
                {item.user.username}
              </button>
              </Link>
            </div>
            <img src={item.imageUrl} alt="" />
            <div className="px-3">
              <div className="text-2xl flex items-center gap-12">
                <div className="flex items-center gap-3">
                  <FaRegHeart />
                  <p>{item.totalLikes}</p>
                </div>
                <div className="flex items-center gap-3">
                  <FaRegComment />
                </div>
              </div>
              <div className="flex gap-2">
              <h1 className="font-semibold">{item.user.username}</h1>
              <h1>{item.caption}</h1>

              </div>
            </div>
          </div>
        ))}
        <div></div>
      </div>
    </>
  );
};

export default FollowingPost;
