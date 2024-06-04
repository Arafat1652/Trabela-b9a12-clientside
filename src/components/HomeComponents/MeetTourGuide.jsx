import useTourGuide from "../../Hooks/useTourGuide";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const MeetTourGuide = () => {
  const [guides, isPending] = useTourGuide();
  // console.log("tour guide", guides);


  if(isPending){
    <LoadingSpinner/>
  }

  return (
    <>
      {/* <Helmet>
        <title>My Listings</title>
      </Helmet> */}

      <div className="container mx-auto px-4 sm:px-8">
        <div className="bg-white shadow-md rounded-md overflow-hidden  mx-auto mt-16">
          <div className="bg-gray-100 py-2 px-4">
            <h2 className="text-xl font-semibold text-gray-800">
              Meet Our Guide
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>
                   SL
                  </th>
                  <th>Name</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
               {
                guides.map((item, index)=> <tr key={item._id}>
                    <th>
                     {index+1}
                    </th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{item.email}</div>
                        </div>
                      </div>
                    </td>

                    <th>
                      <button className="btn btn-ghost btn-xs">Details</button>
                    </th>
                  </tr>)
               }


              </tbody>
    
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default MeetTourGuide;
