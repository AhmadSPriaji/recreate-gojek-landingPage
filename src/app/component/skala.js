export default function Skala () {
  return(
    <section className="bg-white">
      <div className="container mx-auto py-16">
        <div className="mx-auto pb-48">
          <h2 className="text-black text-3xl sm:text-4xl lg:text-6xl font-bold text-center mb-10">
            Skala kami
          </h2>
          <div className="w-full flex justify-center">
            <button href="#" className="bg-primary text-center font-semibold text-base text-white px-6 py-3 rounded-full">Gabung</button>
          </div>
        </div>
        <div className="flex justify-center px-8">
          <div className="grid grid-cols-1 justify-center gap-x-10 gap-y-32 md:grid-cols-2 lg:grid-cols-4 ">
            <div className="card bg-green-400 rounded-[48px] p-8 shadow-2xl shadow-green-400 relative w-[240px]">
              <img src="https://lelogama.go-jek.com/prime/upload/image/170_mil.png" alt="icon1" className="w-[240px] absolute z-40 -top-24 -left-0"/>
              <h3 className="font-bold text-4xl mt-24 mb-6">190 juta+</h3>
              <p className="font-semibold text-lg">jumlah install aplikasi kami.</p>
            </div>
            <div className="card bg-purple-400 rounded-[48px] p-8 shadow-2xl shadow-purple-400 relative w-[240px]">
              <img src="https://lelogama.go-jek.com/prime/upload/image/2_million.png" alt="icon1" className="w-[240px] absolute z-40 -top-24 -left-0"/>
              <h3 className="font-bold text-4xl mt-24 mb-6">2 juta+</h3>
              <p className="font-semibold text-lg">mitra Driver yang sudah bergabung dengan kami</p>
            </div>
            <div className="card bg-orange-400 rounded-[48px] p-8 shadow-2xl shadow-orange-400 relative w-[240px]">
              <img src="https://lelogama.go-jek.com/prime/upload/image/50_million.png" alt="icon1" className="w-[240px] absolute z-40 -top-24 -left-0"/>
              <h3 className="font-bold text-4xl mt-24 mb-6">900.000+</h3>
              <p className="font-semibold text-lg">jumlah mitra GoFood</p>
            </div>
            <div className="card bg-blue-400 rounded-[48px] p-8 shadow-2xl shadow-blue-400 relative w-[240px]">
              <img src="https://lelogama.go-jek.com/prime/upload/image/12x_growth.png" className="w-[240px] absolute z-40 -top-24 -left-0"/>
              <h3 className="font-bold text-4xl mt-24 mb-6">2.448x</h3>
              <p className="font-semibold text-lg">lipat kenaikan pengunduhan aplikasi Gojek dari 2015 sampai 2020</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}