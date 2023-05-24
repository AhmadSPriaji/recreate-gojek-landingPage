import React, { Component } from 'react';
import Slider from 'react-slick';

class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
        <Slider {...settings} className="px-8 flex justify-center items-start bg-transparent text-dark flex-wrap">
          <div className="flex flex-col justify-center p-8">
                  <img src="bapak-gojek.svg" alt="icon1" className="w-40 md:w-48 lg:w-52 self-center flex justify-center mb-2 lg:mb-5"/>
                  <h3 className="text-center font-semibold lg:font-bold text-lg lg:text-2xl mb-1 lg:mb-3">Fortune Top 20</h3>
                  <p className="text-center text-sm lg:text-base font-normal">Satu-satunya perusahaan di Asia Tenggara yang dua kali berada di daftar Perusahaan Pengubah Dunia versi majalah Fortune</p>
                </div>
                <div className="flex flex-col justify-center p-8">
                  <img src="ibu-gendut.svg" alt="icon1" className="w-40 md:w-48 lg:w-52 self-center flex justify-center mb-2 lg:mb-5"/>
                  <h3 className="text-center font-semibold lg:font-bold text-lg lg:text-2xl mb-1 lg:mb-3">Berkontribusi lebih dari $7.1 triliun</h3>
                  <p className="text-center text-sm lg:text-base font-normal">Penggerak roda perekonomian Indonesia</p>
                </div>
                <div className="flex flex-col justify-center p-8">
                  <img src="pak-ndut.svg" alt="icon1" className="w-40 md:w-48 lg:w-52 self-center flex justify-center mb-2 lg:mb-5"/>
                  <h3 className="text-center font-semibold lg:font-bold text-lg lg:text-2xl mb-1 lg:mb-3">Jaket hijau, pergerakan juga hijau</h3>
                  <p className="text-center text-sm lg:text-base font-normal">Gojek mengurangi pemakaian plastik hingga 11.3 ton sejak Oktober 2020</p>
                </div>
                <div className="flex flex-col justify-center p-8">
                  <img src="ibu-jualan.svg" alt="icon1" className="w-40 md:w-48 lg:w-52 self-center flex justify-center mb-2 lg:mb-5"/>
                  <h3 className="text-center font-semibold lg:font-bold text-lg lg:text-2xl mb-1 lg:mb-3">Tumbuh 80% sejak pandemi</h3>
                  <p className="text-center text-sm lg:text-base font-normal">Mitra Food merchants naik 80% sejak pandemi berkat solusi digitalisasi Gojek untuk UMKM.</p>
                </div>
        </Slider>
    );
  }
}

export default Carousel;