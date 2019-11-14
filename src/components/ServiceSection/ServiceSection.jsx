import React, { Component } from "react";
import './ServiceSection.css'
import { TimelineLite, CSSPlugin } from "gsap/TimelineLite";
import ServiceIntro from './ServiceIntro';


import ServicesList from './Services.json';

class ServiceSection extends Component {

	constructor(props){
		super(props);
		// cards, elements tha will be used in the tween
        this.containers = [];
        this.wrappers = [];
        this.inners = [];

		// the timeline instance
        this.tl = new TimelineLite({ paused: false });

        this.tl2 = new TimelineLite({ paused: false });

        this.tl3 = new TimelineLite({ paused: false });

	}

	componentDidMount(){
        this.tl
        .staggerTo( this.containers , .6, { autoAlpha: 1, y: 0, skewY:'0deg'}, .05)
        .staggerTo( this.containers , .5, { autoAlpha: 1, y: 0,  skewY:'700deg', transitionTimingFunction: 'cubic-bezier(.5,.25, 1.0, 0.1)'}, .05)
        .staggerTo( this.containers , .2, { skewX:'0deg', paddingRight:'5px', }, .05);

        this.tl2
        .staggerTo( this.wrappers, 2, {boxShadow: '-0px 3px 4px rgba(0,0,0,.5)', });

        this.tl3
        .staggerTo( [this.inners], 1, {boxShadow: 'inset 5px 5px 10px rgba(255,255,255, 1)', backgroundColor:'red'} , 2);
	}

	render(){
        return (
            <section className="ss-container" >
                {
                    ServicesList.map( (x, index) => (
                        <div  ref={div => this.containers[index] = div } className={"service-container service-cuntainer " } key={index}>
                            <div ref={div => this.wrappers[index] = div }  className="wrapper wrupper ">
                                <div ref={div => this.inners[index] = div } className={"inner onher" }>
                                    <ServiceIntro/>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </section>
        ) 	
	}
}

export default ServiceSection;