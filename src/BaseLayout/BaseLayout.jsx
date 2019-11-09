import React, {useRef, useEffect} from 'react';
import './BaseLayout.css';
import { ServiceSection, ServiceSectionMobile } from '../components';
import { TweenMax, Power3 } from 'gsap';

const BaseLayout =  (props) => {
    let logoItem = useRef(null);

    useEffect(()=>{
        TweenMax.to(
            logoItem,
            3,
            {
                backgroundColor:'rgba(0,0,0,.1)',
                y:0,
                ease:Power3.easeIn
            }
        )
    }, []);

    return (
        <div className="base-layout" ref={el => {logoItem = el}}>
            <div className="base-grid">
                <div className="a">
                    <ServiceSection />
                </div>
            </div>
        </div>
    );
}

export default BaseLayout;