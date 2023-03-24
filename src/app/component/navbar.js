function NavList() {

  return(
    <div id="nav-menu" className="hidden py-6 xl:flex gap-16">
      <ul className="text-4xl font-bold py-8 block xl:flex xl:gap-12 xl:py-0 xl:text-xl xl:font-semibold">
        <li className="nav-list"><a href="#">Beranda</a></li>
        <li className="nav-list"><a href="#">Gabung jadi Mitra</a></li>
        <li className="nav-list"><a href="#">Karir</a></li>
        <li className="nav-list"><a href="#">Perusahaan</a></li>
        <li className="nav-list"><a href="#">Produk</a></li>
        <li className="nav-list"><a href="#">Blog</a></li>
        <li className="nav-list"><a href="#">Bantuan</a></li>
      </ul>
      <div>
        <button className="text-white">Language</button>
        <input type="checkbox" />
      </div> 
    </div>
  )
}

function Navbar() {
  // const hamburger = querySelector('#hamburger');
  // const navMenu = querySelector('#nav-menu');
  // hamburger.addEventListener('click', function() {
  //   hamburger.classList.toggle('hamburger-active');
  //   navMenu.classList.toggle('hidden')
  // })

  return(
    <nav className="bg-dark absolute top-0 left-0 w-full flex items-center z-10 h-24 xl:h-24">
      <div className="container mx-auto">
        <div className="flex items-center justify-between relative px-8 mx-auto gap-16">
          <div className="text-white">
            <a href="#" className="">
              <img src="https://lelogama.go-jek.com/prime/upload/gojek-horizontal-logo-white.svg" 
              alt="Gojek" className=" w-32"/>
            </a>
          </div>
          <div>
            <button id="hamburger" name="hamburger" type="button" className="block xl:hidden">
              <span className="hamburger-line origin-top-left"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line origin-bottom-left"></span>
            </button>
            <NavList />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar