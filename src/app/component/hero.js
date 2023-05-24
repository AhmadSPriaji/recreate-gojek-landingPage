function Hero () {
  return(
    <div>
      <video id="background-video" className="-z-[5] absolute h-screen object-cover w-full" muted loop autoPlay>
        <source src='bgVideo.mp4' type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={"h-screen bg-transparent flex items-center"}>
        <div className="container mx-auto">
          <div className=" p-8" >
            <h1 className="text-white text-5xl font-bold w-2/3 leading-normal xl:leading-tight xl:text-[76px]">
              3 negara. <br/>
              20+ layanan. <br/>
              1 platform <br/>
              on-demand terkemuka. <br/>
            </h1>
          </div>
        </div>
      </div>     
    </div>
  )
}

export default Hero