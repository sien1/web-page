import React from 'react';
import './BaseLayout.css';
import { ServiceSection, ServiceSectionMobile } from '../components';


const BaseLayout =  (props) => {
    return (
        <div className="base-layout">
            <div className="base-grid">
                <div className="a">
                    {
                        window.innerWidth < 600 ? <ServiceSectionMobile/> : <ServiceSection/>
                    }
                </div>
            </div>
        </div>
    );
}

export default BaseLayout;