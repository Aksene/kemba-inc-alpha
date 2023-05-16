import React from 'react'
import './HeroXL.css'

const HeroXL = ({ pic, title, text, color, textColor, page, buttonName}) => {
    const divStyle = {
        backgroundColor: color,
        color: textColor,
    };

    return (
        <div style={divStyle} className="main-heroXL">
            <div className="main-heroXL_text">
                <h1>{title}</h1>
                <h4 >{text}</h4>
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
            <div className="main-heroXL_image-container">
                <img src={pic} alt={pic} className='main-heroXL_img' />
            </div>
        </div>
    )
}

export default HeroXL
