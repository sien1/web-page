import React from 'react';
import './Container.css'
import  FilterShape  from '../FilterShape/FilterShape.jsx';

const Container  = () => {
    return(
    
        <div className="container">

            <FilterShape/>
        

            <div className="container-roam">
                <div className="header-center">
                    <div><img src="sien-icon.svg" alt=""/></div>
                    <label htmlFor="" style={{color:'white'}}>SIEN</label>
                </div>
            </div>
        </div>
        
    );
}

export default Container;