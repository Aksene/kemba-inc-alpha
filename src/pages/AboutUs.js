import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import HeroFlip from '../components/HeroFlip'
import DualLinkHero from '../components/DualLinkHero'

import ouz1 from '../Assets/ouz1.png'
import ouz2 from '../Assets/ouz2.png'
import kemba1 from '../Assets/kemba1.png'
import port4 from '../Assets/port4.jpg'
import port1 from '../Assets/port1.jpg'
import officeTeam from '../Assets/officeTeam.png'


import './AboutUs.css'


const AboutUs = () => {
    const headerText = "ABOUT KEMBA Inc"
    const text = "Based in the US and with offices in Africa and the UAE, Kemba was established in 2018. Today, it is exporting commodities to parts of Africa, Middle East, Europe, Bermuda, and the Caribbean Islands."
    // const headerText2 = "What We do?"
    const text2 = "Though we specialize in foods commodities such as rice, sugar, corn KEMBA trades also a variety of products in large scale quantities such as alcohol, Oil, urea, and petroleum. We help our clients across the globe access any product they demand, while ensuring quality, affordability, and speed."
    const headerText3 = "MEET OUR CEO: Cheikh Ousman Ndiaye"
    const text3 = `Cheikh Ousman Ndiaye is the CEO and founder of KEMBA INC which has offices in the USA, Dubai, and
    Senegal with strategic partners in Asia and Europe. He is a graduate of Salem State University, Boston
    and with a degree in International Business and Finance. He is a prominent Senegalese American
    entrepreneur with extensive international experience in general trading and in international business.
    
    With strong ambitions of being a leader in the commodities trading, and assisting small African
    companies for 10 years, Cheikh Ousman Ndiaye is passionate about supporting companies and working
    with colleagues around the world.
    Our ambitions are to become one of the leaders in general trading and specially in Africa where we are
    looking to lower the costs of many products.`
    
    return (
        <Layout>
            <div className="aboutUs-container">
                <div className="aboutUs-header">
                    <img src={ouz2} alt="Ouz" className='aboutUs-hero_img' />
                    <div className="aboutUs-header_text">
                        <h1>About Us</h1>
                        <h2>Who Are We?</h2>
                    </div>
                </div>

                {/* Install npm install --save react-router-hash-link
                To enable anchor links */}

                <div id="about">
                    <HeroFlip
                        className="Hero1"
                        pic={port4}
                        picAlt="Port Pic"
                        title={headerText}
                        text={text}
                        // color="#fff0f1"
                        color="#FFF6F6"
                        marginFix="-5px;"
                        jumpID="about"
                    />
                </div>

                <div id="aboutExtra">
                    <Hero
                        className="Hero2"
                        pic={kemba1}
                        picAlt="Goods"
                        text={text2}
                        // color="#fff0f1"
                        color="#FFF6F6"
                        marginFix="-5px;"
                    />
                </div>

                <div id="ceo">
                     <HeroFlip
                        className="Hero2"
                        pic={ouz1}
                        picAlt="Ousmane"
                        title={headerText3}
                        text={text3}
                        page="/team"
                        buttonName="Meet the Team"
                        // color="#fff0f1"
                        color="#FFF6F6"
                        marginFix="-5px;"
                    />
                </div>
               

                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

                <DualLinkHero
                    className="dualLinkHero"
                    pic2 = {port1}
                    pic1 = {officeTeam}
                    button2 = "Services"
                    button1 = "Meet The Team"
                    link2 = "/services"
                    link1 = "/team"
                />

            </div>
        </Layout>
    )
}

export default AboutUs
