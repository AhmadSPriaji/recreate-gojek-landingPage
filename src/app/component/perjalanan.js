export default function Perjalanan () {
  return(
    <section className="z-20 rounded-t-xxl bg-langit">
      <div className="container mx-auto ">
        <div className="mx-auto py-40">
          <h2 className="text-dark text-7xl font-bold text-center mb-16">
            Ikuti perjalanan <br/>
            kami dalam membuat <br/>
            dampak sosial!
          </h2>
          <div className="w-full flex justify-center">
            <button href="#" className="bg-primary text-center font-semibold text-2xl text-white px-8 py-4 rounded-full">Masuk Newsroom</button>
          </div>
          <div className="flex justify-center mt-48">
            <img className="z-20 " src="https://lelogama.go-jek.com/prime/upload/image/General_impact_-_Globe.svg" alt="bumi" />
            <img className="absolute mt-44" src="https://lelogama.go-jek.com/prime/upload/image/general-impact-cloud.svg" alt="awan" />
          </div>

        </div>
      </div>
    </section>
  )
}