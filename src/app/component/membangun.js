export default function Membangun () {
  return(
    <section className="bg-dark h-1/2">
      <div className="container mx-auto ">
        <div className="mx-auto py-32">
          <h2 className="text-white text-3xl sm:text-4xl lg:text-6xl font-bold text-center mb-10">
            Kami membangun layanan<br/>
            untuk membantumu melewati halangan
          </h2>
          <div className="w-full flex justify-center">
            <button href="#" className="bg-primary text-center font-semibold text-base text-white px-6 py-3 rounded-full">Lihat Semua Layanan</button>
          </div>
          <div>
            {/* <div className="text-white">
              <div className="card rounded-2xl bg-[#ee2737] relative">
                <img src="product-intro-card-bg-entertainment.svg" alt="" className="absolute"/>
                <ul>
                  <li>gofood</li>
                </ul>
              </div>
            </div> */}
            <div className="hidden lg:flex justify-center my-8 ">
              <ul className="flex gap-16">
                <li><a href="#" className="text-white text-base">Transportasi & Logistik</a></li>
                <li><a href="#" className="text-white text-base">Pembayaran</a></li>
                <li><a href="#" className="text-white text-base">Pesan makanan & belanja</a></li>
                <li><a href="#" className="text-white text-base">Bisnis</a></li>
                <li><a href="#" className="text-white text-base">Hiburan</a></li>
              </ul>
            </div>
            <div className="w-full flex justify-center">
              <button href="#" className="bg-primary text-center font-semibold text-base text-white px-6 py-3 rounded-full">Lihat Semua Layanan</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}