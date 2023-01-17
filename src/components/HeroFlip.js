import React from 'react'
import './Hero.css'

const HeroFlip = ({ pic, picAlt, title, text, color, textColor, page, buttonName, jumpID}) => {
    const divStyle = {
        backgroundColor: color,
        color: textColor,
      };

    return (
        <div style={divStyle} className="main-hero">
            <div className="main-hero_image-container">
                <img src={pic} alt={picAlt} className='main-hero_img' />
            </div>
            <div id={"about"} className="main-hero_text">
                <h1>{title}</h1>
                <h3>{text}</h3>
                { 
                    buttonName 
                    ?
                        <a href={page}>
                            <button type="submit" className="shadow__btn"><h1>{buttonName}</h1></button>
                        </a>
                    :
                        ""

                }
            </div>

        </div>
    )
}

export default HeroFlip
