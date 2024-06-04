import { Link } from "react-router-dom";
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
                  <th>Image</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Action</th>
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
                              src={item.photo}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <th>{item.name}</th>
                    <th>{item.email}</th>
                    <th>
                      <Link to={`/guideDetails/${item._id}`} className="btn btn-sm btn-primary">Details</Link>
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
