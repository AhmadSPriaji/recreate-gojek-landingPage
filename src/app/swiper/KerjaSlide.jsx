import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination } from "swiper";

function Slide(props) {
    return (
        <div className="card rounded-[48px] p-12  relative min-h-[424px] grid content-end w-full max-w-[640px]">
            <img src={props.imgsrc} alt={props.title} className="absolute rounded-[48px] brightness-50 h-full w-full"/>
            <div className="flex flex-col z-10">
              <h3 className="text-white font-bold text-2xl mb-3">{props.title}</h3>
              <div className="flex gap-2">
                <p className="text-white text-lg mb-6 lg:mb-0 lg:w-3/4">{props.sub}</p>
                <div className="w-full lg:w-1/4 flex">
                    <button href="#" className="bg-primary text-center font-semibold text-base text-white px-6 py-3 h-fit rounded-full">Selengkapnya</button>
                </div>
              </div>
            </div>
        </div>
    )
}

export default function App() {
    const swiperRef = useRef();
    var slideView 
    var dot
    if (window.innerWidth < 1024) {
        slideView = 1;
        module = [Pagination];
        dot = true;
    }
    else {
        slideView = 1.9;
        module = [Navigation];
        dot = false;
    }
  return (
    <div className="relative">
        <Swiper 
            loop={true}
            slidesPerView={slideView}
            spaceBetween={0}
            centeredSlides={true}
            modules={module}
            onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
            }}
            className="mySwiper"
        >
            <SwiperSlide>
                <Slide 
                    key={1}
                    imgsrc="kerja1.png"
                    title="Kolaborasi antar budaya"
                    sub="Bisa kerjasama dengan GoTroops dari berbagai negara!"
                />
            </SwiperSlide>
            <SwiperSlide>
                <Slide 
                    key={2}
                    imgsrc="kerja2.png"
                    title="Peduli kesehatan mental"
                    sub="Konseling gratis untukmu dan keluargamu."
                />
            </SwiperSlide>
            <SwiperSlide>
                <Slide 
                    key={3}
                    imgsrc="kerja3.png"
                    title="Asuransi kesehatan buat ayah ibu"
                    sub="Subsidi asuransi kesehatan buat kedua orang tuamu."
                />
            </SwiperSlide>
            <SwiperSlide>
                <Slide 
                    key={3}
                    imgsrc="kerja4.png"
                    title="Bermacam-macam subsidi"
                    sub="Mau beli buku, daftar gym membership, isi pulsa? Gojek bisa kasih subsidi ;)."
                />
            </SwiperSlide>
        </Swiper>
        <div className="z-20 top-1/2 left-4 hidden lg:block lg:absolute">
            <button className="bg-white rounded-full  p-3 w-fit h-fit" onClick={() => swiperRef.current?.slidePrev()} >
                <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="M560.667-240 320-480.667l240.667-240.666L608-674 414.666-480.667 608-287.333 560.667-240Z"/></svg>
            </button>
        </div>
        <div className="z-20 top-1/2 right-4 hidden lg:block lg:absolute">
            <button className="bg-white rounded-full p-3 w-fit h-fit" onClick={() => swiperRef.current?.slideNext()}>
                <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="M375.333-240 328-287.333l193.334-193.334L328-674l47.333-47.333L616-480.667 375.333-240Z"/></svg>
            </button>
        </div>
            
    </div>
  );
}
