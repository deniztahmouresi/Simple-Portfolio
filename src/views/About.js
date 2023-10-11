/*icons*/
import {FaDownload} from "react-icons/fa";
/*css*/
import '../App.css';
import '../assets/css/views/About.css';
/*images*/
import chandler from "../assets/img/avatar_smoke.jpeg";
import chris from "../assets/img/avatar_chef.jpeg";
import rebecca from "../assets/img/avatar_girl.jpeg";

function About() {
    return(
        <div className="page-section about" id="myAbout">
                <h2 style={{
                    textAlign: "left",
                    margin: "10px 0"}}
                >
                    About
                </h2>
                <hr className="divider"/>
                <p>
                    Some text about me. I am a minimal Photographer with an apitude for intresting scenes. 
                    lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat.
                </p>
                <h3 style={{textAlign: "left", margin: "10px 0"}}>
                    My Skills
                </h3>
                <p style={{letterSpacing: "4px"}}>Photography</p>
                <div className="main-bar">
                    <div className="bar" style={{width: "95%"}}>95%</div>
                </div>
                <p style={{letterSpacing: "4px"}}>Design</p>
                <div className="main-bar" >
                    <div className="bar" style={{width: "85%"}}>85%</div>
                </div>
                <p style={{letterSpacing: "4px"}}>Photoshop</p>
                <div className="main-bar">
                    <div className="bar" style={{width: "80%"}}>80%</div>
                </div>
                <br/>
                <div className="static">
                    <div className="static-section">
                        <span style={{fontSize: "24px"}}>14+</span>
                        <br/>
                        Partners
                    </div>
                    <div className="static-section">
                        <span style={{fontSize: "24px"}}>55+</span>
                        <br/>
                        Projects Done
                    </div>
                    <div className="static-section">
                        <span style={{fontSize: "24px"}}>89+</span>
                        <br/>
                        Happy Clients
                    </div>
                    <div className="static-section">
                        <span style={{fontSize: "24px"}}>150+</span>
                        <br/>
                        Meetings
                    </div>
                </div>
                <a href={require("../files/CV.pdf")} download="CV">
                    <button className="button">
                        <FaDownload style={{display: "inline-block", marginRight: "5px"}}/>
                        Download Resume
                    </button>
                </a>
                <h3 style={{
                    textAlign: "left",
                    margin: "10px 0",
                    paddingTop: "24px",
                    paddingBottom: "24px"
                }}>
                    My Reputation
                </h3>
                <img className="avatar" src={chandler} alt='avatar'/>
                <p>
                    <span style={{fontSize: "18px", marginRight: "16px", color: "#000", textAlign: "justify"}}>Chandler Bing.</span>
                    Web Designer.
                </p>
                <p>Jane Doe is just awesome. I am so happy to have met her!</p>
                <br/>
                <img className="avatar" src={chris} alt='avatar'/>
                <p>
                    <span style={{fontSize: "18px", marginRight: "16px", color: "#000", textAlign: "justify"}}>Chris Fox.</span>
                    CEO at Mighty Schools.
                </p>
                <p>Jane Doe saved us from a web disaster.</p>
                <br/>
                <img className="avatar" src={rebecca} alt='avatar'/>
                <p>
                    <span style={{fontSize: "18px", marginRight: "16px", color: "#000", textAlign: "justify"}}>Rebecca Flex.</span>
                    CEO at Company.
                </p>
                <p>No one is better than Jane Doe.</p>
                <br/>
                <h3 style={{
                    textAlign: "left",
                    margin: "10px 0",
                    paddingTop: "16px",
                    paddingBottom: "16px"
                }}>
                    My Price
                </h3>
                <div className="price-section">
                    <div className="price-table">
                        <ul className="table">
                            <li className="table-header">Basic</li>
                            <li className="table-data">Web Design</li>
                            <li className="table-data">Photography</li>
                            <li className="table-data">5G Storage</li>
                            <li className="table-data">Mail Support</li>
                            <li className="table-data">
                                <h2>$ 10</h2>
                                <span style={{opacity: "0.60"}}>per month</span>
                            </li>
                            <li className="table-footer">
                                <a href={'#signup'}>
                                    <button className="button signUp-button"> Sign Up</button>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="price-table">
                        <ul className="table">
                            <li className="table-header" style={{backgroundColor: "#000"}}>Basic</li>
                            <li className="table-data">Web Design</li>
                            <li className="table-data">Photography</li>
                            <li className="table-data">50G Storage</li>
                            <li className="table-data">Endless Support</li>
                            <li className="table-data">
                                <h2>$ 25</h2>
                                <span style={{opacity: "0.60"}}>per month</span>
                            </li>
                            <li className="table-footer">
                                <a href={'#signup'}>
                                    <button className="button signUp-button"> Sign Up</button>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

    );
}

export default About;