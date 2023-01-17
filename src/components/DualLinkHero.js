import React from 'react'
import { Link } from 'react-router-dom' 
import './DualLinkHero.css'
import ouz2 from '../Assets/ouz2.png'
import officeTeam from '../Assets/officeTeam.png'

const DualLinkHero = ({ pic1, pic2, button1, button2, link1, link2}) => {

    return (
        <div className="dualLink-hero">
            <div className="dualLink-col">
                <img src={pic1} className='dualLink-hero_img' />
                <div className="dualLink-hero_btn">
                    <a href={link1}>
                        <button type="submit" className="shadow__btn"><h1>{button1}</h1></button>
                    </a>
                </div>
            </div>
            <div className="dualLink-col">
                <img src={pic2} className='dualLink-hero_img' />
                <div className="dualLink-hero_btn">
                    <a href={link2}>
                        <button type="submit" className="shadow__btn"><h1>{button2}</h1></button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default DualLinkHero
