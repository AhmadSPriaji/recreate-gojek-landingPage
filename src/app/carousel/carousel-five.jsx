import React, { Component } from "react";
import Slider from 'react-slick';

export default class PreviousNextMethods extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoPlay: true,
    };
    return (
      <div className="bg-orange-600 relative">
        <Slider ref={c => (this.slider = c)} {...settings}>
          <div key={1} >
            <img src="slide1.png" alt="slide1" className="h-screen object-cover w-full brightness-90 "/>
          </div>
          <div key={2} >
            <img src="slide2.png" alt="slide2" className="h-screen object-cover w-full brightness-90"/>
          </div>
          <div key={3} >
            <img src="slide3.png" alt="slide3" className="h-screen object-cover w-full brightness-90"/>
          </div>
          <div key={4} >
            <img src="slide4.png" alt="slide4" className="h-screen object-cover w-full brightness-90"/>
          </div>
        </Slider>
          <div style={{ textAlign: "center" }} className="absolute z-20 bottom-3 right-6">
            <div>
              <button className="button bg-transparent" onClick={this.previous}>
                <svg className="fill-gray-500 hover:fill-white" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z"/></svg>
              </button>
              <button className="button bg-transparent" onClick={this.next}>
                <svg className="fill-gray-500 hover:fill-white" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z"/></svg>
              </button>
            </div>
            <div class="progress" role="progressbar" aria-valuemin="0" aria-valuemax="100">
              <span class="slider__label sr-only"></span>
            </div>
          </div>
      </div>
    );
  }
}
