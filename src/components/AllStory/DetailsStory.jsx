import { useLoaderData } from "react-router-dom";
import Nav from "../Nav/Nav";
import { FaComment, FaEye } from "react-icons/fa6";
import { FaShareAlt } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";
import {FacebookShareButton} from "react-share";

const DetailsStory = () => {
  const loadedStory = useLoaderData();
  const currentPageUrl= window.location.href
  // console.log('story details',loadedStory);
  const {
    image,
    place,
    title,
    email,
    name,
    photo,
    view,
    comment,
    time,
    story,
  } = loadedStory;
  return (
    <div>
      <Nav />
      {/* component  */}
      <div className="max-w-screen-lg mx-auto">
        <main className="mt-10">
          <div className="mb-4 md:mb-0 w-full mx-auto relative">
            <div className="px-4 lg:px-0">
              <h2 className="text-4xl font-semibold text-gray-800 leading-tight">
                {title}
              </h2>
              <a className="py-2 text-green-700 inline-flex items-center justify-center mb-2">
                {place}
              </a>
            </div>

            <img src={image} className="w-full object-cover lg:rounded" />
          </div>

          <div className="flex mt-4 space-x-2 text-sm dark:text-[#1d4ed8]">
            <button
              type="button"
              className="flex items-center p-1 space-x-1.5 text-xl"
            >
              <FaComment />
              <span>{comment}</span>
            </button>
            <button
              type="button"
              className="flex items-center p-1 space-x-1.5 text-xl"
            >
              <FaEye />
              <span>{view}</span>
            </button>

            <button
              type="button"
              className="flex items-center p-1 space-x-1.5 text-xl"
            >
              <MdAccessTime />
              <span>{time} min to read</span>
            </button>

            <button
              type="button"
              className="flex items-center p-1 space-x-1.5 text-xl"
            >
                      <FacebookShareButton url={currentPageUrl}
                      quote="share this page"
                      hashtag="#story"
                      >
                      <FaShareAlt />
                      
                      </FacebookShareButton>
             
            </button>
          </div>

          <div className="flex flex-col lg:flex-row lg:space-x-12">
            <div className="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">
              <p className="pb-6">{story}</p>
            </div>

            <div className="w-full lg:w-1/4 m-auto mt-12 max-w-screen-sm">
              <div className="p-4 border-t border-b md:border md:rounded">
                <div className="flex py-2">
                  <img
                    src={photo}
                    className="h-10 w-10 rounded-full mr-2 object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-700 text-sm">
                      {" "}
                      {name}
                    </p>
                    <p className="font-semibold text-gray-600 text-xs">
                      {" "}
                      {email}
                    </p>
                  </div>
                </div>

                <button className="px-2 py-1 text-gray-100 bg-green-700 flex w-full items-center justify-center rounded">
                  Follow
                  <i className="bx bx-user-plus ml-2"></i>
                </button>
              </div>
            </div>
          </div>
        </main>
        {/* main ends here  */}

        {/* footer  */}
        <footer className="border-t mt-12 pt-12 pb-32 px-4 lg:px-0">
          <div>
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
              className="h-12 w-12"
              alt="logo"
            />
          </div>
          <div className="flex flex-wrap">
            <div className="w-full lg:w-2/5">
              <p className="text-gray-600 hidden lg:block mt-4 p-0 lg:pr-12">
                Do you like this blog?
              </p>
            </div>

            <div className="w-full mt-6 lg:mt-0 md:w-1/2 lg:w-1/5">
              <h6 className="font-semibold text-gray-700 mb-4">Company</h6>
              <ul>
                <li>
                  {" "}
                  <a href="" className="block text-gray-600 py-2">
                    Team
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="" className="block text-gray-600 py-2">
                    About us
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="" className="block text-gray-600 py-2">
                    Press
                  </a>{" "}
                </li>
              </ul>
            </div>

            <div className="w-full mt-6 lg:mt-0 md:w-1/2 lg:w-1/5">
              <h6 className="font-semibold text-gray-700 mb-4">Content</h6>
              <ul>
                <li>
                  {" "}
                  <a href="" className="block text-gray-600 py-2">
                    Blog
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="" className="block text-gray-600 py-2">
                    Privacy Policy
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="" className="block text-gray-600 py-2">
                    Terms & Conditions
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="" className="block text-gray-600 py-2">
                    Documentation
                  </a>{" "}
                </li>
              </ul>
            </div>

            <div className="w-full mt-6 lg:mt-0 md:w-1/2 lg:w-1/5">
              <h6 className="font-semibold text-gray-700 mb-4">Company</h6>
              <ul>
                <li>
                  {" "}
                  <a href="" className="block text-gray-600 py-2">
                    Team
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="" className="block text-gray-600 py-2">
                    About us
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="" className="block text-gray-600 py-2">
                    Press
                  </a>{" "}
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default DetailsStory;
