export default function Tumbuh () {
  return(
    <section className="bg-dark">
      <div className="mx-auto">
        <div className="rounded-b-xxl py-48 bg-gray-500">
          <h2 className="text-left font-bold text-5xl xl:text-8xl ml-8 md:ml-0 text-white md:text-center mb-24">
            Bertumbuh besar <br/>
            bersama Gojek
          </h2>
        </div>
        <div className=" container mx-auto relative flex justify-center h-96 ">
          <div className="flex justify-center mx-auto absolute -top-20 z-30">
            <div className="grid grid-cols-1 justify-center gap-x-10 gap-y-32 2xl:grid-cols-3 ">
                <div className="card bg-slate-800 rounded-[64px] p-20 shadow-2xl relative ">
                  <img src="https://lelogama.go-jek.com/prime/upload/image/employees.svg" alt="icon1" className=" absolute z-40 -top-10 "/>
                  <h3 className="font-bold text-white text-4xl mb-6">Gabung jadi GoTroops, yuk!</h3>
                  <p className="font-normal mb-16 text-2xl text-white">Di belakang startup dengan pertumbuhan paling tinggi di Asia Tenggara, terdapat talenta yang memiliki ide-ide cemerlang.</p>
                  <div className="w-full flex">
                    <button href="#" className="bg-primary text-center font-semibold text-2xl text-white px-8 py-4 rounded-full">Selengkapnya</button>
                  </div>
                </div>
                <div className="card bg-slate-800 rounded-[64px] p-20 shadow-2xl relative ">
                  <img src="https://lelogama.go-jek.com/prime/upload/image/driver_partner.svg" alt="icon1" className=" absolute z-40 -top-10 "/>
                  <h3 className="font-bold text-white text-4xl mb-6">Gabung jadi Mitra Driver</h3>
                  <p className="font-normal mb-16 text-2xl text-white">Kami adalah rumah bagi lebih dari 2 juta mitra driver di Asia Tenggara, yang mendapat jaminan finansial dan fasilitas kesehatan.</p>
                  <div className="w-full flex">
                    <button href="#" className="bg-primary text-center font-semibold text-2xl text-white px-8 py-4 rounded-full">Selengkapnya</button>
                  </div>
                </div>
                <div className="card bg-slate-800 rounded-[64px] p-20 shadow-2xl relative ">
                  <img src="https://lelogama.go-jek.com/prime/upload/image/merchant_partner.svg" alt="icon1" className=" absolute z-40 -top-10 "/>
                  <h3 className="font-bold text-white text-4xl mb-6">Gabung jadi Mitra Usaha</h3>
                  <p className="font-normal mb-16 text-2xl text-white">Kami membantu 500.000+ Mitra Usaha melipatgandakan penjualan, meluaskan jangkauan, dan berkembang dengan teknologi baru.</p>
                  <div className="w-full flex">
                    <button href="#" className="bg-primary text-center font-semibold text-2xl text-white px-8 py-4 rounded-full">Selengkapnya</button>
                  </div>
                </div>
            </div>
          </div>
        </div>
        <div className="bg-dark h-64"></div>

      </div>
    </section>
  )
}