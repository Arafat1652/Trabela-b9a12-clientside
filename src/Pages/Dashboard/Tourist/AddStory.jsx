import axios from "axios";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";

const AddStory = () => {


  const {user} = useAuth()

      const handleStorySubmit=(e)=>{
        e.preventDefault()
        const form = e.target
        const image = form.image.value
        const place = form.place.value
        const title = form.title.value
        const view = form.view.value
        const comment = form.comment.value
        const time = form.time.value
        const story = form.story.value
        const email = user?.email
        const name = user?.displayName
        const photo = user?.photoURL


        // console.table(image, place, title,time, view, comment, story, email, name, photo)
       const storyData =  {image, place, title,time, view, comment, story, email, name, photo}
      //  console.log(storyData);

        axios.post(`${import.meta.env.VITE_API_URL}/storys`, storyData)
        .then(res=>{
          if(res.data.insertedId){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${user?.displayName} your story is uploaded`,
              showConfirmButton: false,
              timer: 1500
            });
            form.reset()
          }
        })

    }

    // 1. image 
// 2. place
// 3. title
// 4. email
// 5. name
// 6. photo
// 7. view
// 8. comment
// 9. time
// 10. story

  return (
    <div>
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
              <label className="mb-2 ">Image URL</label>
              <input
                type="text"
                className="mt-2 p-4 w-full border-2 rounded-lg "
                placeholder="image"
                name="image"
                required
              />
            </div>
            {/* tour place name*/}
            <div className="w-full mb-4 lg:mt-6">
              <label className=" ">Tour Place Name</label>
              <input
                type="text"
                className="mt-2 p-4 w-full border-2 rounded-lg "
                placeholder="Place Name"
                name="place"
                required
              />
            </div>
          </div>
          {/* second row */}
          <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
            <div className="w-full mb-4 lg:mt-6">
              <label className=" ">Tour Title</label>
              <input
                type="text"
                className="mt-2 p-4 w-full border-2 rounded-lg "
                placeholder="Tour Title"
                name="title"
                required
              />
            </div>
            {/* reading time */}
            <div className="w-full  mb-4 mt-6">
              <label className="mb-2 ">Reading Time</label>
              <input
                type="number"
                className="mt-2 p-4 w-full border-2 rounded-lg "
                placeholder="Reading Time"
                name="time"
                required
              />
            </div>
          </div>
          {/* third row */}
          <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
            {/* view */}
            <div className="w-full  mb-4 mt-6">
              <label className="mb-2 ">View</label>
              <input
                type="number"
                className="mt-2 p-4 w-full border-2 rounded-lg "
                placeholder="View Count"
                name="view"
                required
              />
            </div>
            {/* tour place name*/}
            <div className="w-full mb-4 lg:mt-6">
              <label className=" ">Comment</label>
              <input
                type="number"
                className="mt-2 p-4 w-full border-2 rounded-lg "
                placeholder="Comment"
                name="comment"
                required
              />
            </div>
          </div>
          {/* fourth row */}
          <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
            {/* tour place name*/}
            <div className="w-full mb-4 lg:mt-6">
              <label className=" ">Your Story</label>
              <input
                type="text"
                className="mt-2 p-4 w-full border-2 rounded-lg "
                placeholder="Trip story"
                name="story"
                required
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

export default AddStory;
