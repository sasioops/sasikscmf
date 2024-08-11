import React from "react";
import { Link } from "react-router-dom";
import {dataFunctions} from "./data";
import Footer from "./footer";
import Navbar from "./Navbar";

class Courses extends React.Component {
    state ={
        courseDetails : null
    }

    async componentDidMount () {
        const courseDetails = await dataFunctions.getcourseDetails();
        this.setState({courseDetails:courseDetails})
    }

    render() {
        if(this.state.courseDetails!=null) {
            return(
                <div>
                    {this.state.courseDetails.map((item,index) => (
                        <React.Fragment key={index}>
                            <div>
                                <Navbar />
                                <div className="cour-cont">
                                    <h1 className="cour-title">Welcome to <strong>Dawnverse</strong>  Training! <p className="cour-para">What would you like to learn today?</p></h1>
                                </div>
                                <p className="building">{item.building} <a className="build-link" href="#">Learn more &rarr; </a></p>
                                <hr/>
                                <p className="skills">{item.skills}</p>
                                <div className="row">
                                    <div className="col-md-2 courses-cards">
                                        <h1 className="course-name">{item.courdata}</h1>
                                        <p className="course-info">{item.courdatainfo}</p>
                                        <a className="explore-link" href="#">{item.explore} &rarr;</a>
                                    </div>
                                    <div className="col-md-2 courses-cards">
                                        <h1 className="course-name">{item.courcyber}</h1>
                                        <p className="course-info">{item.courcyberinfo}</p>
                                        <a className="explore-link" href="#">{item.explore} &rarr;</a>
                                    </div>
                                    <div className="col-md-2 courses-cards">
                                        <h1 className="course-name">{item.courcloud}</h1>
                                        <p className="course-info">{item.courcloudinfo}</p>
                                        <a className="explore-link" href="#">{item.explore} &rarr;</a>
                                    </div>
                                    <div className="col-md-2 courses-cards">
                                        <h1 className="course-name">{item.ai}</h1>
                                        <p className="course-info">{item.aiinfo}</p>
                                        <a className="explore-link" href="#">{item.explore} &rarr;</a>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-2 courses-cards">
                                        <h1 className="course-name">{item.web}</h1>
                                        <p className="course-info">{item.courwebinfo}</p>
                                        <a className="explore-link" href="#">{item.explore} &rarr;</a>
                                    </div>
                                    <div className="col-md-2 courses-cards">
                                        <h1 className="course-name">{item.app}</h1>
                                        <p className="course-info">{item.appinfo}</p>
                                        <a className="explore-link" href="#">{item.explore} &rarr;</a>
                                    </div>
                                    <div className="col-md-2 courses-cards">
                                        <h1 className="course-name">{item.uiux}</h1>
                                        <p className="course-info">{item.uiuxinfo}</p>
                                        <a className="explore-link" href="#">{item.explore} &rarr;</a>
                                    </div>
                                    <div className="col-md-2 courses-cards">
                                        <h1 className="course-name">{item.threed}</h1>
                                        <p className="course-info">{item.threedinfo}</p>
                                        <a className="explore-link" href="#">{item.explore} &rarr;</a>
                                    </div>
                                </div>
                                
                                <div className="row">
                                    <div className="col-md-2 courses-cards">
                                        <h1 className="course-name">{item.aptitude}</h1>
                                        <p className="course-info">{item.aptinfo}</p>
                                        <a className="explore-link" href="#">{item.explore} &rarr;</a>
                                    </div>
                                </div>
                                <hr/>
                                <Footer />
                            </div>
                        </React.Fragment>
                    ))}
                </div>
            )
        } else{
            return <div>Loading....</div>
        }
    }
}

export default Courses