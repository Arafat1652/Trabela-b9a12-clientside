import axios from "axios";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";

const AddinfoForm = () => {
        const {user} = useAuth()

    const handleGuideInfo=e=>{
        e.preventDefault()
        const form = e.target
        const email = user?.email
        const education = form.education.value
        const skill = form.skill.value
        const experience = form.experience.value
        const phone = form.phone.value
        const address = form.address.value
        const age = form.age.value


        const guideInfo =  {email, education, skill, experience, phone, address, age}
         console.log(guideInfo);

         axios.put(`${import.meta.env.VITE_API_URL}/user/${user?.email}`, guideInfo)
        .then(res=>{
          if(res.data.modifiedCount){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${user?.displayName} your Information is Added`,
              showConfirmButton: false,
              timer: 1500
            });
            form.reset()
          }
        console.log(res.data);
        })
    }
    // name
    // photo
    // email
    // education
    // skill
    // experience
    // phone
    // address
    // age 

  return (
    <div>
      <div className="my-24">
        <form onSubmit={handleGuideInfo}>
          <h2 className=" text-3xl text-center mt-1 font-semibold">
            Add Your Information
          </h2>
          {/* first row */}
          <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
            {/* education */}
            <div className="w-full  mb-4 mt-6">
              <label className="mb-2 ">Your Education</label>
              <input
                type="text"
                className="mt-2 p-4 w-full border-2 rounded-lg "
                placeholder="Enter Your Education"
                name="education"
                required
              />
            </div>
            {/* skill*/}
            <div className="w-full mb-4 lg:mt-6">
              <label className=" ">Your Skills</label>
              <input
                type="text"
                className="mt-2 p-4 w-full border-2 rounded-lg "
                placeholder="Enter Your Skills"
                name="skill"
                required
              />
            </div>
          </div>
          {/* second row */}
          <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
            <div className="w-full mb-4 lg:mt-6">
              <label className=" ">Experience</label>
              <input
                type="text"
                className="mt-2 p-4 w-full border-2 rounded-lg "
                placeholder="Enter Your Experience"
                name="experience"
                required
              />
            </div>
            {/* phone */}
            <div className="w-full  mb-4 mt-6">
              <label className="mb-2 ">Phone Number</label>
              <input
                type="number"
                className="mt-2 p-4 w-full border-2 rounded-lg "
                placeholder="Your Phone Number"
                name="phone"
                required
              />
            </div>
          </div>
          {/* third row */}
          <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
            {/*Address */}
            <div className="w-full  mb-4 mt-6">
              <label className="mb-2 ">Your Address</label>
              <input
                type="text"
                className="mt-2 p-4 w-full border-2 rounded-lg "
                placeholder="Address"
                name="address"
                required
              />
            </div>
            {/* tour place name*/}
            <div className="w-full mb-4 lg:mt-6">
              <label className=" ">Your Age</label>
              <input
                type="number"
                className="mt-2 p-4 w-full border-2 rounded-lg "
                placeholder="Enter Your Age"
                name="age"
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

export default AddinfoForm;
