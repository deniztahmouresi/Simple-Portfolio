/*icons*/
import {FaDownload} from "react-icons/fa";
/*css*/
import '../App.css';
import '../assets/css/views/Portfolio.css';
/*images*/
import Photographer from "../assets/img/profile_pic.jpeg";

import wedding from "../assets/img/wedding.jpeg";
import rocks from "../assets/img/rocks.jpeg";
import sailboat from "../assets/img/sailboat.jpeg";
import underwater from "../assets/img/underwater.jpeg";
import typedevice from "../assets/img/typedevice.jpeg";
import girl from  "../assets/img/girl.jpeg";

function Portfolio(){
    return(
        <div>
            <div style={{padding: "128px 16px", textAlign: "center"}}>
                <h1 style={{fontSize: "64px"}}>
                    <b>Jane Doe</b>
                </h1>
                <p>
                    Photographer
                </p>
                <img className="profile-img" src={Photographer} alt='profile_picture' />
                <a href={require("../files/CV.pdf")} download="CV">
                    <button className="button">
                        <FaDownload style={{display: "inline-block", marginRight: "5px"}}/>
                        Download Resume
                    </button>
                </a>
            </div>
            <div className="page-section" id="myPortfolio">
                <h2 style={{
                    textAlign: "left",
                    marginBottom: "0"}}
                >
                    My Portfolio
                </h2>
                <h4 style={{textAlign: "left"}}>
                    Explore Recent Projects
                </h4>
                <hr className="divider"/>
                <div className="photo-gallery"
                >
                    <div className="thumbnail"
                    >
                        <img className="photo" src={wedding} alt={'wedding'}/>
                        <img className="photo" src={rocks} alt={'rocks'}/>
                        <img className="photo" src={typedevice} alt={'typedevice'}/>
                    </div>
                    <div className="thumbnail">
                        <img className="photo" src={underwater} alt={'underwater'}/>
                        <img className="photo" src={girl} alt={'girl'}/>
                        <img className="photo" src={sailboat} alt={'sailboat'}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;