import React, { Component } from "react";
import Slider from 'react-slick';

export default class Fade extends Component {
    render() {
      const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false
      };
      return (
        <div>
          <Slider {...settings}>
            <div className="bg-slate-400">
              <p>1</p>
            </div>
            <div>
              <p>2</p>
            </div>
            <div>
              <p>3</p>
            </div>
            <div>
              <p>4</p>
            </div>
          </Slider>
        </div>
      );
    }
  }
  