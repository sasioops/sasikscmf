import React from "react";
import {dataFunctions} from "./data";
import Footer from "./footer";
import Navbar from "./Navbar";

class Webservice extends React.Component {
    state = {
        webserviceDetails : null
    }

    async componentDidMount () {
        const webserviceDetails = await dataFunctions.getwebserviceDetails();
        this.setState({webserviceDetails:webserviceDetails})
    }

    render() {
        if(this.state.webserviceDetails!=null) {
            return (
                <div>
                    {this.state.webserviceDetails.map((item,index) => (
                        <React.Fragment key={index}>
                            <div>
                            <Navbar />
                                <div className="carrer-cont">
                                    <h1 className="web-ser-title">{item.webserv}</h1>
                                    <p className="web-ser-inf">{item.titleinf}</p>
                                    <a className="read" href="#">Read more</a>
                                </div>
                                <p className="welcome">{item.welcome} <a className="wel" href="#">Connect  &rarr;</a></p>
                                <hr/>
                                <div className="web-ser-cont">
                                    <h1 className="main-t">{item.capabilities}</h1>
                                    <br/>
                                    <p className="front-title">{item.exp} <a className="sec-info">{item.one}</a> </p>
                                    <br/>
                                    <p className="front-title">{item.cli} <a className="sec-info">{item.two}</a> </p>
                                    <br/>
                                    <p className="front-title">{item.un} <a className="sec-info">{item.three}</a> </p>
                                    <br/>
                                    <p className="front-title">{item.on} <a className="sec-info">{item.four}</a> </p>
                                    <br/>
                                    <br/>
                                    <h1 className="join">{item.join}</h1>
                                    <br/>
                                    <p className="conn">{item.col}</p>
                                    <br/>
                                    <p className="connn">{item.emb}</p>
                                    <br/>
                                    <a className="go-back" href="./services">Go Back &larr;</a>
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

export default Webservice