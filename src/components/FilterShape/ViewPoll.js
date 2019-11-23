import React from 'react';


function ViewPoll() {
    const opts = React.useState({
        W: window,
        D: document,
        winHeight:window.innerHeight,
        winScroll:window.scrollY,
        rAF: W.requestAnimationFrame || W.mozRequestAnimationFrame || W.webkitRequestAnimationFrame || W.msRequestAnimationFrame || W.oRequestAnimationFrame || function(callback) { W.setTimeout(callback, 20) }
    })

    function onResize(){
        winHeight = W.innerHeight;
    }
}
        