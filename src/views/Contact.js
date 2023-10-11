import {useRef, useState} from "react";
/*icons*/
import {FaEnvelope, FaMapMarker, FaPaperPlane, FaPhone} from "react-icons/fa";
/*css*/
import "../assets/css/views/Contact.css";
/*images*/
import map from "../assets/img/map.jpeg";

function Contact() {
    const [email, setEmail]=useState("");
    const [emailError, setEmailError]=useState(false);
    const form=useRef();
    /*regex for email validation*/
    const isEmail = (mail) =>
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(mail);
    const handleSubmit = (e) => {
        e.preventDefault();
        setEmailError(false);
        if (isEmail(email)) {
                //you can use sendForm function of '@emailjs/browser' in here for example.
                //EmailJS is a backend-as-a-service that gives you 
                //the tools to send emails to the users of your application
                //directly from your client or server-side code to fit your
                //business requirements. 
                //For more info visit: https://www.npmjs.com/package/@emailjs/browser
                // or https://www.emailjs.com/docs/sdk/installation/
            }
        else {
            setEmailError(true)
        };
    }
    return(
        <div className="page-section" id="myContact">
            <h2> Contact Me </h2>
            <hr className="divider"/>
            <div style={{marginTop: "16px", marginBottom: "16px", color: "#757575",}}>
                <p>
                    <FaMapMarker className="icon"/>
                    Chicago, US
                </p>
                <p>
                    <FaPhone className="icon" style={{rotate: "90deg"}}/>
                    Phone: +00 151515
                </p>
                <p>
                    <FaEnvelope className="icon" style={{verticalAlign: "middle"}}/>
                    Email: mail@mail.com
                </p>
                <img src={map} alt={'map'} style={{
                    filter: "grayscale(75%)",
                    width: "100%",
                    maxWidth: "100%",
                    height: "auto",
                    verticalAlign: "middle",
                    margin: "32px 0"
                }}/>
                <p id="signup">Let's get in touch. Send me a message:</p>
                <form ref={form} onSubmit={handleSubmit}>
                    <p>
                        <input className="form-input" type={'text'} placeholder={'Name'} required={true}
                               name={'from_name'} />
                    </p>
                    <p>
                        <input className="form-input" type={'text'} placeholder={'Email'} required={true}
                               name={'reply_to'} onChange={event => setEmail(event.target.value)}/>
                        {emailError && <label style={{color: "#757575"}}>Your email address is invalid</label>}
                    </p>
                    <p>
                        <input className="form-input" type={'text'} placeholder={'Subject'} required={true}
                               name={'subject'}/>
                    </p>
                    <p>
                        <input className="form-input" type={'text'} placeholder={'Message'} required={true}
                               name={'message'}/>
                    </p>
                    <p>
                        <button className="button" type="submit">
                            <FaPaperPlane style={{display: "inline-block", marginRight: "5px"}}/>
                            Send Message
                        </button>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Contact;