import React from 'react'
import './HeroDualImg.css'

const HeroDualImg = ({ pic1, pic2, title, picAlt, color, textColor, heroSpec, buttonName}) => {
    const divStyle = {
        backgroundColor: color,
        color: textColor,
    };

    return (
        <div style={divStyle} className="heroDualImg">
            <div className="heroDualImg_image-container">
                <img src={pic2} alt={picAlt} className='heroDualImg_img' />
            </div>
            <div className="heroDualImg_image-container">
                {/* <h1>{title}</h1> */}
                <h1 >{title}</h1>
                <img src={pic1} alt={picAlt} className={heroSpec ? heroSpec : "heroDualImg_spec"} />
            </div>
        </div>
    )
}

export default HeroDualImg
