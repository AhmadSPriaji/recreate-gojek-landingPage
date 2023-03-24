export default function Belum () {
  return(
    <section className="bg-dark">
      <div className="absolute bg-dark w-full">
        <img src="https://lelogama.go-jek.com/prime/upload/image/download-desktop.png" alt="aps" />        
      </div>
      <div className="bg-transparent z-30 container mx-auto relative">
        <div className="py-72">
          <h2 className="text-white text-7xl font-bold mb-16 ">
            Belum punya <br/>
            aplikasi Gojek? <br/>
            Yuk, unduh <br/>
            sekarang juga. <br/>
          </h2>
          <div className="w-full flex gap-12">
            <button href="#" className="bg-white text-center font-semibold text-2xl text-dark px-8 py-4 rounded-full flex items-center gap-4">
              <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.52 12.46C16.508 11.8438 16.6682 11.2365 16.9827 10.7065C17.2972 10.1765 17.7534 9.74476 18.3 9.46C17.9558 8.98143 17.5063 8.5883 16.9862 8.31089C16.466 8.03349 15.8892 7.87923 15.3 7.86C14.03 7.76 12.65 8.6 12.14 8.6C11.63 8.6 10.37 7.9 9.40999 7.9C7.40999 7.9 5.29999 9.49 5.29999 12.66C5.30963 13.6481 5.48194 14.6279 5.80999 15.56C6.24999 16.84 7.89999 20.05 9.61999 20C10.52 20 11.16 19.36 12.33 19.36C13.5 19.36 14.05 20 15.06 20C16.79 20 18.29 17.05 18.72 15.74C18.0689 15.4737 17.5119 15.0195 17.1201 14.4353C16.7282 13.8511 16.5193 13.1634 16.52 12.46ZM14.52 6.59C14.8307 6.23965 15.065 5.82839 15.2079 5.38245C15.3508 4.93651 15.3992 4.46569 15.35 4C14.4163 4.10239 13.5539 4.54785 12.93 5.25C12.6074 5.58991 12.3583 5.99266 12.1983 6.43312C12.0383 6.87358 11.9708 7.34229 12 7.81C12.4842 7.82361 12.9646 7.71974 13.3999 7.50728C13.8353 7.29482 14.2127 6.98009 14.5 6.59H14.52Z" fill="#000000"/>
              </svg>
              App Store
            </button>
            <button href="#" className="bg-white text-center font-semibold text-2xl text-dark px-8 py-4 rounded-full flex items-center gap-4">
              <svg fill="#000000" width="24px" height="24px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><title>ionicons-v5_logos</title><path d="M48,59.49v393a4.33,4.33,0,0,0,7.37,3.07L260,256,55.37,56.42A4.33,4.33,0,0,0,48,59.49Z"/><path d="M345.8,174,89.22,32.64l-.16-.09c-4.42-2.4-8.62,3.58-5,7.06L285.19,231.93Z"/><path d="M84.08,472.39c-3.64,3.48.56,9.46,5,7.06l.16-.09L345.8,338l-60.61-57.95Z"/><path d="M449.38,231l-71.65-39.46L310.36,256l67.37,64.43L449.38,281C468.87,270.23,468.87,241.77,449.38,231Z"/></svg>
              Play Store
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}