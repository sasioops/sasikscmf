import React from "react"; 
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";
import Scroll from "./scroll";
import Footer from "./footer";

class Home extends React.Component {
    render() {
        return(
            <div>
                <BrowserRouter>
                    <Navbar />
                    <Scroll />
                    <Footer />
                </BrowserRouter>
            </div>
        )
    }
}

export default Home