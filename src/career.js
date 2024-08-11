import React from "react";
import {dataFunctions} from "./data";
import Footer from "./footer";
import Navbar from "./Navbar";

class Careers extends React.Component {
    state = {
        careersDetails : null
    }

    async componentDidMount () {
        const careersDetails = await dataFunctions.getcareerDetails();
        this.setState({careersDetails:careersDetails})
    }

    render() {
        if(this.state.careersDetails!=null) {
            return (
                <div>
                    {this.state.careersDetails.map((item,index) => (
                        <React.Fragment key={index}>
                            <div>
                            <Navbar />
                                <div className="carrer-cont-page">
                                    <img className="load" src="./load.png" />
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

export default Careers