import React from "react";

class Navbar extends React.Component {
    render() {
        return (
            <div className="nav-bar-1">
                <div className="row">
                    <div className="col-md-1">
                        <a href="./home"><img className="mainn-logo" src="./sol.png" width="120px" height="120px"></img></a>
                    </div>
                    <div className="col-md-1 home">
                        <a className="nav-link-one" href="./home">Home</a>
                    </div>
                    <div className="col-md-1 services">
                        <a className="nav-link-one" href="./services">Services</a>
                    </div>
                    <div className="col-md-1 courses">
                        <a className="nav-link-one" href="./courses">Courses</a>
                    </div>
                    <div className="col-md-1 careers">
                        <a className="nav-link-one" href="./career">Careers</a>
                    </div>
                    <div className="col-md-1 contact">
                        <a className="nav-link-one" href="./contact">Contact</a>
                    </div>
                    <div className="col-md-1 about">
                        <a className="nav-link-one" href="./about">About Us</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar

