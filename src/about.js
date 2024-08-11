import React from "react";
import { Link } from "react-router-dom";
import {dataFunctions} from "./data";
import Footer from "./footer";
import Navbar from "./Navbar";

class About extends React.Component {
    state = {
        aboutDetails : null
    }

    async componentDidMount () {
        const aboutDetails = await dataFunctions.getaboutDetails();
        this.setState({aboutDetails:aboutDetails})
    }

    render() {
        if(this.state.aboutDetails!=null) {
            return(
                <div>
                    {this.state.aboutDetails.map((item,index) => (
                        <React.Fragment key={index}>
                            <div>
                                <Navbar />
                                <div className="about-cont">
                                    .
                                </div>
                                <p className="building-abt">{item.abtti} <a className="build-link-abt" href="#">Learn more &rarr; </a></p>
                                <hr/>
                                <div className="about-info">
                                    <div className="row">
                                        <div className="col-md-3 side-bar-one">
                                            <div className="side-cont-one">
                                            <img className="side-img" src="./sidem.jpeg" />
                                            <p className="side-title">{item.cor}</p>
                                            <p className="side-info">{item.imp}</p>
                                            <p className="side-infom">{item.infoside}</p>
                                            </div>
                                        </div>
                                        <div className="col-md-8 side-two">
                                            <p className="about-para">{item.aboutinfo}</p>
                                            <p className="about-para">{item.abtinfotwo}</p>
                                        </div>
                                    </div>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <hr/>
                                    <div className="row">
                                        <div className="col-md-5">
                                            <div className="what-we">
                                            <p className="what">{item.what}</p>
                                            <p className="we">{item.we}</p>
                                            <p className="we">{item.wetwo}</p>
                                            <img className="do-img" src="./do.jpeg" />
                                            </div>
                                        </div>
                                        <div className="col-md-5 accor">
                                            <div className="accord">
                                            <p className="freq">{item.freq}</p>
                                            <div class="accordion accordion-flush" id="accordionFlushExample">
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header">
                                                    <button class="accordion-button collapsed ques-acc" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                        What does Dawnverse do today ?
                                                    </button>
                                                    </h2>
                                                    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                                    <div class="accordion-body ques-acc">{item.one}</div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header">
                                                    <button class="accordion-button collapsed ques-acc" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                        Does Dawnverse have goals fro sustainability ?
                                                    </button>
                                                    </h2>
                                                    <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                                    <div class="accordion-body ques-acc">{item.two}</div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header">
                                                    <button class="accordion-button collapsed ques-acc" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                                        What is the future of Dawnverse ?
                                                    </button>
                                                    </h2>
                                                    <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                                    <div class="accordion-body ques-acc">{item.thr}</div>
                                                    </div>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                    <br/>
                                    <br/>
                                    <div className="cont-three">
                                        <p className="title-about-three">{item.can}</p>
                                        <p className="para-about-three">{item.do}</p>
                                    </div>
                                </div>
                                <Footer />
                            </div>
                        </React.Fragment>
                    ))}
                </div>
            )
        } else {
            return <div>Loading...</div>
        }
    }
}

export default About