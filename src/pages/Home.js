import React, {useState} from 'react'
import './Home.css'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import HeroFlip from '../components/HeroFlip'
import { Link } from 'react-router-dom'
import header from '../Assets/headerTest.mp4'
import header1 from '../Assets/headerTest1.mp4'
import header2 from '../Assets/headerTest2.mp4'
import footerTest from '../Assets/footerTest.mp4'
import ouz2 from '../Assets/ouz2.png'
import port1 from '../Assets/port1.jpg'
import port2 from '../Assets/port2.jpg'
import port3 from '../Assets/port3.jpg'
import port4 from '../Assets/port4.jpg'
import trade2 from '../Assets/trade2.gif'
import trade from '../Assets/trade.gif'

const Home = () => {
    const headerText = "WHAT WE DO?"
    const text = "Though we specialize in foods commodities such as rice, sugar, corn KEMBA trades also a variety of products in large scale quantities such as alcohol, Oil, urea, and petroleum. We help our clients across the globe access any product they demand, while ensuring quality, affordability, and speed."
    const headerText2 = "WHO ARE WE?"
    const text2 = "Based in the US and with offices in Africa and the UAE, Kemba was established in 2018. Today, it is exporting commodities to parts of Africa, Middle East, Europe, Bermuda, and the Caribbean Islands."
    const headerText3 = "EXPERIENCED IN MULTIPLE SECTORS"
    const text3 = "Our vast experience in the sector gives us a wide view of the world economy. KEMBA works effectively with its partners and that is why we have become an indispensable supplier that understands our clients demands and can help them thrive in this evolving market."
    return (
        <Layout>
            <div className="home-container">
                <div className="main-header">
                    <video src={header2} autoPlay={true} playsInline loop muted />
                    <div className="main-header_text">
                        <h1>WELCOME TO KEMBA INC</h1>
                        <h2>(INTERNATIONAL GENERAL TRADE)</h2>
                    </div>
                </div>

                <div className="main-divider">
                    <h1> Keep scrolling down please</h1>
                    <h3>This is a text to describe what i will be describing next</h3>
                </div>

                <HeroFlip
                    className="Hero1"
                    pic={ouz2}
                    picAlt="Ousmane"
                    title={headerText2}
                    text={text2}
                    page="/about-us"
                    buttonName="Learn More"
                    // color="#fff0f1"
                    color="#FFF6F6"
                    marginFix="-5px;"
                />

                <Hero
                    pic={trade2}
                    picAlt="Globe"
                    title={headerText3}
                    text={text3}
                    page="/services"
                    buttonName="Explore"
                    color="#012831"
                    textColor="#FFF6F6"
                /> 

                <HeroFlip
                    pic={port2}
                    picAlt="Port2"
                    title={headerText}
                    text={text}
                    page="/about-us"
                    buttonName="Learn More"
                /> 

                <div className="footer-divider">
                    <video src={footerTest} autoPlay={true} playsInline loop muted />
                    <div className="footer-divider_text">
                        <h1> Keep scrolling down please</h1>
                        <h3>This is a text to describe what i will be describing next</h3>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Home

