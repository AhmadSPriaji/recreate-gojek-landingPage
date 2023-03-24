export default function Skala () {
  return(
    <section className="z-20 rounded-t-xxl bg-white ">
      <div className="container mx-auto pb-36">
        <div className="flex justify-center">
          <div>

          </div>
        </div>
        <div className="mx-auto py-40">
          <h2 className="text-black text-7xl font-bold text-center mb-16">
            Skala kami
          </h2>
          <div className="w-full flex justify-center">
            <button href="#" className="bg-primary text-center font-semibold text-2xl text-white px-8 py-4 rounded-full">Gabung</button>
          </div>
        </div>
        <div className="flex justify-center mx-auto">
          <div className="grid grid-cols-1 justify-center gap-x-10 gap-y-32 lg:grid-cols-2 2xl:grid-cols-4 ">
            <div className="card bg-green-400 rounded-[64px] p-16 shadow-2xl shadow-green-400 relative w-[350px]">
              <img src="https://lelogama.go-jek.com/prime/upload/image/170_mil.png" alt="icon1" className="w-[350px] absolute z-40 -top-24 -left-0"/>
              <h3 className="font-bold text-5xl mt-40 mb-6">190 juta+</h3>
              <p className="font-semibold text-2xl">jumlah install aplikasi kami.</p>
            </div>
            <div className="card bg-purple-400 rounded-[64px] p-16 shadow-2xl shadow-purple-400 relative w-[350px]">
              <img src="https://lelogama.go-jek.com/prime/upload/image/2_million.png" alt="icon1" className="w-[350px] absolute z-40 -top-24 -left-0"/>
              <h3 className="font-bold text-5xl mt-40 mb-6">2 juta+</h3>
              <p className="font-semibold text-2xl">mitra Driver yang sudah bergabung dengan kami</p>
            </div>
            <div className="card bg-orange-400 rounded-[64px] p-16 shadow-2xl shadow-orange-400 relative w-[350px]">
              <img src="https://lelogama.go-jek.com/prime/upload/image/50_million.png" alt="icon1" className="w-[350px] absolute z-40 -top-24 -left-0"/>
              <h3 className="font-bold text-5xl mt-40 mb-6">900.000+</h3>
              <p className="font-semibold text-2xl">jumlah mitra GoFood</p>
            </div>
            <div className="card bg-blue-400 rounded-[64px] p-16 shadow-2xl shadow-blue-400 relative w-[350px]">
              <img src="https://lelogama.go-jek.com/prime/upload/image/12x_growth.png" className="w-[350px] absolute z-40 -top-24 -left-0"/>
              <h3 className="font-bold text-5xl mt-40 mb-6">2.448x</h3>
              <p className="font-semibold text-2xl">lipat kenaikan pengunduhan aplikasi Gojek dari 2015 sampai 2020</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}