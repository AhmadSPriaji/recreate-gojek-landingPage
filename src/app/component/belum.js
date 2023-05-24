export default function Belum () {
  return(
    <section className="bg-[#182430] relative ">
      <img src="aps3.png" alt="aps" className="object-cover overflow-hidden sm:hidden lg:hidden "/>
      <img src="aps2.png" alt="aps" className="object-cover overflow-hidden hidden sm:block lg:hidden "/>
      <img src="aps.png" alt="aps" className="object-cover overflow-hidden hidden lg:block"/>
      <div className="absolute h-full top-0 bottom-0 right-0 left-0 mx-auto flex justify-center z-10 sm:items-center">
        <div className="container mx-auto">
          <div className="bg-transparent mx-auto relative flex justify-center sm:justify-start">
            <div className="px-8 py-10 sm:py-36">
              <h2 className="text-center sm:text-left text-white text-3xl sm:text-4xl lg:text-6xl  font-bold mb-12 sm:mb-10 lg:mb-16 ">
                Belum punya <br/>
                aplikasi Gojek? <br/>
                Yuk, unduh <br/>
                sekarang juga. <br/>
              </h2>
              <div className="w-full flex flex-col justify-center sm:justify-start sm:flex-row gap-6 lg:gap-8">
                <button href="#" className="w-fit bg-white text-center font-semibold text-base text-dark px-7 py-[10px] rounded-full flex items-center self-center gap-4">
                  <svg className="w-4" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Apple</title><path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/></svg>
                  App Store
                </button>
                <button href="#" className="w-fit bg-white text-center font-semibold text-base text-dark px-7 py-[10px] rounded-full flex items-center self-center gap-4">
                  <svg className="w-4" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Google Play</title><path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973zm0 2.067l-11 10.933c.298.036.612-.016.906-.183l13.324-7.54-3.23-3.21z"/></svg>
                  Play Store
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}