import React from 'react';

class Hex {
  constructor(opts) {
    if (!(this instanceof Hex)) { return new Hex(opts); }
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

  createPolygon(size, sides) {

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

  createGrid(){
    var hex = <use x={x} y={y} fill={fill} className="hex" href={"hex" + this.instance} />,
        odd = false,
        size = this.opts.size + this.opts.spacing,
        grid = '',
        total = this.opts.rows * this.opts.cols,
        count = 0,
        x, y, i, j, fill;

    for ( i = 0; i < this.opts.rows; i++ ){
      odd = i % 2;
      y = i * (size * 0.87) + this.opts.offsetY;

      for ( j = 0; j < this.opts.cols + (odd ? 1 : 0); j++ ){
        x = j * size + (odd ? -size / 2 : 0 ) + this.opts.offsetX;
        count++;

        fill = 'hsla('+Math.round((count / total) * 50)+', 80%, ' + Math.round((Math.random()*15) + 40) +'%, 1)';
        
        grid += <use x={x} y={y} fill={fill} className="hex" href={"hex" + this.instance} />
        
       // grid += hex.replace('{{x}}',x).replace('{{y}}',y).replace('{{fill}}',fill);
      }
    }
    console.log(grid)
    return grid;
  }

createGrid(){
  
  let odd = false,
  size = this.opts.size + this.opts.spacing,
  grid = '',
  total = this.opts.rows * this.opts.cols,
  count = 0,
  x, y, i, j, fill;

  // for ( i = 0; i < this.opts.rows; i++ ){
  //   odd = i % 2;
  //   y = i * (size * 0.87) + this.opts.offsetY;

  //   for ( j = 0; j < this.opts.cols + (odd ? 1 : 0); j++ ){
  //     x = j * size + (odd ? -size / 2 : 0 ) + this.opts.offsetX;
  //     count++;

  //     fill = 'hsla('+Math.round((count / total) * 50)+', 80%, ' + Math.round((Math.random()*15) + 40) +'%, 1)';
      
  //     return <use x={x} y={y} fill={fill} className="hex" href={"hex" + this.instance} />
  //   }
  // }
  Array(this.opts.rows).map((rows, i) => {
    odd = i % 2;
    y = i * (size * 0.87) + this.opts.offsetY;

    Array(this.opts.cols).map((cols, j) => {
      x = j * size + (odd ? -size / 2 : 0 ) + this.opts.offsetX;
      count++;
      fill = 'hsla('+Math.round((count / total) * 50)+', 80%, ' + Math.round((Math.random()*15) + 40) +'%, 1)';
      return <use x={x} y={y} fill={fill} className="hex" href={"hex" + this.instance} />
    })
  })
}

  createSVG(){
    let size = this.opts.size + this.opts.spacing;

    console.log(this.createGrid())

    return (
     <svg  xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox={"0 0 "+(size + this.opts.cols)+" "+(size + this.opts.rows * 0.88)}>
        <defs>
          {this.createPolygon(this.opts.size)}
        </defs>
          
      </svg>
    )


    // var div = React.createElement('div'),
    //     size = this.opts.size + this.opts.spacing;

    // div.innerHTML = '<svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 '
    //   + (size * this.opts.cols) + ' '
    //   + (size * this.opts.rows * 0.88) +'">'

    //   + '<defs>'
    //   + this.createPolygon(this.opts.size)
    //   + '</defs>'
    //   + this.createGrid()
    //   + '</svg>';
    
    // return div.children[0];
  }
  
}

export default Hex;