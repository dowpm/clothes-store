import React from 'react'
import mainSlider1 from './img1.jpg'

const Home = () => {

    return(
        <div class="col-md-12" style={{marginBottom: 225}}>
        <div id="main-slider" class="owl-carousel owl-theme">
            <div class="item"><img src={mainSlider1} alt="" class="img-fluid" /></div>
        </div>
        {/* <!-- /#main-slider--> */}
        </div>
    )
}

export default Home