import {useState} from 'react';
/*views*/
import LeftSidebar from "./views/LeftSidebar";
import Portfolio from "./views/Portfolio";
import About from "./views/About";
import Contact from "./views/Contact";
/*components*/
import Footer from "./components/Footer";
/*icons*/
import { FaBars, FaTimes} from 'react-icons/fa';
/*css*/
import './App.css';

function App() {
    const [isActive, setIsActive] = useState(false);
    /*open and close menu handler*/
    const menuHandler = () => {
        setIsActive(current => !current);
    };
  return (
    <div>
      <body>
        <LeftSidebar />
        <span className="menu-bars" onClick={menuHandler}>
            <FaBars />
        </span>
        {isActive ?
            <div className="nav-bar">
                <span className="menu-button" onClick={menuHandler}>
                    <FaTimes />
                </span>
                <div className="menu">
                    <a href="#myHome" className="menu-item" onClick={menuHandler}>Home</a>
                    <a href='#myPortfolio' className="menu-item" onClick={menuHandler}>Portfolio</a>
                    <a href='#myAbout' className="menu-item" onClick={menuHandler}>About</a>
                    <a href='#myContact'className="menu-item" onClick={menuHandler}>Contact</a>
                </div>
            </div>
            :
            <div className="right-sidebar" id="myHome">
                <Portfolio />
                <About />
                <Contact />
                <Footer />
            </div>
        }
      </body>
    </div>
  );
}

export default App;
