import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import { Navigation,Autoplay,Pagination } from 'swiper/modules';
const Banner = () => {

  

  return (
    <div className='max-w-[98%] mx-auto mt-1'>  

      <Swiper modules={[Navigation,Autoplay, Pagination]}
      autoplay={{
        delay: 2000,
      }}
        pagination={{
          clickable: true,
        }}
      loop={true}>
    <SwiperSlide>
  <div className="relative">
    <div className="hero h-[80vh] bg-cover object-center rounded-lg overflow-hidden" style={{
        backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(https://images.unsplash.com/photo-1599074914978-2946b69e5a4a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwYmFuZ2xhZGVzaHxlbnwwfHwwfHx8MA%3D%3D)",
      }}>
      {/* <div className="hero-content lg:mr-60 md:mr-40">
        <div>
          <h1 className="static text-[#a8effa]  md:text-4xl lg:text-6xl text-2xl font-bold">Discover What You Love {''}<span style={{ color: 'red', fontWeight: 'bold' }}>
          <Typewriter
            words={['Unleash your creativity.', 'Craft your masterpiece.', 'Express yourself through art.']}
            loop={false}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span></h1>
        </div>
      </div> */}
    </div>
  </div>
</SwiperSlide>

   <SwiperSlide> <div className="z-0">
          <div className="hero h-[80vh] bg-cover object-center rounded-lg " style={{
          backgroundImage:"linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(https://images.unsplash.com/photo-1558180348-506ab49a5912?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}>
           {/* <div className="hero-content lg:mr-60 md:mr-40">
              <div>
              <h1 className="text-[#a8effa] md:text-4xl lg:text-6xl text-2xl font-bold">Discover What You Love {''}<span style={{ color: 'red', fontWeight: 'bold' }}>
          <Typewriter
            words={['Unleash your creativity.', 'Craft your masterpiece.', 'Express yourself through art.']}
            loop={false}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span></h1>
              
              </div>
            </div> */}
          </div>
      </div></SwiperSlide>

    <SwiperSlide> <div className="z-0">
          <div className="hero h-[80vh] bg-cover object-center rounded-lg " style={{
          backgroundImage:"linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(https://images.unsplash.com/photo-1603976487252-5f1cee35fe6e?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}>
           {/* <div className="hero-content lg:mr-60 md:mr-40">
              <div>
              <h1 className=" text-[#a8effa] md:text-4xl lg:text-6xl text-2xl font-bold">Discover What You Love {''}<span style={{ color: 'red', fontWeight: 'bold' }}>
          <Typewriter
             words={['Unleash your creativity.', 'Craft your masterpiece.', 'Express yourself through art.']}
            loop={false}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span></h1>
              </div>
            </div> */}
          </div>
      </div></SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Banner;