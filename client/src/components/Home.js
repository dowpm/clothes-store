import React from 'react'
import mainSlider1 from './img1.jpg'

const Home = () => {

    return(
        <div className="col-md-12" style={{marginBottom: 225}}>
        <div id="main-slider" className="owl-carousel owl-theme">
            <div className="item"><img src={mainSlider1} alt="" className="img-fluid" /></div>
        </div>
        {/* <!-- /#main-slider--> */}
        </div>
    )
}

export default Home