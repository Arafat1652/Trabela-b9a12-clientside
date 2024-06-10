import axios from "axios";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const AddPackage = () => {
  const {user} = useAuth()
  const axiosSecure = useAxiosSecure()

  const handlePackageSubmit=(e)=>{
    e.preventDefault()
    const form = e.target
    const image = form.image.value
    const tour_type = form.tour_type.value
    const trip_title = form.trip_title.value
    const price = form.price.value
    const include = form.include.value
    const about_tour = form.about_tour.value
    const package_name = form.package_name.value
    const image_1 = form.image_1.value
    const image_2 = form.image_2.value
    const image_3 = form.image_3.value
    const image_4 = form.image_4.value
    const image_5 = form.image_5.value
    const day_1 = form.day_1.value
    const day_2 = form.day_2.value
    const day_3 = form.day_3.value
    const destination = form.destination.value


    const packageDetails =  {image, tour_type, trip_title, price,include, about_tour,package_name, image_1, image_2, image_3, image_4, image_5, day_1, day_2, day_3, destination}
         
    console.table(packageDetails);

    axiosSecure.post(`/packages`, packageDetails)
    .then(res=>{
      if(res.data.insertedId){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user?.displayName} your package is added succefully`,
          showConfirmButton: false,
          timer: 1500
        });
        form.reset()
      }
    })

  }

  return (
    <div>
      <div className="bg-cream text-charcoal min-h-screen font-sans leading-normal overflow-x-hidden lg:overflow-auto">
        <main className="flex-1 md:p-0 lg:pt-8 lg:px-8 md:ml-24 flex flex-col">
          <section className="bg-cream-lighter p-4 shadow">
            <div className="md:flex">
              <h2 className="md:w-1/3 uppercase tracking-wide text-sm sm:text-lg mb-6">
                ADD YOUR PACKAGE
              </h2>
            </div>
            <form onSubmit={handlePackageSubmit}>
              <div className="md:flex mb-8">
                <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
                  <div className="mb-4">
                    <label className="block uppercase tracking-wide text-xs font-bold">
                      Image
                    </label>
                    <input
                      className="w-full shadow-inner p-4 border"
                      type="text"
                      name="image"
                      placeholder="Image URL"
                    />
                  </div>
                 
                  <div className="md:flex mb-4">
                     {/* tour type category */}
                    <div className="md:flex-1 md:pr-3 ">
              <label className="block uppercase  text-charcoal-darker text-xs font-bold">
                <span className="label-text">Tour Type</span>
              </label>
              <div className="input-group">
                <select
                  name="tour_type"
                  className="select select-bordered w-full"
                >
                  
                  <option>hiking</option>
                  <option>island</option>
                  <option>historical</option>
                  <option>cultural</option>
                  <option>beach</option>
                </select>
              </div>
            </div>
                    <div className="md:flex-1 md:pl-3">
                      <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                        Trip Title
                      </label>
                      <input
                        className="w-full shadow-inner p-4 border"
                        type="text"
                        name="trip_title"
                        placeholder="Trip Title"
                      />
                    </div>
                  </div>
                  <div className="md:flex mb-4">
                    <div className="md:flex-1 md:pr-3">
                      <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                        Price
                      </label>
                      <input
                        className="w-full shadow-inner p-4 border"
                        type="number"
                        name="price"
                        placeholder="Price"
                        min={1}
                      />
                    </div>
                    <div className="md:flex-1 md:pl-3">
                      <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                        about tour
                      </label>
                      <input
                        className="w-full shadow-inner p-4 border"
                        type="text"
                        name="about_tour"
                        placeholder="Overview of this trip"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:flex mb-8">
                <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
                  <div className="mb-4">
                    <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                      Include
                    </label>
                    <input
                      className="w-full shadow-inner p-4 border"
                      type="text"
                      name="include"
                      placeholder="what will include in this tour?"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                      Package name
                    </label>
                    <input
                      className="w-full shadow-inner p-4 border"
                      type="text"
                      name="package_name"
                      placeholder="Second Image"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                     First Tour Place Image 
                    </label>
                    <input
                      className="w-full shadow-inner p-4 border"
                      type="text"
                      name="image_1"
                      placeholder="First Place"
                    />
                  </div>
                </div>
              </div>
              {/* images */}
              <div className="md:flex">
                <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
                  <div className="md:flex mb-4">
                    <div className="md:flex-1 md:pr-3">
                      <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                      second Tour Place Image 
                      </label>
                      <div className="w-full flex">
                        <input
                          className="flex-1 shadow-inner p-4 border"
                          type="text"
                          name="image_2"
                          placeholder="Second Image"
                        />
                      </div>
                    </div>
                    <div className="md:flex-1 md:pl-3 mt-2 md:mt-0">
                      <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                      third Tour Place Image 
                      </label>
                      <div className="w-full flex">
                        <input
                          className="flex-1 shadow-inner p-4 border"
                          type="text"
                          name="image_3"
                          placeholder="Third Image"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="md:flex mb-4">
                    <div className="md:flex-1 md:pr-3">
                      <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                      fourth Tour Place Image 
                      </label>
                      <div className="w-full flex">
                        <input
                          className="flex-1 shadow-inner p-4 border"
                          type="text"
                          name="image_4"
                          placeholder="Fourth Place"
                        />
                      </div>
                    </div>
                    <div className="md:flex-1 md:pl-3 mt-2 md:mt-0">
                      <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                      fifth Tour Place Image 
                      </label>
                      <div className="w-full flex">
                        <input
                          className="flex-1 shadow-inner p-4 border"
                          type="text"
                          name="image_5"
                          placeholder="Fifth Place"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* days */}
              <div className="md:flex">
                <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
                  <div className="md:flex mb-4">
                    <div className="md:flex-1 md:pr-3">
                      <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                      Day 1
                      </label>
                      <div className="w-full flex">
                        <input
                          className="flex-1 shadow-inner p-4 border"
                          type="text"
                          name="day_1"
                          placeholder="what your first day plan?"
                        />
                      </div>
                    </div>
                    <div className="md:flex-1 md:pl-3 mt-2 md:mt-0">
                      <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                      Day 2
                      </label>
                      <div className="w-full flex">
                        <input
                          className="flex-1 shadow-inner p-4 border"
                          type="text"
                          name="day_2"
                          placeholder="what yoursecond day plan?"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="md:flex mb-4">
                    <div className="md:flex-1 md:pr-3">
                      <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                      Day 3
                      </label>
                      <div className="w-full flex">
                        <input
                          className="flex-1 shadow-inner p-4 border"
                          type="text"
                          name="day_3"
                          placeholder="what your third day plan?"
                        />
                      </div>
                    </div>
                    <div className="md:flex-1 md:pl-3 mt-2 md:mt-0">
                      <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                      Destination
                      </label>
                      <div className="w-full flex">
                        <input
                          className="flex-1 shadow-inner p-4 border"
                          type="text"
                          name="destination"
                          placeholder="Tour Destination"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full rounded-lg bg-orange-2 mt-4 text-white text-lg font-semibold">
            <button type="submit" className="w-full p-4">
              ADD
            </button>
          </div>
            </form>
          </section>
        </main>
      </div>
    </div>
  );
};

export default AddPackage;
