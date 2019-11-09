import React, { Component } from "react";
import './ServiceSection2.css'
import { TimelineLite, CSSPlugin } from "gsap";


import ServicesList from './Services.json';

class ServiceSection extends Component {

	constructor(props){
		super(props);
		// cards, elements tha will be used in the tween
		this.cards = [];
		// the timeline instance
		this.tl = new TimelineLite({ paused: false });
	}

	componentDidMount(){
        this.tl
        .to( this.cards , .5, { autoAlpha: 1, y: -500 }, .5)
        .to( this.cards , 1, { autoAlpha: 1, y:  0, backgroundColor:'blue' }, 1);
	}

	render(){
		
        return <section className="ss-container" >
            {            
                ServicesList.map( (x, index) => (
                    <div  className={"service-container service-cuntainer " + x.classes} key={index}>
                        <div ref={div => this.cards[index] = div} className={"wrapper wrupper " + x.classes}>
                            <div className={"inner onher " + x.classes}>
                            
                            </div>
                        </div>
                    </div>
                ))
            }
        </section> 	
	}
}

export default ServiceSection;


// const ServiceSection = () => {
//     //     let item  = useRef(null);
        
//     //     useEffect(() => {
//     //         TweenMax.to(
//     //             item,
//     //             3,
//     //             {
//     //                 backgroundColor:'yellow',
//     //                 y:0,
//     //                 ease:Power3.easeIn
//     //             }
//     //         )
//     //     },[]);
        
//     //     return (
//     //         <section className="ss-container" >
//     //             {
//     //                 ServicesList.map( (x, index) => (
//     //                     <div  className={"service-container service-cuntainer " + x.classes} key={index}>
//     //                         <div  className={"wrapper wrupper " + x.classes}>
//     //                             <div className={"inner onher " + x.classes} ref={el => {item = el}}>
                                    
//     //                             </div>
//     //                         </div>
//     //                     </div>
//     //                 ))
//     //             }
//     //         </section>
//         );