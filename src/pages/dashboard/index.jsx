import axios from "axios";
import { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa6";


const Dashboard = () => {
  const name = localStorage.getItem("name");
  const photo = localStorage.getItem("photo");
  const username = localStorage.getItem("username");
  const bio = localStorage.getItem("bio");
  const website = localStorage.getItem("website");
  const userId = localStorage.getItem("userId")
  const token = localStorage.getItem("token")
  const apiKey = import.meta.env.VITE_API_KEY;
  const [post, setPost] = useState([])

  const getPost = () => {
    axios
    .get(`https://photo-sharing-api-bootcamp.do.dibimbing.id/api/v1/users-post/${userId}?size=10&page=1`, 
      {
        headers: {
          "Content-Type": "application/json",
          "apiKey": apiKey,
          "Authorization": `Bearer ${token}`
        }
      }
    )
    .then((res) => {setPost(res.data.data.posts)})
    .catch((err)=> console.log(err))
  }
  console.log('ini post',post)

  useEffect(()=>{
    getPost()
  },[])

  return (
    <>
      <div className="p-3">
        <div className="flex items-center gap-2 mb-3">
          <h1 className="text-[20px]">UbayPix</h1>
          <FaAngleDown className="text-green-500" />
        </div>
        <div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between text-center">
              <div>
                <img src={photo} className="w-[70px] rounded-full" alt="" />
              </div>
              <div className="flex gap-5">
                <div>
                  <h1>453</h1>
                  <p>postingan</p>
                </div>
                <div>
                  <h1>889</h1>
                  <p>pengikut</p>
                </div>
                <div>
                  <h1>759</h1>
                  <p>mengikuti</p>
                </div>
              </div>
            </div>
            <div className="">
              <h1>{name}</h1>
              <p className="text-gray-400">{username}</p>
              <p>{bio}</p>

              <p>
                <a
                  href={website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  {website}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-3">
        {post.map((item, index) => (
          <div key={index}>
            <img src={item.imageUrl} alt="" />
            <h1>{item.caption}</h1>
           
          </div>
        ))}
        </div>
        <div className="grid grid-cols-3">
        
        </div>
      </div>
    </>
  );
};
export default Dashboard;
