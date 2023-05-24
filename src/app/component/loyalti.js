export default function Loyalti () {
  return(
    <section className="bg-dark">
      <div className="container mx-auto">
        <div className="flex p-8 flex-col-reverse md:flex-row justify-center gap-8">
          <div className="md:w-1/2">
            <img src="home-spot-image-goclub.svg" alt="koyalti" className="w-full"/>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-white text-center md:text-left lg:text-left text-3xl lg:text-5xl font-bold mb-8">
              Program Loyalti Gojek
            </h2>
            <h3 className="text-white text-md lg:text-lg mb-8">
              Banyakin transaksi, dapetin banyak hadiahnya
            </h3>
            <div className="w-full flex justify-center md:justify-start">
              <button href="#" className="bg-primary text-center font-semibold text-base text-white px-6 py-3 rounded-full">Cek Benefit</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}