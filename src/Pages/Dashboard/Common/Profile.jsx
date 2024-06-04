import useAuth from "../../../Hooks/useAuth";
import AddStory from "../Tourist/AddStory";

const Profile = () => {
  const { user } = useAuth();

  return (
    <div>
      <div className="mt-24 flex flex-wrap items-center  justify-center  ">
        <div className="container lg:w-2/6 xl:w-2/7 sm:w-full md:w-2/3 bg-white  shadow-lg    transform   duration-200 easy-in-out">
          <div className=" h-32 overflow-hidden">
            <img
              className="w-full"
              src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
              alt=""
            />
          </div>
          <div className="flex justify-center px-5  -mt-12">
            <img
              className="h-32 w-32 bg-white p-2 rounded-full   "
              src={user?.photoURL}
              alt=""
            />
          </div>
          <div className=" ">
            <div className="text-center px-14">
              <h2 className="text-gray-800 text-3xl font-bold">
                {user?.displayName}
              </h2>
              <a className="text-gray-400 mt-2 hover:text-blue-500">
                {user?.email}
              </a>
            </div>
            <hr className="mt-6" />
          </div>
         
        </div>
      </div>
        <AddStory/>
    </div>
  );
};

export default Profile;

