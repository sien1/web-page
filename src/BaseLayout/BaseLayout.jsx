import React, {useRef, useEffect, Component} from 'react';
import './BaseLayout.css';
import { ServiceSection, ServiceSectionMobile, MultipleElements } from '../components';
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
                <div className="base-grid">
                    <div className="a">
                  
             
                        <Router>
                        <ul>
                            <li>
                                <Link to="/public">Public Page</Link>
                            </li>
                            <li>
                                <Link to="/hvac">Protected Page</Link>
                            </li>
                        </ul>
                            <Switch>
                                <Route path="/public">
                                    <ServiceSection/>
                                </Route>
                                <Route path="/hvac"> 
                                    <div>PERRO</div>
                                </Route>
                            </Switch>
                        </Router>
                    </div>
                </div>
            </div>
        )
    }
    
//     render()
//         return (
            
//         );
//     };
//    )
    
}


export default BaseLayout;