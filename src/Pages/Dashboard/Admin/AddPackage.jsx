import axios from "axios";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";

const AddPackage = () => {
  const {user} = useAuth()

  const handlePackageSubmit=(e)=>{
    e.preventDefault()
    const form = e.target
    const image = form.image.value
    const tour_type = form.tour_type.value
    const trip_title = form.trip_title.value
    const price = form.price.value
    const about_tour = form.about_tour.value
    const tour_plan = form.tour_plan.value
    const package_name = form.package_name.value
    const image_1 = form.image_1.value
    const image_2 = form.image_2.value
    const image_3 = form.image_3.value
    const image_4 = form.image_4.value
    const image_5 = form.image_5.value

    const packageDetails =  {image, tour_type, trip_title, price, about_tour, tour_plan, package_name, image_1, image_2, image_3, image_4, image_5}
         
    // console.table(packageDetails);

    axios.post(`${import.meta.env.VITE_API_URL}/packages`, packageDetails)
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
                    <div className="md:flex-1 md:pr-3">
                      <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                        Tour Type
                      </label>
                      <input
                        className="w-full shadow-inner p-4 border"
                        type="text"
                        name="tour_type"
                        placeholder="Enter your Tour Type"
                      />
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
                        placeholder="About Tour"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:flex mb-8">
                <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
                  <div className="mb-4">
                    <label className="block uppercase tracking-wide text-xs font-bold">
                      Tour Plan
                    </label>
                    <input
                      className="w-full shadow-inner p-4 border"
                      type="text"
                      name="tour_plan"
                      placeholder="Add Tour Plan"
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
              <div className="w-full rounded-lg bg-blue-500 mt-4 text-white text-lg font-semibold">
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
