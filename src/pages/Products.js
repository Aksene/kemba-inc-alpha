import React from 'react'
import Layout from '../components/Layout'
import HeroXL from '../components/HeroXL'
import Hero from '../components/Hero'
import HeroFlipXL from '../components/HeroFlipXL'
import HeroFlip from '../components/HeroFlip'
import HeroDualImg from '../components/HeroDualImg'
import HeroDualImgFlip from '../components/HeroDualImgFlip'
import DualLinkHero from '../components/DualLinkHero'
import product1 from '../Assets/product1.jpeg'
import product2 from '../Assets/product2.webp'
import diesel1 from '../Assets/diesel1.png'
import diesel3 from '../Assets/diesel3.png'
import diesel5 from '../Assets/diesel5.jpg'
import diesel6 from '../Assets/diesel6.jpg'
import rice1 from '../Assets/rice1.png'
import rice2 from '../Assets/rice2.png'
import rice3 from '../Assets/rice3.webp'
import rice4 from '../Assets/rice4.jpg'
import corn1 from '../Assets/corn1.jpg'
import corn2 from '../Assets/corn2.jpg'
import sugar1 from '../Assets/sugar1.jpg'
import sugar2 from '../Assets/sugar2.webp'
import sugar3 from '../Assets/sugar3.jpg'
import sugar4 from '../Assets/sugar4.jpg'
import fert1 from '../Assets/fert1.png'
import fert2 from '../Assets/fert2.jpg'
import wheat1 from '../Assets/wheat1.jpg'
import soybeans1 from '../Assets/soybeans.jpg'
import lpg2 from '../Assets/lpg2.png'
import lpg3 from '../Assets/lpg3.png'
import agri1 from "../Assets/agri1.png"
import petrol1 from "../Assets/petrol1.png"
import port1 from '../Assets/port1.jpg'
import officeTeam from '../Assets/officeTeam.png'



import './Products.css'
import {
    prodObj1, 
    prodObj2, 
    prodObj3, 
    prodObj4, 
    prodObj5, 
    prodObj6, 
    prodObj7, 
} from './Data'

function Products() {
    const prodHeader1 = "1. KEMBA INC issue FCO. \n\n2. Buyer issue ICPO. \n\n3. End Seller issues Draft Contract (Sales Purchase Agreement) on mutual agreed terms. \n\n4. Both parties sign contract and lodges their copies of Registered contract with their respective banks. \n\n5. After signing the contract, the buyer needs to open the letter of credit, which may be an SBLC. \n "
    return (
        <Layout>
            <div className="product-container">
                <div className="product-header">
                    <img src={product1} alt="product" className='product-hero_img' />
                    <div className="product-header_text">
                        <h1>Products</h1>
                        <h2>Agricultural and Industrial Products</h2>
                    </div>
                </div>
            </div>

            <div className="product-miniDiv">
                <h1> OUR PROCESS</h1>
                <h2 className="product-miniDiv_sub">
                    Our offers adapt to the needs of our customers, but the procedure
                    remains the same in order to respond to your request.
                </h2>
                <h3>
                    {prodHeader1}
                </h3>
            </div>

            <div className="product-divider">
                <img src={agri1} alt="Agriculture"/>
                <h1> AGRICULTURE PRODUCTS </h1>
            </div>

            <HeroXL
                className="Hero2"
                pic={sugar1}
                picAlt="Goods"
                title="ICUMSA 45"
                text={prodObj1.text}
                // color="#fff0f1"
                color="#FFF6F6"
                marginFix="-5px;"
            />
            <HeroFlipXL
                className="Hero2"
                pic={sugar3}
                picAlt="Goods"
                title="ICUMSA 600"
                text={prodObj2.text}
                // color="#fff0f1"
                color="#FFF6F6"
                marginFix="-5px;"
            />
            <HeroXL
                className="Hero2"
                pic={sugar4}
                picAlt="Goods"
                title="ICUMSA 1200"
                text={prodObj3.text}
                // color="#fff0f1"
                color="#FFF6F6"
                marginFix="-5px;"
            />
            <HeroFlip
                className="Hero2"
                pic={corn1}
                picAlt="Goods"
                title="YELLOW CORN NON-GMO"
                text={prodObj4.text}
                // color="#fff0f1"
                color="#FFF6F6"
                marginFix="-5px;"
            />
            <Hero
                className="Hero2"
                pic={corn2}
                picAlt="Goods"
                title="YELLOW CORN"
                text={prodObj5.text}
                // color="#fff0f1"
                color="#FFF6F6"
                marginFix="-5px;"
            />
            <HeroFlip
                className="Hero2"
                pic={soybeans1}
                picAlt="Goods"
                title="SOY BEAN GMO"
                text={prodObj6.text}
                // color="#fff0f1"
                color="#FFF6F6"
                marginFix="-5px;"
            />
            <Hero
                className="Hero2"
                pic={wheat1}
                picAlt="Goods"
                title="MILLING WHEAT"
                text={prodObj7.text}
                // color="#fff0f1"
                color="#FFF6F6"
                marginFix="-5px;"
            />

            <HeroDualImg
                className="Hero2"
                pic2={rice3}
                picAlt="Goods"
                title="RICE 100% BROKEN PARBOILED"
                heroSpec = "heroDualImg_spec"
                pic1={rice1}
                // color="#fff0f1"
                color="#FFF6F6"
                marginFix="-5px;"
            /> 
            <HeroDualImgFlip
                className="Hero2"
                pic2={rice4}
                picAlt="Goods"
                title="RICE 5% BROKEN"
                pic1={rice2}
                // color="#fff0f1"
                color="#FFF6F6"
                marginFix="-5px;"
            />

            {/* Tables and Images */}
            <div className="product-divider">
                <img src={petrol1} alt="Agriculture"/>
                <h1> PETROLEUM PRODUCTS </h1>
            </div>

            <HeroDualImg
                className="Hero2"
                pic2={fert2}
                picAlt="Goods"
                title="FERTILIZER: UREA 46"
                pic1={fert1}
                // color="#fff0f1"
                color="#FFF6F6"
                marginFix="-5px;"
            /> 
            <HeroDualImgFlip
                className="Hero2"
                pic2={lpg3}
                picAlt="Goods"
                title="LPG (LIQUIFIED PETROLIUM GAS)"
                heroSpec = "heroDualImg_spec"
                pic1={lpg2}
                // color="#fff0f1"
                color="#FFF6F6"
                marginFix="-5px;"
            /> 
            <HeroDualImg
                className="Hero2"
                pic2={diesel5}
                picAlt="Goods"
                title="DIESEL EN590 500PPM"
                pic1={diesel1}
                // color="#fff0f1"
                color="#FFF6F6"
                marginFix="-5px;"
            />
            <HeroDualImgFlip
                className="Hero2"
                pic2={diesel6}
                picAlt="Goods"
                heroSpec = "heroDualImgFlip_spec"
                title="DIESEL EN590 50"
                pic1={diesel3}
                // color="#fff0f1"
                color="#FFF6F6"
                marginFix="-5px;"
            />

            <br /><br /><br /><br />
            {/* End */}
            <br /><br /><br /><br />

            <DualLinkHero
                pic1 = {port1}
                pic2 = {officeTeam}
                button1 = "Our Services"
                button2 = "Meet The Team"
                link1 = "/services"
                link2 = "/team"
            />
            

            
        </Layout>
    )
}

export default Products
