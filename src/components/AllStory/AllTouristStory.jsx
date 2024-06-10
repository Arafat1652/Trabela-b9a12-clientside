import { Link } from "react-router-dom";
import useStory from "../../Hooks/useStory";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { FaComment, FaEye } from "react-icons/fa";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";

const AllTouristStory = () => {
    const [storys, isPending] = useStory()

    if(isPending){
        return <LoadingSpinner/>
    }

  return (
   <>
   <Nav/>
    <div className="container p-6 mx-auto gap-8 my-10">
      <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
        {storys.map((item) => (
          <Link
            key={item._id}
            to={`/storyDetails/${item._id}`}
            className="flex flex-col bg-gray-200"
          >
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
                <span className="flex gap-1 items-center justify-center">
                  <FaComment />
                  {item.comment}
                </span>
                <span className="flex gap-1 items-center justify-center">
                  <FaEye /> {item.view}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
    <Footer/>
   </>
  );
};

export default AllTouristStory;
