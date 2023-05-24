export default function Kerja () {
  return(
    <section className="z-20 bg-dark ">
      <div className="-top-16 rounded-t-rad md:rounded-t-radMd lg:rounded-t-radLg bg-white">
        <div className="container mx-auto pb-36">
          <div className="mx-auto py-32">
            <h2 className="text-black text-3xl sm:text-4xl lg:text-6xl font-bold text-center mb-16">
              Kerja di Gojek itu beda karena...   
            </h2>
            <div className="flex justify-center">
              <div className="card rounded-[48px] p-12 shadow-2xl relative h-[424px] grid content-end max-w-[640px]">
                <img src="kolaborasiBudayaCard.png" alt="card1" className="absolute rounded-[48px] brightness-50"/>
                <div className="flex flex-col z-10">
                  <h3 className="text-white font-bold text-2xl mb-3">Kolaborasi antar budaya</h3>
                  <div className="flex gap-2">
                    <p className="text-white text-lg mb-6 lg:mb-0 lg:w-3/4">Bisa kerjasama dengan GoTroops dari berbagai negara!</p>
                    <div className="w-full lg:w-1/4 flex">
                        <button href="#" className="bg-primary text-center font-semibold text-base text-white px-6 py-3 h-fit rounded-full">Selengkapnya</button>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}