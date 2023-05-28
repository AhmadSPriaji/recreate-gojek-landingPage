import KerjaSlide from '../swiper/KerjaSlide'

export default function Kerja () {
  return(
    <section className="z-20 bg-dark ">
      <div className="-top-16 rounded-t-rad md:rounded-t-radMd lg:rounded-t-radLg bg-white">
        <div className="container mx-auto pb-36">
          <div className="mx-auto py-32">
            <h2 className="text-black text-3xl sm:text-4xl lg:text-6xl font-bold text-center mb-16">
              Kerja di Gojek itu beda karena...   
            </h2>
            <KerjaSlide />
          </div>
        </div>
      </div>
    </section>
  )
}