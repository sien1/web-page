import React from 'react';
import './ServiceSection.css';
import ServicesList from './Services.json';

const ServiceSection = () => {

    let styleBoxContainer = {
        backgroundColor:'transparent',
        height:'350px',
        marginTop: '0px',
        width:'120px',
        margin: '0',
        boxSizing: 'border-box',
        transform: 'skewX(-10deg)',
        float:'left', 
        position:'relative',
        overflow:'hidden',
        padding:'3px'
    };

    let styleBoxWrapper = {
        backgroundColor:'red',
        height:'320px',
        marginTop: '0px',
        width:'100%',
        margin: '0',
        boxSizing: 'border-box',
        transform: 'skewY(0deg)',
        float:'left', 
        position:'absolute',
        boxShadow:'4px 4px 3px rgba(0,0,0,.5)'

    };

    return (
        <section className="ss-container">
            <div>
                {
                    ServicesList.map( x => (
                        <div style={{...styleBoxContainer, ...x}}>
                            <div style={{...styleBoxWrapper, ...x}}>
                                <div className='wrapper'>
                                    
                                </div>
                            </div>
                        </div>
                    ))
                }
                
            </div>
        </section>
    );
}

export default ServiceSection;