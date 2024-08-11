import React from "react";
import { Link } from "react-router-dom";
import {dataFunctions} from "./data";
import Footer from "./footer";
import Navbar from "./Navbar";

class Contact extends React.Component {
    state= {
        contactDetails : null
    }

    async componentDidMount () {
        const contactDetails = await dataFunctions.getcontactDetails();
        this.setState({contactDetails:contactDetails})
    }

    render() {
        if(this.state.contactDetails!=null) {
            return(
                <div>
                    {this.state.contactDetails.map((item,index) => (
                        <React.Fragment key={index}>
                            <div>
                                <Navbar />
                                    <div className="cont-cont">
                                        <h1 className="contact-vis">{item.titlecon}</h1>
                                        <h1 className="des-contact">{item.des}</h1>
                                        <p className="contact-info">{item.coninfo}</p>
                                        <p className="contact-infoo">{item.coninfoo}</p>
                                    </div>
                                    <div className="form-container">
                                        <div className="row">
                                            <div className="col-md-5 form-one">
                                                <br/>
                                                <h1 className="name">TELL US YOUR NAME:</h1>
                                                <input className="first-name" type="text" id="fname" name="fname" placeholder="First name:" /> <br/>
                                                <input className="last-name" type="text" id="lname" name="lname" placeholder="Last name:" />
                                                <h1 className="name">ENTER YOUR EMAIL:</h1>
                                                <input className="email-hol" type="email" id="email" placeholder="Eg: yyy@gmail.com" />
                                                <h1 className="name">ENTER YOUR NUMBER:</h1>
                                                <input className="phone" type="number" placeholder="Eg: 0000000000" />
                                                <h1 className="name">MESSAGE:</h1>
                                                <input className="msg" type="text" placeholder="Write us a message..." />
                                                <br/>
                                                <button className="button-contone">Send</button>
                                            </div>
                                            <div className="col-md-5 form-image">
                                                <h1 className="adr"><img className="loc" src="./loc.png" /> Address:</h1>
                                                <p className="address">{item.addres}</p>
                                                <p className="address">{item.addtwo}</p>
                                                <h1 className="pho">  <img className="call" src="./call.png" />Let's Talk:</h1>
                                                <p className="address">{item.num}</p>
                                                <h1 className="em">  <img className="mail" src="./mail.png" />General Support:</h1>
                                                <p className="address">{item.mail}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <br/>
                                    <br/>
                                    <hr/>
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

export default Contact