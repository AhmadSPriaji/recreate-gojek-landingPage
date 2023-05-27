import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div key={1} >
                <img src="slide1.png" alt="slide1" className="h-screen object-cover w-screen brightness-90 "/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div key={2} >
                <img src="slide2.png" alt="slide2" className="h-screen object-cover w-screen brightness-90"/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div key={3} >
                <img src="slide3.png" alt="slide3" className="h-screen object-cover w-screen brightness-90"/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div key={4} >
                <img src="slide4.png" alt="slide4" className="h-screen object-cover w-screen brightness-90"/>
            </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
