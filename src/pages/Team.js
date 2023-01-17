import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import HeroFlip from '../components/HeroFlip'
import DualLinkHero from '../components/DualLinkHero'
import './Team.css'
import officeTeam from '../Assets/officeTeam.png';
import port1 from '../Assets/port1.jpg';
import ouz2 from '../Assets/ouz2.png';


const Team = () => {
    return (
        <Layout>
           <div className="team-container">
                <div className="team-header">
                    <img src={officeTeam} alt="Office" className='team-hero_img' />
                    <div className="team-header_text">
                        <h1>Team</h1>
                        <h2>Come Meet the Family</h2>
                    </div>
                </div>

                <div className="team-divider">
                    {/* <h1> KEMBA</h1> */}
                    <h3>
                        KEMBA recognizes that a commitment to a strong team along with a sophisticated governance structure
                        is essential to long-term prosperity and success. Thus, our corporate governance structure is based on
                        best international practices and meet all the regulatory requirements.
                    </h3>
                </div>

                <br/><br/><br/><br/><br/><br/>
                <DualLinkHero
                    className="dualLinkHero"
                    pic2 = {port1}
                    pic1 = {ouz2}
                    button2 = "Services"
                    button1 = "About Us"
                    link2 = "/services"
                    link1 = "/about-us"
                />
                
           </div>
        </Layout>
    )
}

export default Team 