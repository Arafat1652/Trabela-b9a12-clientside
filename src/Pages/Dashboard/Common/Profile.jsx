import useAuth from "../../../Hooks/useAuth";

const Profile = () => {
  const { user } = useAuth();

    const handleStorySubmit=(e)=>{
        e.preventDefault()
    }
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
       {/* story form */}
       <div className="my-24">
            <form onSubmit={handleStorySubmit}>
              <h2 className=" text-3xl text-center mt-1 font-semibold">
                Upload Your Story
              </h2>
              {/* first row */}
              <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                {/* image */}
                <div className="w-full  mb-4 mt-6">
                  <label  className="mb-2 ">
                    Image URL
                  </label>
                  <input
                    type="text"
                    className="mt-2 p-4 w-full border-2 rounded-lg "
                    placeholder="image"
                    name="image"
                  />
                </div>
                 {/* tour place name*/}
                <div className="w-full mb-4 lg:mt-6">
                  <label className=" ">
                    Tour Place Name
                  </label>
                  <input
                    type="text"
                    className="mt-2 p-4 w-full border-2 rounded-lg "
                    placeholder="Place Name"
                    name="place"
                  />
                </div>
              </div>
                {/* second row */}
              <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
              <div className="w-full mb-4 lg:mt-6">
                  <label className=" ">
                    Tour Title
                  </label>
                  <input
                    type="text"
                    className="mt-2 p-4 w-full border-2 rounded-lg "
                    placeholder="Tour Title"
                    name="title"
                  />
                </div>
                {/* date */}
                <div className="w-full lg:mt-6">
                  <h3 className="mb-2">Tour Date</h3>
                  <input
                    type="date"
                    className="text-grey p-4 w-full border-2 rounded-lg "
                  />
                </div>
              </div>
                {/* third row */}
                <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                {/* image */}
                <div className="w-full  mb-4 mt-6">
                  <label  className="mb-2 ">
                    Image URL
                  </label>
                  <input
                    type="text"
                    className="mt-2 p-4 w-full border-2 rounded-lg "
                    placeholder="image"
                    name="image"
                  />
                </div>
                 {/* tour place name*/}
                <div className="w-full mb-4 lg:mt-6">
                  <label className=" ">
                    Tour Place Name
                  </label>
                  <input
                    type="text"
                    className="mt-2 p-4 w-full border-2 rounded-lg "
                    placeholder="Place Name"
                    name="place"
                  />
                </div>
              </div>
              {/* fourth row */}
              <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                {/* image */}
                <div className="w-full  mb-4 mt-6">
                  <label  className="mb-2 ">
                    Image URL
                  </label>
                  <input
                    type="text"
                    className="mt-2 p-4 w-full border-2 rounded-lg "
                    placeholder="image"
                    name="image"
                  />
                </div>
                 {/* tour place name*/}
                <div className="w-full mb-4 lg:mt-6">
                  <label className=" ">
                    Tour Place Name
                  </label>
                  <input
                    type="text"
                    className="mt-2 p-4 w-full border-2 rounded-lg "
                    placeholder="Place Name"
                    name="place"
                  />
                </div>
              </div>


              <div className="w-full rounded-lg bg-blue-500 mt-4 text-white text-lg font-semibold">
                <button type="submit" className="w-full p-4">
                  Submit
                </button>
              </div>
            </form>
          </div>
    </div>
  );
};

export default Profile;
