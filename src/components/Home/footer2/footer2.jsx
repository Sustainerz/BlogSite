import React from "react";
import "./footer2.css"
import { FaFacebookF } from "react-icons/fa"
import { SiInstagram } from "react-icons/si"
import { FaLinkedinIn } from "react-icons/fa"
import { AiOutlineTwitter } from "react-icons/ai"
import { FaRedditAlien } from "react-icons/fa"
import { AiOutlineCopyright } from "react-icons/ai"

const Footer2 = () => {
    return(
        <div className="footer">
            <div className="sb__footer section__padding">
                <div className="sb__footer-links">
                    <div className="sb__footer-links_div">
                        <h4>For Business</h4>
                        <a href="/#">
                            <p>Employer</p>
                        </a>
                        <a href="/#">
                            <p>Contact Us</p>
                        </a>
                        <a href="/#">
                            <p>About Us</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Support</h4>
                        <a href="/#">
                            <p>FAQs</p>
                        </a>
                        <a href="/#">
                            <p>Rate Us</p>
                        </a>
                        <a href="/#">
                            <p>Donate</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Partners</h4>
                        <a href="/#">
                            <p>FastDev</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Creators</h4>
                        <a href="/#">
                           <p>M.Hashim Fakhar</p> 
                        </a>
                        <a href="/#">
                            <p>Muhammad Abdullah</p>
                        </a>
                        <a href="/#">
                            <p>M.Abdullah Naeem</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Coming soon on</h4>
                        <div className="socialmedia">
                            <div className="sm1"><a href="/#"><FaFacebookF/></a></div>
                            <div className="sm2"><a href="/#"><SiInstagram/></a></div>
                            <div className="sm3"><a href="/#"><FaLinkedinIn/></a></div>
                            <div className="sm4"><a href="/#"><AiOutlineTwitter/></a></div>
                            <div className="sm5"><a href="/#"><FaRedditAlien/></a></div>
                        </div> 
                    </div>
                </div>
                <hr></hr>
                <div className="sb__footer-below">
                    <div className="sb__footer-copyright">
                        <p>
                            Copyright <AiOutlineCopyright/>2023 Design by raptors 
                        </p>
                    </div>
                    <div className="sb__footer-below-links">
                        <a href="/#"><div><p>Terms & Conditions</p></div></a>
                        <a href="/#"><div><p>Privacy Policy</p></div></a>
                        <a href="/#"><div><p>Security</p></div></a>
                        <a href="/#"><div><p>Cookie Declaration</p></div></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer2