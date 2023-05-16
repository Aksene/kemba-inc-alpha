import React from 'react'
import './Services.css'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import HeroFlip from '../components/HeroFlip'
import HeroDualText from '../components/HeroDualText'
import GoodsSlideshow from '../components/GoodsSlideshow'
import DualVideoHero from '../components/DualVideoHero'
import DualLinkHero from '../components/DualLinkHero'
import kemba2 from '../Assets/kemba2.png'
import port1 from '../Assets/port1.jpg'
import port3 from '../Assets/port3.jpg'
import video1 from '../components/slideshowPics/vid1.mov'
import video2 from '../components/slideshowPics/vid2.mov'
import ouz2 from '../Assets/ouz2.png'
import officeTeam from '../Assets/officeTeam.png'



const Services = () => {
    const headerText = "OUR MARKET"
    const text = "Our vast experience in the sector gives us a wide view of the world economy. KEMBA works effectively with its partners and that is why we have become an indispensable supplier that understands our clients demands and can help them thrive in this evolving market."
    const headerText2 = "OUR SERVICES"
    const text2 = "KEMBA works effectively with its partners and that is why we have become an indispensable supplier that understands our clients demands and can help them thrive in this evolving market." 
    
    const headerText3 = "GREAT SERVICE"
    const text3 = "Our corporate governance structure is based on best international practices and meet all the regulatory requirements."
    const headerText4 = "BEST TEAMWORK"
    const text4 = "KEMBA recognizes that a commitment to a strong team along with a sophisticated governance structure is essential to long-term prosperity and success"
    const headerText5 = "MARKET"
    const text5 = "Our vast experience in the sector gives us a wide view of the world economy."
    const headerText6 = "TARGETS"
    const text6 = "Trading across borders. We expand our services in the worldwide"
    
    return (
        <Layout>
            <div className="services-container">
                <div className="services-header">
                    <img src={port1} alt="Goods" className='services-hero_img' />
                    <div className="services-header_text">
                        <h1>Services</h1>
                        <h2>What's our Market?</h2>
                    </div>
                </div>

                <Hero
                    className="Hero2"
                    pic={kemba2}
                    picAlt="Goods"
                    title={headerText}
                    text={text}
                    // color="#fff0f1"
                    color="#FFF6F6"
                    marginFix="-5px;"
                />
                <HeroFlip
                    className="Hero2"
                    pic={port3}
                    picAlt="Goods"
                    title={headerText2}
                    text={text2}
                    // color="#fff0f1"
                    color="#FFF6F6"
                    marginFix="-5px;"
                />

                {/* <div className="team-divider">
                    <h3>
                        KEMBA works effectively with its partners and that is why we have become an indispensable supplier that understands our clients demands and can help them thrive in this evolving market.
                    </h3>
                </div> */}

                <HeroDualText
                    className="Hero2"
                    // pic={kemba2}
                    // picAlt="Goods"
                    title1={headerText3}
                    text1={text3}
                    title2={headerText4}
                    text2={text4}
                    textColor1="#fff0f1"
                    color1="#ab2828"
                    textColor2="#ab2828"
                    color2="#e5d7d6"
                    marginFix="-5px;"
                />
                <HeroDualText
                    className="Hero2"
                    // pic={kemba2}
                    // picAlt="Goods"
                    title1={headerText5}
                    text1={text5}
                    title2={headerText6}
                    text2={text6}
                    textColor1="#144578"
                    color1="#fff0f1"
                    textColor2="#fff0f1"
                    color2="#144578"
                    marginFix="-5px;"
                />

                <div id="goods">
                    <GoodsSlideshow/>

                    <DualVideoHero
                        vid1={video1}
                        vid2={video2}
                    />
                </div>

                <DualLinkHero
                    pic1 = {ouz2}
                    pic2 = {officeTeam}
                    button1 = "About Us"
                    button2 = "Meet The Team"
                    link1 = "/about-us"
                    link2 = "/team"
                />

            </div>
        </Layout>
    )
}

export default Services
