import React, {useEffect, Component } from 'react'
import './GoodsSlideshow.css'
import good1 from "./slideshowPics/good1.png"
import good2 from "./slideshowPics/good2.png"
import good3 from "./slideshowPics/good3.png"
import good5 from "./slideshowPics/good5.png"
import good6 from "./slideshowPics/good6.png"
import good7 from "./slideshowPics/good7.png"
import vid1 from "./slideshowPics/vid1.mov"



const GoodsSlideshow = () => {
    
    // Stylesheet and Lightbox-plus-jquery are both in index.html & public folder
    return (
        <div className="container">
            <h1>GOODS</h1>
            <div className="subcontainer">
                <div className="grid">
                    <a href={good1} data-title="Goods in boat" data-lightbox="goods-img" class="slide-img"></a>
                    <a href={good2} data-title="Goods in boat #2" data-lightbox="goods-img" class="slide-img"></a>
                    <a href={good3} data-title="Goods in warehouse" data-lightbox="goods-img" class="slide-img"></a>
                    {/* <a href="good4.png" data-title="Boat" dat-lightbox="goods-img" class="slide-img"></a> */}
                    <a href={good5} data-title="Goods in warehouse #2" data-lightbox="goods-img" class="slide-img"></a>
                    <a href={good6} data-title="Goods in warehouse #3" data-lightbox="goods-img" class="slide-img"></a>
                    <a href={good7} data-title="Goods on the move" data-lightbox="goods-img" class="slide-img"></a>
                </div>
            </div>
            
        </div>
    )
}

export default GoodsSlideshow
