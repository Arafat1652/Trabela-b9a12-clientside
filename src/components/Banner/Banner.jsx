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
    <div className="hero h-[80vh] bg-cover object-center overflow-hidden" style={{
        backgroundImage: "url(https://plus.unsplash.com/premium_photo-1673254849270-b092fe811657?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      }}>
      
      <img src="https://roam.qodeinteractive.com/wp-content/uploads/2017/08/home-11-slider-image-1a.png" alt=""  />
    </div>
  </div>
</SwiperSlide>

   <SwiperSlide> <div className="z-0">
          <div className="hero h-[80vh] bg-cover object-center  " style={{
          backgroundImage:" url(https://images.pexels.com/photos/13364693/pexels-photo-13364693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
        }}>
          <img src="https://roam.qodeinteractive.com/wp-content/uploads/2017/08/h5-slide-3-title.png" alt=""  />
           
          </div>
      </div></SwiperSlide>

    <SwiperSlide> <div className="z-0">
          <div className="hero h-[80vh] bg-cover object-center  " style={{
          backgroundImage:"url(https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?q=80&w=2338&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}>
          <img src="https://roam.qodeinteractive.com/wp-content/uploads/2017/08/home-5-slider-graphic.png" alt=""  />

          </div>
      </div></SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Banner;