import { IoHomeSharp } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { IoAddCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Footer = () => {
  const photoProfile = localStorage.getItem("photo");
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-green-500">
      <div className="flex justify-between items-center text-2xl text-white p-4">
        <Link to={'/followingpost'}>
          <IoHomeSharp />
        </Link>
        <IoSearch />
        <IoAddCircleOutline />
        <Link to={'/dashboard'}>
          <div className="w-7">
            <img className="border-2 border-white rounded-full" src={photoProfile} alt="" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
