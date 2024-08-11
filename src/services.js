import React from "react";
import { Link } from "react-router-dom";
import {dataFunctions} from "./data";
import Footer from "./footer";
import Navbar from "./Navbar";

class Services extends React.Component {
    state = {
        serviceDetails : null
    }

    async componentDidMount() {
        const serviceDetails = await dataFunctions.getserviceDetails();
        this.setState({serviceDetails:serviceDetails})
    }

    render() {
        if(this.state.serviceDetails!=null) {
            return(
                <div>
                    {this.state.serviceDetails.map((item,index) => (
                        <React.Fragment key={index}>
                            <div>
                                <Navbar />
                                <div className="ser-cont">
                                    <h1 className="serv-title">.</h1>
                                </div>
                                <h1  className="service-title">{item.services}</h1>
                                <div className="row services-one">
                                    <div className="col-md-2 ser-one">
                                        <img className="web-d" src="./webde.jpg" />
                                    </div>
                                    <div className="col-md-5 ser-two">
                                        <h1 className="Web-title">WEB DEVELOPMENT</h1>
                                        <p className="web-info">{item.webdevservices}</p>
                                        <a className="web-button" href="./webservice">Know more</a>
                                    </div>
                                </div>
                                <div className="row services-one">
                                    <div className="col-md-2 ser-one">
                                        <img className="web-d" src="./appd.jpg" />
                                    </div>
                                    <div className="col-md-5 ser-two">
                                        <h1 className="Web-title">APP DEVELOPMENT</h1>
                                        <p className="web-info">{item.appdevservices}</p>
                                        <a className="web-button" href="./appmore">Know more..</a>
                                    </div>
                                </div>
                                <div className="row services-one">
                                    <div className="col-md-2 ser-one">
                                        <img className="web-d" src="./cyb.jpg" />
                                    </div>
                                    <div className="col-md-5 ser-two">
                                        <h1 className="Web-title">CYBER SECURITY</h1>
                                        <p className="web-info">{item.cyberservices}</p>
                                        <a className="web-button" href="./cyberservice">Know more</a>
                                    </div>
                                </div>
                                <div className="row services-one">
                                    <div className="col-md-2 ser-one">
                                        <img className="web-d" src="./datas.jpg" />
                                    </div>
                                    <div className="col-md-5 ser-two">
                                        <h1 className="Web-title">DATA SCIENCE</h1>
                                        <p className="web-info">{item.dataservices}</p>
                                        <a className="web-button" href="./dataservices">Know more</a>
                                    </div>
                                </div>
                                <div className="row services-one">
                                    <div className="col-md-2 ser-one">
                                        <img className="web-d" src="./cloud.jpg" />
                                    </div>
                                    <div className="col-md-5 ser-two">
                                        <h1 className="Web-title">CLOUD COMPUTING</h1>
                                        <p className="web-info">{item.cloudservices}</p>
                                        <a className="web-button" href="./cloudservice">Know more</a>
                                    </div>
                                </div>
                                <div className="row services-one">
                                    <div className="col-md-2 ser-one">
                                        <img className="web-d" src="./thrd.jpg" />
                                    </div>
                                    <div className="col-md-5 ser-two">
                                        <h1 className="Web-title">3D DESIGN</h1>
                                        <p className="web-info">{item.thrdeservices}</p>
                                        <a className="web-button" href="./threedservice">Know more</a>
                                    </div>
                                </div>
                                <div className="row services-one">
                                    <div className="col-md-2 ser-one">
                                        <img className="web-d" src="./ui.jpg" />
                                    </div>
                                    <div className="col-md-5 ser-two">
                                        <h1 className="Web-title">UI/UX DESIGN</h1>
                                        <p className="web-info">{item.usservices}</p>
                                        <a className="web-button" href="./uiuxservice">Know more</a>
                                    </div>
                                </div>
                                <hr/>
                                <Footer />
                            </div>
                        </React.Fragment>
                    ))}
                </div>
            )
        } else {
            return <div>Loading....</div>
        }
    }
}

export default Services