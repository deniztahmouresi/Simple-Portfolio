/*icons*/
import {FaFacebook, FaInstagram, FaLinkedin, FaPinterest, FaSnapchat, FaTwitter} from "react-icons/fa";
/*css*/
import '../assets/css/views/Footer.css';

function Footer() {
    return(
        <footer className="footer">
            <FaFacebook className="social-media"/>
            <FaInstagram className="social-media"/>
            <FaSnapchat className="social-media"/>
            <FaPinterest className="social-media"/>
            <FaTwitter className="social-media"/>
            <FaLinkedin className="social-media"/>
        </footer>
    );
}

export default Footer;