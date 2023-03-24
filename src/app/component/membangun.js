export default function Membangun () {
  return(
    <section className="bg-dark h-1/2">
      <div className="container mx-auto ">
        <div className="mx-auto py-40">
          <h2 className="text-white text-7xl font-bold text-center mb-16">
            Kami membangun layanan<br/>
            untuk membantumu melewati halangan
          </h2>
          <div className="w-full flex justify-center">
            <button href="#" className="bg-primary text-center font-semibold text-2xl text-white px-8 py-4 rounded-full">Lihat Semua Layanan</button>
          </div>
          <div>
            <div>
              card
            </div>
            <div className="flex justify-center my-16">
              <ul className="flex gap-16">
                <li><a href="#" className="text-white text-2xl">Transportasi & Logistik</a></li>
                <li><a href="#" className="text-white text-2xl">Pembayaran</a></li>
                <li><a href="#" className="text-white text-2xl">Pesan makanan & belanja</a></li>
                <li><a href="#" className="text-white text-2xl">Bisnis</a></li>
                <li><a href="#" className="text-white text-2xl">Hiburan</a></li>
              </ul>
            </div>
            <div className="w-full flex justify-center">
              <button href="#" className="bg-primary text-center font-semibold text-2xl text-white px-8 py-4 rounded-full">Lihat Semua Layanan</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}