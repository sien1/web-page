import React from 'react';
import './ServiceSection2.css';
import ServicesList from './Services.json';



let delay = (tag) => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            
        }, 1000);
    });
}

const ServiceSection = () => {
    return (
        <section className="ss-container">
            {   
                ServicesList.map( (x, index) => (
                    <div className={"service-container service-cuntainer " + x.classes} key={index}>
                        <div className={"wrapper wrupper " + x.classes}>
                            <div className={"inner onher " + x.classes}>
                                
                            </div>
                        </div>
                    </div>
                ))
            }
        </section>
    );
}


export default ServiceSection;