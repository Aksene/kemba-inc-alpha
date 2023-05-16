import React from 'react'
import './HeroDualText.css'

const HeroDualText = ({ text1, title1, title2, text2, color1, textColor1, color2, textColor2}) => {
    const divStyle1 = {
        backgroundColor: color1,
        color: textColor1,
    };
    const divStyle2 = {
        backgroundColor: color2,
        color: textColor2,
    };

    return (
        <div className="HeroDualText-container">
            <div className="heroDualText-hero">
                <div style={divStyle1} className="heroDualText-hero_text">
                    <h1>{title1}</h1>
                    <h2 >{text1}</h2>
                </div>
                <div style={divStyle2} className="heroDualText-hero_text">
                    <h1>{title2}</h1>
                    <h2 >{text2}</h2>
                </div>
            </div>
        </div>
    )
}

export default HeroDualText
