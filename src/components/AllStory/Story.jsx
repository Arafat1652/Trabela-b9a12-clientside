import { Link } from "react-router-dom";
import useStory from "../../Hooks/useStory";
import { FaComment, FaEye } from "react-icons/fa6";
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
          <h3 className=" text-2xl text-orange-2 text-center font-play">Story & Share</h3>
        <h3 className="text-4xl mt-4 text-center font-bold font-mont">Tourist Story</h3>
                <p className="lg:w-[650px] text-gray-400 mx-auto  mb-10 text-center mt-3">Read captivating travel stories from fellow adventurers. Get inspired by their journeys and discover new destinations to add to your bucket list.</p>
                <img className="mx-auto mb-10" src="https://roam.qodeinteractive.com/wp-content/plugins/mikado-tours/assets/img/separator.png" alt="" />
          </div>
          <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
            {
                storys.slice(0,4).map(item=><Link key={item._id} to={`/storyDetails/${item._id}`} className="flex flex-col overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-500">
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
                    <span className="flex gap-1 items-center justify-center"><FaComment/>{item.comment}</span>
                    <span className="flex gap-1 items-center justify-center"><FaEye/> {item.view}</span>
                  </div>
                </div>
              </Link>)
            }
          </div>
        </div>
      </section>
      <div className="m-auto text-center">
        <Link to="/allStory" className="btn btn-outline bg-orange-2 text-white rounded-none uppercase text-xl">
          All Tourist Story
        </Link>
      </div>
    </div>
  );
};

export default Story;
