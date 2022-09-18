import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './index.css'

const ReactSlick = () => {
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
  }
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="logo-container">
          <h3 className="logo">LOGO</h3>
        </div>
        <div className="logo-container">
          <h3 className="logo">LOGO</h3>
        </div>
        <div className="logo-container">
          <h3 className="logo">LOGO</h3>
        </div>
        <div className="logo-container">
          <h3 className="logo">LOGO</h3>
        </div>
        <div className="logo-container">
          <h3 className="logo">LOGO</h3>
        </div>
        <div className="logo-container">
          <h3 className="logo">LOGO</h3>
        </div>
      </Slider>
    </div>
  )
}

export default ReactSlick
