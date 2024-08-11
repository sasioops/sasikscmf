import React from "react";
import {dataFunctions} from "./data";

class Scroll extends React.Component {

    state = {
        slideDetails : null
    }

    async componentDidMount() {
        const slideDetails = await dataFunctions.getsliderDetails();
        this.setState({slideDetails:slideDetails})
    }

    render () {
        if(this.state.slideDetails!==null) {
            return(
                <div>
                    {this.state.slideDetails.map((item,index) => (
                        <React.Fragment key={index}>
                            <div className="cont-one-slider">
                                <div id="carouselExampleCaptions" className="carousel slide">
                                    <div className="carousel-indicators indic-th">
                                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    </div>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src="./slideone.png" className="d-block slide-img-one" alt="..." />
                                            <div className="carousel-caption d-none d-md-block">
                                                <h1 className="slide-title-one">.</h1>                                                
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <img src="./slsix.png" className="d-block slide-img-two" alt="..."/>
                                            <div className="carousel-caption d-none d-md-block">
                                                <p className="sec-slide-info-one">{item.sectitle}</p>
                                                <p className="sec-slide-info-t">{item.des}</p>
                                                <p className="sec-slide-info-th">{item.rig}</p>
                                                
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <img src="./slidefour.png" className="d-block slide-img-thr" alt="..."/>
                                            <div className="carousel-caption d-none d-md-block">
                                                <h1 className="sliinfthr">{item.title}</h1>
                                                <h1 className="sliinfth">{item.ser}</h1>
                                                <p className="third-line-slide">{item.for}</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                            <div className="cont-middle">
                                <div className="row">
                                    <div className="col-md-5">
                                        <h1 className="cont-mid-title">{item.middletitle}</h1>
                                        <p className="cont-mid-info">{item.middleinfo}</p>
                                        <a className="mid-link" href="#">Know more &rarr;</a>
                                    </div>
                                    <div className="col-md-4">
                                        <img className="cont-mid-img" src="./meet.png" />
                                    </div>
                                </div>
                            </div>
                            <div className="cont-two-cards">
                                <h1 className="cont-two-title">Our Services</h1>
                                <div className="row">
                                    <div className="col-md-2 card-one">
                                        <h1 className="cyb-title">{item.cyb}</h1>
                                        <hr/>
                                        <p className="cyb-info">{item.infcyb}</p>
                                        <button className="but-learn-one">Know more...</button>
                                    </div>
                                    <div className="col-md-2 card-two">
                                        <h1 className="cyb-title">{item.data}</h1>
                                        <hr/>
                                        <p className="cyb-info">{item.infdata}</p>
                                        <button className="but-learn-two">Know more...</button>
                                    </div>
                                    <div className="col-md-2 card-thr">
                                        <h1 className="cyb-title">{item.cloud}</h1>
                                        <hr/>
                                        <p className="cyb-info">{item.infcloud}</p>
                                        <button className="but-learn-thr">Know more...</button>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-2 card-four">
                                        <h1 className="cyb-title">{item.web}</h1>
                                        <hr/>
                                        <p className="cyb-info">{item.infweb}</p>
                                        <button className="but-learn-four">Know more...</button>
                                    </div>
                                    <div className="col-md-2 card-five">
                                        <h1 className="cyb-title">{item.design}</h1>
                                        <hr/>
                                        <p className="cyb-info">{item.infdes}</p>
                                        <button className="but-learn-five">Know more...</button>
                                    </div>
                                    <div className="col-md-2 card-six">
                                        <h1 className="cyb-title">{item.thrd}</h1>
                                        <hr/>
                                        <p className="cyb-info">{item.infthrd}</p>
                                        <button className="but-learn-six">Know more...</button>
                                    </div>
                                </div>
                                <div className="cont-thr">
                                <div className="row">
                                    <div className="col-md-2 cont-thr-one">
                                        <img className="who-we" src="./whowe.jpg" />
                                    </div>
                                    <div className="col-md-2 cont-thr-two">
                                        <h1 className="who-title">{item.who}</h1>
                                        <p className="who-line">{item.adv}</p>
                                        <br/>
                                        <p className="who-pa">{item.whopa}</p>
                                        <a className="get" href="./about.js">{item.get} &rarr;</a>
                                    </div>
                                </div>
                            </div>
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

export default Scroll