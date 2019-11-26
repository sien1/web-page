import React from 'react';


function ViewPoll() {
    const opts = React.useState({
        selector: '',
        show: function(el){},
        hide: function(){},
        onlyAdd: false,
        class: 'in-view',
        W: window,
        D: document,
        winHeight:window.innerHeight,
        winScroll:window.scrollY,
        rAF: W.requestAnimationFrame || W.mozRequestAnimationFrame || W.webkitRequestAnimationFrame || W.msRequestAnimationFrame || W.oRequestAnimationFrame || function(callback) { W.setTimeout(callback, 20) }
    })

    React.useEffect(() => {
        const debounceHandleResize = debounce(() => {
            winHeight = opts.W.innerHeight;
        }, 1000);

        opts.W.addEventListener('resize', debounceHandleResize)

        return () => {
            opts.W.removeEventListener('resize', debounceHandleResize)
        } 
    })

    function viewPoll(opts) {
        if (!(this instanceof viewPoll)) { return new viewPoll(opts); }
        
        var selector;
        
        if ( typeof opts === 'string' ) {
          selector = opts;
        } else {
          for (var key in opts) {
            if ( opts.hasOwnProperty(key) ) { this.opts[key] = opts[key]; }
          }
          selector = opts.selector;
        }
        
        this.elems = Array.prototype.slice.call(D.querySelectorAll(selector)),
        this.count = this.elems.length;
        
        var i = this.count;
        while (i--) {
          this.elems[i]._visible = false;
        }
    
        W.addEventListener('resize', this.update.bind(this), false);
        D.addEventListener('scroll', this.update.bind(this), false);
        D.addEventListener('touchmove', this.update.bind(this), false);
        
        this.update();
      }
    
    
}
        