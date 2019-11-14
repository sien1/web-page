import React, {useRef, useEffect, Component} from 'react';
import './BaseLayout.css';
import { ServiceSection, ServiceSectionMobile, MultipleElements, Container } from '../components';
import { TweenMax, Power3 } from 'gsap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
  } from "react-router-dom"

class BaseLayout extends Component {
    constructor(props){
        super(props);
        this.background = null;
        this.logoItem = '';
    }
   
    render(){
        return(
            <div className="base-layout" ref={el => {this.logoItem = el}}>
                <div style={{backgroundImage:'url(ball.svg)', width:'100%', height:'100%', position:'absolute', top:0,left:0, boxSizing:'border-box'}}></div>

                <div className="base-grid">
                    <div className="header">
                        <div className="a"></div>
                        <div className="c"></div>
                    </div>
                    <div className="body">
                    </div>
                    {/* <div className="a"> 
                        <Router>
                            <Switch>
                                <Route path="/start">
                                    
                                </Route>
                                <Route path="/hvac"> 
                                    
                                </Route>
                            </Switch>
                        </Router>
                    </div> */}
                    <Container/>
                </div>
            </div>
        )
    }
}


export default BaseLayout;