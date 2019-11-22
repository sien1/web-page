import React, { Component } from 'react';
import './FilterShape.css';
import { TimelineLite, CSSPlugin } from "gsap/TimelineLite";
import Hex from './hex';

let hex = new Hex({cols: 6, rows: 50, size: 100, spacing: 20, offsetX: -5, });

class FilterShape extends Component {
    constructor(props){
        super(props);

        this.inners = [];
        this.tl3 = new TimelineLite({ paused: false });
        this.svgs = '';
        
    }

    componentDidMount(){
        this.tl3
        .staggerTo( [this.inners], 3, {boxShadow: 'inset 5px 5px 10px rgba(255,255,255, 1)', backgroundColor:'blue'} , 30);
	}

    render(){
        return (
            <div style={{float: 'left', width: '100%', height:'100%', margin:'0 auto', float:'none'}}>
                <div className="hexagon-container" style={{color:'white'}}>
                    {
                        hex.createSVG()
                    }
                </div>
            </div>
        )
    }
}

export default FilterShape;