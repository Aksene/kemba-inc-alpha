import React, { useState, useEffect } from 'react'
import './Layout.css'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import abdousWorld from '../Assets/abdousWorld.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FaTwitter, FaInstagram } from "react-icons/fa";


const Layout = ({children}) => {
    const [showMenu, setShowMenu] = useState(false)
    const closeMobileMenu = () => setShowMenu(false);


    return (
        <div>
            <header className="header">
                <div className="header-image-container">
                    <Link to={"/"}>
                        {/* <img className="header-image" src={logo} alt="Slaymasters" /> */}
                        <p>Kemba Inc</p>
                    </Link>
                </div>

                <div className="menu-icon" onClick={() => setShowMenu(!showMenu)}>
                    {
                            showMenu ?
                            <FontAwesomeIcon
                            icon={faXmark}
                            onClick={() => setShowMenu(!showMenu)}
                            /> 
                            :                    
                            <FontAwesomeIcon
                            icon={faBars}
                            onClick={() => setShowMenu(!showMenu)}
                            />
                    }
                </div>



                <div className="header-links">
                    <ul className={showMenu ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item" >
                            <Link className={showMenu ? 'nav-links active' : 'nav-links'} onClick={closeMobileMenu} to={"/"}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item" >
                            <Link className={showMenu ? 'nav-links active' : 'nav-links'} onClick={closeMobileMenu} to={"/about-us"}>
                                About Us
                            </Link>
                        </li>
                        <li className="nav-item" >
                            <Link className={showMenu ? 'nav-links active' : 'nav-links'} onClick={closeMobileMenu} to={"/team"}>
                                Meet the Team
                            </Link>
                        </li>
                        <li className="nav-item" >
                            <Link className={showMenu ? 'nav-links active' : 'nav-links'} onClick={closeMobileMenu} to={"/services"}>
                                Services
                            </Link>
                        </li>
                        <li className="nav-item" >
                            <Link className={showMenu ? 'nav-links active' : 'nav-links'} onClick={closeMobileMenu} to={"/contact-us"}>
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>

            </header>

            <main>
                {children}
            </main>

            <footer>
                <div className="slaymaster-logo-bottom-container">
                        {/* <img className="slaymaster-logo-bottom" src={logo} alt="SlaymasterLogoBottom" /> */}
                        Kemba Inc
                </div>
                <div className="footer-links">
                    <div className="footer-aboutUs">
                        <ul>
                            <h3>About Us</h3>
                            <li className="footer-cat_links">
                                <a href="/about-us/#about">
                                        <span>Who We Are</span>
                                </a>
                            </li>
                            <li className="footer-cat_links">
                                <Link to="/about-us/#ceo">
                                        <span>Meet Our Ceo</span>
                                </Link>
                                
                            </li>
                            <li className="footer-cat_links">
                                <a href="/team">
                                    <span>The Team</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-links_services">
                        <ul>
                            <h3>Services</h3>
                            <li className="footer-cat_links">
                                <a href="/services">
                                    <span>Our Market</span>
                                </a>
                            </li>
                            <li className="footer-cat_links">
                                <a href="/services/#goods">
                                    <span>Goods</span>
                                </a>
                            </li>
                            <li className="footer-cat_links">
                                <div>
                                    <span>Certification</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-links_contact">
                        <ul>
                            <h3>Contact Information</h3>
                            <li className="footer-cat_links">
                                Number: <span> </span>
                                <a>
                                    <span>+1(978)xxx-xxxx</span>
                                </a>
                            </li>
                            <li className="footer-cat_links">
                                E-mail: <span> </span> 
                                <a href="mailto:kembacorp@gmail.com" target="_blank">
                                    <span>kembacorp@gmail.com</span>
                                </a>
                            </li>
                            <li className="footer-cat_links">
                                Address: <span> </span>
                                <a>
                                    <span>2222 Boylston St, Boston, MA, 01945</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-info">
                    <div className="footer-copyright">
                        <p className="footer-copyright-text">© 2023 KEMBA INC, ALL RIGHTS RESERVED.</p>
                    </div>
                    <div className="footer-signature">
                        <p className="footer-signature-text"> 
                            Powered by
                        </p>
                        <a href="http://abdous-world.vercel.app" target="_blank">
                            <img className="footer-signature-logo" src={abdousWorld} alt="Abdou's World" />
                        </a>

                    </div>
                    <div className="footer-icon-group">
                        <ul>
                            <li>
                                <Link to="//google.com" target='_blank'>
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link to="//twitter.com/" target='_blank'>
                                    <FaTwitter/>
                                </Link>
                            </li>
                            <li>
                                <Link to="//instagram.com/" target='_blank'>
                                    <FaInstagram/>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Layout
