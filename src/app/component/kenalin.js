import CarouselOne from "../carousel/carousel-one"
export default function Kenalin () {
  return(
    <section className="bg-dark relative">
      <div className="container mx-auto">
        <div className="mx-auto pt-16 ">
          <div className="pb-64">
            <h2 className="text-white text-3xl sm:text-4xl lg:text-6xl font-bold text-center mb-10">
              Kenalin, Gojek. <br/>
              Si pembawa perubahan 
            </h2>
            <div className="w-full flex justify-center">
              <button href="#" className="bg-primary text-center font-semibold text-base text-white px-6 py-3 rounded-full">Gabung</button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white -mt-0 rounded-t-rad md:rounded-t-radMd lg:rounded-t-radLg relative">
        {/* <CarouselOne /> */}
              <div className="px-8 flex justify-center items-start bg-transparent text-dark flex-wrap">
                <div className="flex flex-col justify-center -mt-40 md:-mt-52 md:w-1/2 lg:w-1/4 p-8">
                  <img src="bapak-gojek.svg" alt="icon1" className="w-40 md:w-48 lg:w-52 self-center flex justify-center mb-2 lg:mb-5"/>
                  <h3 className="text-center font-semibold lg:font-bold text-lg lg:text-2xl mb-1 lg:mb-3">Fortune Top 20</h3>
                  <p className="text-center text-sm lg:text-base font-normal">Satu-satunya perusahaan di Asia Tenggara yang dua kali berada di daftar Perusahaan Pengubah Dunia versi majalah Fortune</p>
                </div>
                <div className="flex flex-col justify-center md:-mt-52 md:w-1/2 lg:w-1/4 p-8">
                  <img src="ibu-gendut.svg" alt="icon1" className="w-40 md:w-48 lg:w-52 self-center flex justify-center mb-2 lg:mb-5"/>
                  <h3 className="text-center font-semibold lg:font-bold text-lg lg:text-2xl mb-1 lg:mb-3">Berkontribusi lebih dari $7.1 triliun</h3>
                  <p className="text-center text-sm lg:text-base font-normal">Penggerak roda perekonomian Indonesia</p>
                </div>
                <div className="flex flex-col justify-center lg:-mt-52 md:w-1/2 lg:w-1/4 p-8">
                  <img src="pak-ndut.svg" alt="icon1" className="w-40 md:w-48 lg:w-52 self-center flex justify-center mb-2 lg:mb-5"/>
                  <h3 className="text-center font-semibold lg:font-bold text-lg lg:text-2xl mb-1 lg:mb-3">Jaket hijau, pergerakan juga hijau</h3>
                  <p className="text-center text-sm lg:text-base font-normal">Gojek mengurangi pemakaian plastik hingga 11.3 ton sejak Oktober 2020</p>
                </div>
                <div className="flex flex-col justify-center lg:-mt-52 md:w-1/2 lg:w-1/4 p-8">
                  <img src="ibu-jualan.svg" alt="icon1" className="w-40 md:w-48 lg:w-52 self-center flex justify-center mb-2 lg:mb-5"/>
                  <h3 className="text-center font-semibold lg:font-bold text-lg lg:text-2xl mb-1 lg:mb-3">Tumbuh 80% sejak pandemi</h3>
                  <p className="text-center text-sm lg:text-base font-normal">Mitra Food merchants naik 80% sejak pandemi berkat solusi digitalisasi Gojek untuk UMKM.</p>
                </div>
              </div>
      </div>
    </section>
  )
}