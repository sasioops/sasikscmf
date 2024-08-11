import React from "react";

class Footer extends React.Component {
    render() {
        return(
            <div className="footer-cont">
                <br/>
                <br/>
                <div className="row">
                    <div className="col-md-3">
                    <a href="./home"><img className="footer-img" src="./sole.png" /></a>

                    </div>
                    <div className="col-md-2 footer-two-col">
                        <a className="footer-services" href="./cyberservice">Cyber Security</a>
                        <br/>
                        <a className="footer-services" href="./dataservices">Data Science</a>
                        <br/>
                        <a className="footer-services" href="./cloudservice">Cloud Computing</a>
                        <br/>
                        <a className="footer-services" href="./webservice">Web Devlopment</a>
                        <br/>
                        <a className="footer-services" href="./uiuxservice">UI/UX Design</a>
                        <br/>
                        <a className="footer-services" href="./threedservice">3D Designing</a>
                    </div>
                    <div className="col-md-1">
                        <a className="footer-nav" href="./home">Home</a>
                        <br/>
                        <a className="footer-nav" href="./services">Services</a>
                        <br/>
                        <a className="footer-nav" href="./courses">Courses</a>
                        <br/>
                        <a className="footer-nav" href="./career">Careers</a>
                        <br/>
                        <a className="footer-nav" href="./contact">Contact</a>
                        <br/>
                        <a className="footer-nav" href="./about">About Us</a>
                    </div>
                    <div className="col-md-2 con-foo">
                        <p className="last-col">Contact Us</p>
                        <p className="phone-footer">+91 9652691508</p>
                        <p className="mail-footer">Dawnversetech@gmail.com</p>
                        <h1 className="stay">Stay in touch</h1>
                        <a href="#" class="fa fa-facebook"></a>
                        <a href="https://www.instagram.com/Dawnverse_tech/?utm_source=ig_web_button_share_sheet&igshid=MmVlMjlkMTBhMg==" class="fa fa-instagram"></a>
                        <a href="#" class="fa fa-linkedin"></a>
                        <a href="#" class="fa fa-google"></a>
                    </div>
                    <div className="col-md-3">
                    <iframe className="maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12624.851902345446!2d78.35020646162253!3d17.469918743248876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93c92849a36b%3A0xde0dc034905512fa!2sKondapur%2C%20Telangana!5e0!3m2!1sen!2sin!4v1701244595151!5m2!1sen!2sin" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <p className="copy-rights">© Copyrights 2023 Dawnverse Technologies India. All Rights Reserved.</p>
                <a className="footer-polic" href="#">Privacy Policy</a>
                <a className="footer-policy" href="#">Terms & Conditions</a>
                <a className="footer-policy" href="#">Accessibility</a>
                <a className="footer-policy" href="#">Cookie Preferences</a>
                <br/>
            </div>
        )
    }
}

export default Footer