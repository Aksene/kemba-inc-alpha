import React from 'react'
import './DualVideoHero.css'


const DualVideoHero = ({ vid1, vid2, color}) => {
    const divStyle = {
        backgroundColor: color,
    };

    return (
        <div style={divStyle} className="dualVideo-hero">
            <div className="dualVideo-hero_video">
                <video src={vid2} controls playsInline loop muted />
            </div>
            <div className="dualVideo-hero_video">
                <video src={vid1} controls playsInline loop muted />
            </div>
        </div>
    )
}

export default DualVideoHero
