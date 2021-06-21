import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
    render(){
        return (
            <div className = "navbar-fixed">
                <nav className = "z-depth-0">
                    <div className = "nav-wrapper white">
                        <Link to="/" style={{
                            fontFamily: "monospace",
                            whiteSpace: "nowrap"
                        }}
                        className = "col s12 brand-logo center black-text">
                            <i className="material-icons" style={{ color: "#5abfd1"}}>question_answer</i>
                            <span >Questionnaire</span>
                        </Link>
                    </div>
                </nav>
            </div>
        );
    }
}


export default Navbar;