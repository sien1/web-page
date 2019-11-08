import React, {Component} from 'react';
import Slider from 'react-slick';
import './ServiceSectionMobile.css';



class ServiceSectionMobile extends Component {
    render(){
        var settings = {};
        return (
        <div style={{padding:'40px', background:'red'}}>
            <Slider {...settings}>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTvn5bx6R1ZAVXxMsYdyykUaG8ntmSsqWohxCWYb_UPx_zy2Q2J" />
            </div>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTvn5bx6R1ZAVXxMsYdyykUaG8ntmSsqWohxCWYb_UPx_zy2Q2J" />
            </div>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTvn5bx6R1ZAVXxMsYdyykUaG8ntmSsqWohxCWYb_UPx_zy2Q2J" />
            </div>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTvn5bx6R1ZAVXxMsYdyykUaG8ntmSsqWohxCWYb_UPx_zy2Q2J" />
            </div>
            </Slider>
        </div>)
    }
}

export default ServiceSectionMobile;

