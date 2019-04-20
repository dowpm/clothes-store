import React, { Component } from 'react'
import mainSlider1 from './main-slider1.jpg'

export default class Home extends Component{

    render(){
        return(
            <div class="col-md-12">
            <div id="main-slider" class="owl-carousel owl-theme">
                <div class="item"><img src={mainSlider1} alt="" class="img-fluid" /></div>
            </div>
            {/* <!-- /#main-slider--> */}
            </div>
        )
    }
}