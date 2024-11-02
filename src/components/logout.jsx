import { FaCheckCircle } from "react-icons/fa";
const Logout = () => {
  const photoProfile = localStorage.getItem("photo");
  const username = localStorage.getItem("username");
  return (
    <>
      <div className="bg-green-200 p-5 fixed bottom-0 z-50 left-0 right-0 animate-slide-up">
        <div>
          <div className="bg-green-500 p-2 rounded-md flex items-center text-white justify-between ">
            <div className="flex items-center gap-3">
            <img
              className="w-10 h-10 rounded-full"
              src={photoProfile}
              alt={username}
            />
            <h1>{username}</h1>

            </div>
            <FaCheckCircle className="text-[25px]" />
          </div>
          <div className="text-center font-bold text-[30px]">
            <h1 className="text-red-600">LOG OUT</h1>
          </div>
        </div>
      </div>
    </>
  );
};
export default Logout;
