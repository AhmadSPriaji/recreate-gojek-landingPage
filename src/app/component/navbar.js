"use client";
import { useState } from "react";


function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);


  return(
    <div className="block fixed w-full z-50">
      <nav className="bg-dark top-0 left-0 w-full flex items-center z-10 h-16 xl:h-24">
        <div className="container mx-auto">
          <div className="flex items-center justify-between relative px-8 mx-auto gap-16">
            <div className="text-white">
              <a href="#" className="">
                <img src="https://lelogama.go-jek.com/prime/upload/gojek-horizontal-logo-white.svg" 
                alt="Gojek" className="w-24 xl:w-32"/>
              </a>
            </div>
            <div>
              <div className="mobile-menu flex xl:hidden">
                <button type="button" className="block xl:hidden" onClick={() => setIsNavOpen((prev) => !prev)}>
                  <span className={isNavOpen ? "hamburger-line rotate-45 origin-top-left translate-y-1" : "hamburger-line"}></span>
                  <span className={isNavOpen ? "hamburger-line scale-0" : "hamburger-line"}></span>
                  <span className={isNavOpen ? "hamburger-line -rotate-45 origin-bottom-left -translate-y-1" : "hamburger-line"}></span>
                </button>
                
              </div>
              <ul className="desktop-menu hidden xl:flex xl:gap-12 xl:py-0 xl:text-xl xl:font-semibold">
                    <li className="nav-list"><a href="#">Beranda</a></li>
                    <li className="nav-list"><a href="#">Gabung jadi Mitra</a></li>
                    <li className="nav-list"><a href="#">Karir</a></li>
                    <li className="nav-list"><a href="#">Perusahaan</a></li>
                    <li className="nav-list"><a href="#">Produk</a></li>
                    <li className="nav-list"><a href="#">Blog</a></li>
                    <li className="nav-list"><a href="#">Bantuan</a></li>
              </ul>
                  <div className="hidden xl:flex">
                    <img className="white" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Ic_translate_48px.svg/1024px-Ic_translate_48px.svg.png" alt="translete" />
                    <button className="text-white">Language</button>
                    <input type="checkbox" />
                  </div> 
            </div>
          </div>
        </div>
      </nav> 
    </div>
  )
}

export default Navbar