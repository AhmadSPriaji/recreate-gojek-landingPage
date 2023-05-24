export default function Footer () {
  return(
    <footer className="h-full bg-[#101820] py-16">
     <div className="container mx-auto">
      <div className="px-8">
        <img className="w-32 mb-16" src="https://lelogama.go-jek.com/prime/upload/gojek-horizontal-logo-white.svg" alt="logo" />
        <div className="lg:flex lg:justify-between lg:gap-32">
          <div className="w-full  grid grid-cols-2 md:grid-cols-4 justify-center lg:flex lg:justify-between ">
            <div className="mb-4">
              <h4 className="foot-h4">Perusahaan</h4>
              <ul className="text-white">
                <li className="foot-li"><a href="#">Tentang</a></li>
                <li className="foot-li"><a href="#">Produk</a></li>
                <li className="foot-li"><a href="#">Blog</a></li>
              </ul>
            </div>
            <div className="mb-4">
              <h4 className="foot-h4">Gabung</h4>
              <ul className="text-white">
                <li className="foot-li"><a href="#">Mitra Driver</a></li>
                <li className="foot-li"><a href="#">Mitra Usaha</a></li>
              </ul>
            </div>
            <div className="mb-4">
              <h4 className="foot-h4">Karir</h4>
              <ul className="text-white">
                <li className="foot-li"><a href="#">Pelajar</a></li>
                <li className="foot-li"><a href="#">Profesional</a></li>
              </ul>
            </div>
            <div className="mb-4">
              <h4 className="foot-h4">Hubungi Kami</h4>
              <ul className="text-white">
                <li className="foot-li"><a href="#">Bantuan</a></li>
                <li className="foot-li"><a href="#">Lokasi Kami</a></li>
              </ul>
            </div>
          </div>
          <hr className="border-slate-800 my-8 lg:hidden"/>
          <div className="md:flex md:justify-between lg:block lg:w-1/3">
            <div className="mb-8">
              <h4 className="foot-h4">Cari tau berita terbaru</h4>
              <div className="px-2 flex gap-12">
                <a href="#" className="text-white">
                <svg role="img"  width={32} className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="#" className="text-white">
                  <svg role="img" width={32} className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                </a>
                <a href="#" className="text-white">
                  <svg role="img" width={32} className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>
                </a>
                <a href="#" className="text-white">
                  <svg role="img"  width={32} className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>YouTube</title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>  
                </a>
              </div>
            </div>
            <div className="mb-16">
              <h4 className="foot-h4">Unduh Aplikasi</h4>
              <div className="md:flex md:justify-center lg:justify-start lg:px-2 gap-12">
                <a className="text-white">
                  <svg className="hidden fill-current md:block" width={32} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Google Play</title><path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973zm0 2.067l-11 10.933c.298.036.612-.016.906-.183l13.324-7.54-3.23-3.21z"/></svg>
                </a>
                <a className="text-white">
                  <svg className="hidden fill-current md:block" width={32} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Apple</title><path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/></svg>    
                </a>

                <button href="#" className="bg-white text-center font-semibold text-base text-dark px-6 py-[10px] rounded-full flex items-center gap-4 mb-6 w-full md:hidden">
                  <div className="flex mx-auto gap-2">
                    <svg className="w-4" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Google Play</title><path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973zm0 2.067l-11 10.933c.298.036.612-.016.906-.183l13.324-7.54-3.23-3.21z"/></svg>
                    Play Store
                  </div>
                </button>
                <button href="#" className="bg-white text-center font-semibold text-base text-dark px-6 py-[10px] rounded-full flex items-center gap-4 mb-6 w-full md:hidden ">
                  <div className="flex mx-auto gap-2">
                    <svg className="w-4" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Apple</title><path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/></svg>                  
                    App Store
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-slate-800 my-8 "/>
        <div className="lg:flex lg:flex-row-reverse lg:justify-between lg:items-center">
          <div className="md:flex md:justify-between md:gap-16">
            <div className="mb-6">
              <button className="rounded-full border border-slate-800 text-white w-full px-6 py-3 text-base text-left" >Indonesia</button>
            </div>
            <div className="mb-6">
              <button className="rounded-full border border-slate-800 text-white w-full px-6 py-3 text-base text-left">Bahasa Indonesia</button>
            </div>
          </div>
          <hr className="border-slate-800 my-8 md:hidden"/>
          <div className="text-white">
            <ul className="md:flex md:justify-between lg:grid lg:grid-cols-2 lg:justify-start lg:gap-x-16">
              <li className="mb-4 text-base underline">
                <a href="#">Pemberitahuan Privasi</a>    
              </li>
              <li className="mb-4 text-base underline">
                <a href="#">Syarat dan Ketentuan</a>    
              </li>
              <li className="mb-4 text-base underline">
                <a href="#">Atribusi Data</a>    
              </li>
              <li className="mb-4 text-base underline">
                <a href="#">Pengaturan Cookie</a>    
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8">
          <p className="text-white text-sm md:text-base">© 2023 Gojek | Gojek adalah merek milik PT GoTo Gojek Tokopedia Tbk. Terdaftar pada Direktorat Jendral Kekayaan Intelektual Republik Indonesia.</p>
        </div>
      </div>
     </div>
    </footer>
  )
}

