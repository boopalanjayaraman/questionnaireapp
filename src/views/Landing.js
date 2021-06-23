import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Landing extends Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    &nbsp;
                </div>
                <div className="row">
                    <div className="col s12 m12 center">
                        <span>COMPONENT PROTOTYPES</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 m4">
                        <Link to="/regular" className="btn waves-effect" style={{width: "100%"}}>Regular Sub-section</Link>
                    </div>
                    <div className="col s12 m4">
                        <Link to="/horizontaltable" className="btn waves-effect" style={{width: "100%"}}>Horizontal Table Sub-section</Link>
                    </div>
                    <div className="col s12 m4">
                        <Link to="/verticaltable" className="btn waves-effect" style={{width: "100%"}}>Vertical Table Sub-section</Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 m4">
                        <Link to="/matrix" className="btn waves-effect" style={{width: "100%"}}>Matrix Sub-section</Link>
                    </div>
                    <div className="col s12 m4">
                        <Link to="/fullquestionnaire" className="btn pink accent2 waves-effect" style={{width: "100%"}}>All Types</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Landing;