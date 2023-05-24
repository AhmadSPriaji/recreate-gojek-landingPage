export default function Tumbuh () {
  return(
    <section className="bg-dark pb-32">
      <div className="">
        <div className="relative ">
          <img src="tumbuhBg.png" alt="tumbuhBg" className="absolute brightness-50 rounded-b-radMd lg:rounded-b-radLg " />
          <div className="flex flex-col pt-16 pb-32 z-10 relative">
            <h2 className="text-left font-bold text-4xl xl:text-7xl ml-8 md:ml-0 text-white md:text-center mb-24">
              Bertumbuh besar <br/>
              bersama Gojek
            </h2>
          </div>
        </div>
      </div>
      <div className="container mx-auto -mt-16">
        <div className="flex justify-center px-8">
            <div className="grid grid-cols-1 justify-center gap-x-8 gap-y-8 lg:grid-cols-3 ">
                <div className="card bg-slate-800 rounded-[48px] p-14 shadow-2xl relative max-w-lg lg:max-w-sm ">
                  <img src="https://lelogama.go-jek.com/prime/upload/image/employees.svg" alt="icon1" className=" absolute z-40 -top-10 md:-left-10 md:top-1/3 lg:-top-10 lg:left-auto "/>
                  <h3 className="font-bold text-white text-lg lg:text-2xl mb-6">Gabung jadi GoTroops, yuk!</h3>
                  <p className="font-normal mb-16 text-sm lg:text-base text-white">Di belakang startup dengan pertumbuhan paling tinggi di Asia Tenggara, terdapat talenta yang memiliki ide-ide cemerlang.</p>
                  <div className="w-full flex">
                    <button href="#" className="bg-primary text-center font-semibold text-base text-white px-6 py-3 rounded-full">Selengkapnya</button>
                  </div>
                </div>
                <div className="card bg-slate-800 rounded-[48px] p-14 shadow-2xl relative max-w-lg lg:max-w-sm ">
                  <img src="https://lelogama.go-jek.com/prime/upload/image/driver_partner.svg" alt="icon1" className=" absolute z-40 -top-10 md:-left-10 md:top-1/3 lg:-top-10 lg:left-auto "/>
                  <h3 className="font-bold text-white text-lg lg:text-2xl mb-6">Gabung jadi Mitra Driver</h3>
                  <p className="font-normal mb-16 text-sm lg:text-base text-white">Kami adalah rumah bagi lebih dari 2 juta mitra driver di Asia Tenggara, yang mendapat jaminan finansial dan fasilitas kesehatan.</p>
                  <div className="w-full flex">
                    <button href="#" className="bg-primary text-center font-semibold text-base text-white px-6 py-3 rounded-full">Selengkapnya</button>
                  </div>
                </div>
                <div className="card bg-slate-800 rounded-[48px] p-14 shadow-2xl relative max-w-lg lg:max-w-sm ">
                  <img src="https://lelogama.go-jek.com/prime/upload/image/merchant_partner.svg" alt="icon1" className=" absolute z-40 -top-10 md:-left-10 md:top-1/3 lg:-top-10 lg:left-auto "/>
                  <h3 className="font-bold text-white text-lg lg:text-2xl mb-6">Gabung jadi Mitra Usaha</h3>
                  <p className="font-normal mb-16 text-sm lg:text-base text-white">Kami membantu 500.000+ Mitra Usaha melipatgandakan penjualan, meluaskan jangkauan, dan berkembang dengan teknologi baru.</p>
                  <div className="w-full flex">
                    <button href="#" className="bg-primary text-center font-semibold text-base text-white px-6 py-3 rounded-full">Selengkapnya</button>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}