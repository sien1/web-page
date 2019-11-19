import React, { Component } from 'react';
import './FilterShape.css';
import { whileStatement } from '@babel/types';
import { TimelineLite, CSSPlugin } from "gsap/TimelineLite";

class FilterShape extends Component {
    constructor(props){
        super(props);

        this.inners = [];
        this.tl3 = new TimelineLite({ paused: false });
    }

    componentDidMount(){
     

        this.tl3
        .staggerTo( [this.inners], 3, {boxShadow: 'inset 5px 5px 10px rgba(255,255,255, 1)', backgroundColor:'blue'} , 30);
	}

    render(){
        let hexArray = [] 
        let getGrid = () => {

        }

        return (
            <div style={{float: 'left', width: '100%', height:'100%', margin:'0 auto', float:'none'}}>
                <div className="hexagon-container">
                {
                    [...Array(6).keys()].map((x, index)=>{
                        return (
                            <div ref={div => this.inners[index] = div } className="hexagon color-bootstrap"  key={index}>
                        
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