import React from 'react';
import './Container.css'
import HexagonGrid from 'react-hexagon-grid';
import times from 'lodash/times';

const Container  = () => {
    let hexagons = times(160, id => id);   
    const renderHexagonContent = (hexagon) => {
        return (
          <text
            x="50%"
            y="50%"
            fontSize={100}
            fontWeight="lighter"
            style={{ fill: 'white' }}
            textAnchor="middle"
          >
            
          </text>
        );
    }
    const getHexProps = (hexagon) => {
        return ({
          style: {
            fill: 'rgba(1,1,1,.5)',
            stroke: ''
          },
          onClick: () => console.log(hexagon)
        });
    } 
    return(
        
        <div className="container">
            <HexagonGrid
                gridWidth={1870}
                gridHeight={1000}
                hexagons={hexagons}
                hexProps={getHexProps}
                renderHexagonContent={renderHexagonContent}
            />
            <div className="container-roam">
                {/* <div className="header-center">
                    <div><img src="sien-icon.svg" alt=""/></div>
                    <label htmlFor="" style={{color:'white'}}>SIEN</label>
                </div> */}
            </div>
        </div>
        
    );
}

export default Container;