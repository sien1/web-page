import React, { Component } from 'react';
import './FilterShape.css';
import { whileStatement } from '@babel/types';

class FilterShape extends Component {
    constructor(props){
        super(props);
    }

    render(){
        let hexArray = []
        let getGrid = () => {

        }

        return (
            <div style={{float: 'left', width: '100%', height:'100%', margin:'0 auto', float:'none'}}>
                <div class="hexagon-container">
                {
                    [...Array(112).keys()].map((x, index)=>{
                        return (
                            <div class="hexagon color-bootstrap">
                        
                            </div>
                        )
                    })
                }
                </div>
            </div>
            
        )
    }
}

export default FilterShape;