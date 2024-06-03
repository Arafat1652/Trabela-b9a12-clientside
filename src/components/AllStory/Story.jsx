import { Link } from "react-router-dom";
import useStory from "../../Hooks/useStory";
import { FaEye } from "react-icons/fa6";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const Story = () => {
  const [storys, isPending] = useStory();
//   console.log("storys", storys);
  if(isPending){
    return <LoadingSpinner/>
  }
  return (
    <div >
      <section className="py-6 sm:py-12 ">
        <div className="container p-6 mx-auto space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold"> Tourist Story</h2>
            <p className="font-serif text-sm text-gray-400">
              Qualisque erroribus usu at, duo te agam soluta mucius.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
            {
                storys.map(item=><Link key={item._id} to={`/storyDetails/${item._id}`} className="flex flex-col bg-gray-200">
                <a
                  rel="noopener noreferrer"
                  aria-label="Te nulla oportere reprimique his dolorum"
                >
                  <img
                    alt=""
                    className="object-cover w-full h-52 bg-gray-500"
                    src={item.image}
                  />
                </a>
                <div className="flex flex-col flex-1 p-6">
                  <a
                    rel="noopener noreferrer"

                    aria-label="Te nulla oportere reprimique his dolorum"
                  ></a>
                  <a
                    rel="noopener noreferrer"

                    className="text-xs tracking-wider uppercase hover:underline text-violet-400"
                  >
                    {item.place}
                  </a>
                  <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                    {item.title}
                  </h3>
                  <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-400">
                    <span>{item.date}</span>
                    <span className="flex gap-1 items-center justify-center"><FaEye/> {item.view}</span>
                  </div>
                </div>
              </Link>)
            }
          </div>
        </div>
      </section>
      <div className="m-auto text-center">
        <Link to="/allPackage" className="btn btn-outline">
          All Packages
        </Link>
      </div>
    </div>
  );
};

export default Story;
