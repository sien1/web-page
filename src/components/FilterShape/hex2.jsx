import React, {Component} from 'react';
import './hex.less';

class HexTwo extends Component {
    constructor(opts){
        super();
        if (!(this instanceof HexTwo)) { return new HexTwo(opts); }
        this.opts = {
            cols: 6,
            rows: 6,
            spacing: 0,
            size: 300,
            offsetX: 0,
            offsetY: 0
        };

        for (var key in opts) {
        if ( opts.hasOwnProperty(key) ) { this.opts[key] = opts[key]; }
        }
        this.instance = Math.round(Math.random() * 2000);
    }

    createPolygon(size, sides){
        sides = sides || 6;
        size = size || 150;
        size = size * 0.59;
    
        var i = sides,
            points = [];
    
        while (i--) {
            points.push(
            Math.round(size + size * Math.sin(i * (Math.PI * 2) / sides))
            +','+
            Math.round(size + size * Math.cos(i * (Math.PI * 2) / sides))
            );
        }
    
        return <polygon id={"hex" + this.instance} points={points.join(' ')}></polygon>
    }

    createSVG(){

    }

    render () {
        return this.createSVG()
    }
}

export default HexTwo;