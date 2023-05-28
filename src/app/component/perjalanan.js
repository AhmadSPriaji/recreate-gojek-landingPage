import NavigationSlide from '../swiper/NavigationSlide'
import React, { useState } from 'react' 

export default function Perjalanan () {
  return(
    <section className="z-20 bg-langit">
      <div className="bg-dark"> 
        <div className="rounded-t-rad py-16 lg:py-32 -mt-16 md:rounded-t-radMd lg:rounded-t-radLg bg-langit">
          <div className="container mx-auto">
            <h2 className="text-dark text-3xl sm:text-4xl lg:text-6xl font-bold text-center mb-16">
              Ikuti perjalanan <br/>
              kami dalam membuat <br/>
              dampak sosial!
            </h2>
            <div className="w-full flex justify-center">
              <button href="#" className="bg-primary text-center font-semibold text-base text-white px-6 py-3 rounded-full">Masuk Newsroom</button>
            </div>
          </div>
        </div>
      </div>
      <NavigationSlide />
      <div className="container mx-auto bg-langit ">
        <div className="mx-auto flex justify-center pb-32">
          <div className="flex justify-center w-1/2">
            <img className="z-20 " src="https://lelogama.go-jek.com/prime/upload/image/General_impact_-_Globe.svg" alt="bumi" />
            <img className="absolute mt-24 w-2/3" src="https://lelogama.go-jek.com/prime/upload/image/general-impact-cloud.svg" alt="awan" />
          </div>
        </div>
      </div>
    </section>
  )
}