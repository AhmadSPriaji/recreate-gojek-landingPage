"use client";
import React from 'react'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Hero from './component/hero'
import Kenalin from './component/kenalin'
import Skala from './component/skala'
import Carousell from './component/carousell'
import Tumbuh from './component/tumbuh'
import Kerja from './component/kerja'
import Membangun from './component/membangun'
import Loyalti from './component/loyalti'
import Perjalanan from './component/perjalanan'
import Belum from './component/belum'
import Footer from './component/footer'
import { useState } from 'react'



import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const inter = Inter({ subsets: ['latin'] })

function NavList({style}) {
  const [isListOpen1, setIsListOpen1] = useState(false);
  const [isListOpen2, setIsListOpen2] = useState(false);
  return (
    <ul className={`${style} px-8 lg:px-0`}>
      <li className="nav-list"><a href="#">Beranda</a></li>
      <li className="nav-list relative">
        <div className="flex gap-4 items-center" onClick={() => setIsListOpen1((prev) => !prev)} >
          <a href="#">Gabung jadi Mitra</a>
          <button className='flex'>
            <span className={isListOpen1 ? 'arrow-down rotate-[225deg]' : 'arrow-down rotate-45'}></span>
          </button>
        </div>
        <div className={`transition duration-300 ease-in-out ${isListOpen1 ? 'lg:translate-y-6' : '-translate-y-3'}`}>
          <div className={`text-base lg:absolute font-normal transition-all duration-300 ease-in-out ${isListOpen1? 'visible opacity-100' : ' opacity-0 invisible h-0'} `}>
            <ul className={`space-y-4 py-8 px-6 w-60 bg-dark rounded-2xl`}>
              <li><a href="#" className="">Mitra Driver</a></li>
              <li><a href="#" className="">Mitra Usaha</a></li>
            </ul>
          </div>
        </div>
      </li>
      <li className="nav-list"><a href="#">Karir</a></li>
      <li className="nav-list">
        <div className="flex gap-4 items-center" onClick={() => setIsListOpen2((prev) => !prev)}>
          <a href="#">Perusahaan</a>
          <button className='flex'>
            <span className={isListOpen2 ? 'arrow-down rotate-[225deg]' : 'arrow-down rotate-45'}></span>
          </button>
        </div>
        <div className={`transition duration-300 ease-in-out ${isListOpen2 ? 'lg:translate-y-4' : '-translate-y-3'}`}>
          <div className={`text-base lg:absolute font-normal transition-all duration-300 ease-in-out ${isListOpen2? 'visible opacity-100' : ' opacity-0 invisible h-0'} `}>
            <ul className={`space-y-4 py-8 px-6 w-60 bg-dark rounded-2xl`}>
            <li><a href="#" className="">Tentang</a></li>
            <li><a href="#" className="">Newsroom</a></li>
            <li><a href="#" className="">Aman</a></li>
            <li><a href="#" className="">Sustainability</a></li>
            </ul>
          </div>
        </div>
      </li>
      <li className="nav-list"><a href="#">Produk</a></li>
      <li className="nav-list"><a href="#">Blog</a></li>
      <li className="nav-list"><a href="#">Bantuan</a></li>
    </ul>
  )
}

export default function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isBgChange, setIsBgChange] = useState(false);
  const [isShowNav, setIsShowNav] = useState(true);
  const changeNavbarBg = () => {
    if (window.scrollY > 0) {
      setIsBgChange(1);
    } else {
      setIsBgChange(0);
    }
  };
  var prevScrollpos = window.pageYOffset;
  window.onscroll =  function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      setIsShowNav(true);
    } else {
      setIsShowNav(false);
    }
    prevScrollpos = currentScrollPos;
  }

  if (typeof window !== 'undefined') {
    console.log('You are on the browser'); 
    window.addEventListener('scroll', changeNavbarBg);
  } else {
    console.log('You are on the server');
  }
  return (
    <main className={styles.main}>
      <nav className={`navbar ${isBgChange ? 'bg-dark' : 'bg-transparent'} ${isShowNav ? 'top-0 ' : '-translate-y-16 lg:-translate-y-24'}`}>
        <div className="container mx-auto">
          <div className="flex items-center justify-between relative px-8 gap-16">
            <div className="text-white">
              <a href="#" className="">
                <img src="https://lelogama.go-jek.com/prime/upload/gojek-horizontal-logo-white.svg" 
                alt="Gojek" className="w-24"/>
              </a>
            </div>
            <div className='flex gap-16'>
              <div className="mobile-menu flex lg:hidden">
                <button type="button" className="block lg:hidden" onClick={() => setIsNavOpen((prev) => !prev)}>
                  <span className={isNavOpen ? "hamburger-line rotate-45 origin-top-left translate-y-[1.5px]" : "hamburger-line"}></span>
                  <span className={isNavOpen ? "hamburger-line scale-0" : "hamburger-line"}></span>
                  <span className={isNavOpen ? "hamburger-line -rotate-45 origin-bottom-left -translate-y-[1.5px]" : "hamburger-line"}></span>
                </button>
              </div>
              <NavList style="desktop-menu hidden lg:flex lg:gap-10 lg:py-0 lg:text-base lg:font-semibold" />
              <div className="hidden lg:flex gap-2 items-center">
                <img className="w-6 h-6 invert opacity-50" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Ic_translate_48px.svg/1024px-Ic_translate_48px.svg.png" alt="translete" />
                  <button className="flex items-center gap-2" onClick={() => setIsLangOpen((prev) => !prev)}>
                    <p className='text-white text-base font-semibold text-center'>ID</p>
                    <span className={isLangOpen ? 'arrow-down rotate-[225deg]' : 'arrow-down rotate-45'}></span>
                  </button>
                <div className={isLangOpen ? 'top-12 right-4 text-base absolute font-normal' : 'hidden'}>
                  <ul className="space-y-4 py-8 px-6 w-60 bg-dark text-white rounded-2xl">
                    <li><a href="#" className="">Bahasa Indonesia</a></li>
                    <li><a href="#" className="">English</a></li>
                  </ul>
                </div>
              </div> 
            </div>
          </div>
        </div>
      </nav> 
      <div className={isNavOpen ? "hidden lg:block" : "block"}>
        <Hero />
        <Kenalin  />
        <Skala />

        <Carousell />
        <Tumbuh />
        <Kerja />
        <Membangun />
        <Loyalti />
        <Perjalanan />
        <Belum />
        <Footer />
      </div>
      <div className={isNavOpen ? "showMenuNav lg:hidden" : "hidden"}>
        <div className="pt-10 container mx-auto">
          <NavList style="text-2xl font-bold py-16 block space-y-8" />
          <div className="flex gap-4 items-center">
            <img className="w-6 h-6 invert" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Ic_translate_48px.svg/1024px-Ic_translate_48px.svg.png" alt="translete" />
            <div className="flex p-2 bg-slate-800 rounded-full">
              <button className="text-white text-base font-semibold py-1 rounded-full w-16 text-center bg-dark ">ID</button>
              <button className="text-white text-base font-semibold py-1 rounded-full w-16 text-center ">EN</button>
            </div>
          </div> 
        </div>
      </div>  
      
    </main>
  )
}
