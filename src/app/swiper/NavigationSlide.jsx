import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

function Slide(props) {
    return (
        <div>
            <h3 className="text-dark text-2xl lg:text-4xl font-bold text-center mb-4">
              {props.title}
            </h3>
            <p className="text-base lg:text-lg mb-8 font-normal">
                {props.description}
            </p>
        </div>
    )
}

export default function App() {
    const swiperRef = useRef();
  return (
    <div>
        <div className="flex justify-center items-center gap-10">
            <button className="bg-white rounded-full  p-3 w-fit h-fit" onClick={() => swiperRef.current?.slidePrev()} >
                <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="M560.667-240 320-480.667l240.667-240.666L608-674 414.666-480.667 608-287.333 560.667-240Z"/></svg>
            </button>
        <Swiper 
            loop={true}
            modules={[Navigation]} 
            onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
            }}
            className="mySwiper w-[410px]"
        >
            <SwiperSlide>
                <Slide 
                    key={1}
                    title="Indonesia"
                    description="Pada 2019, Gojek berkontribusi hingga US$7,1 triliun bagi ekonomi Indonesia, membantu pembukaan lapangan kerja, peningkatan pendapatan dan kualitas hidup."
                />
            </SwiperSlide>
            <SwiperSlide>
                <Slide 
                    key={2}
                    title="Singapura"
                    description="Perkembangan Gojek sangat pesat di Singapura, 30 juta order di tahun pertama kami hadir di sini."
                />
            </SwiperSlide>
            <SwiperSlide>
                <Slide 
                    key={3}
                    title="Vietnam"
                    description="Saat ini, Gojek memiliki lebih dari 80.000 Mitra Usaha dan 150.000 Mitra Driver di Vietnam yang selalu siap membantu para pelanggan."
                />
            </SwiperSlide>
            <SwiperSlide>
                <Slide 
                    key={4}
                    title="Thailand"
                    description="Dalam 1 tahun aja, kami menyelesaikan 20 juta order. Gojek melaju pesat di Thailand!"
                />
            </SwiperSlide>

        </Swiper>
            <button className="bg-white rounded-full p-3 w-fit h-fit" onClick={() => swiperRef.current?.slideNext()}>
                <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="M375.333-240 328-287.333l193.334-193.334L328-674l47.333-47.333L616-480.667 375.333-240Z"/></svg>
            </button>

            
        </div>
        <div className="w-full flex justify-center">
              <button href="#" className="bg-primary text-center font-semibold text-base text-white px-6 py-3 rounded-full">Masuk Newsroom</button>
        </div>
    </div>
  );
}
