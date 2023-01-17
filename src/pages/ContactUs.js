import React from 'react'
import './ContactUs.css'
import Layout from '../components/Layout'
import contact1 from '../Assets/contact1.gif'
import contact2 from '../Assets/contact2.gif'

const ContactUs = () => {
    return (
        <Layout>
            <div className="contactUs-container">
                <div className="contactUs-header">
                    <img src={contact1} alt="Contact Us" className='contactUs-hero_img' />
                    <div className="contactUs-header_text">
                        {/* <h1>Contact Us</h1> */}
                        <h2>Let's Talk!</h2>
                    </div>
                </div>       
                {/* <text className="contactUS-title"> Contact Us!</text> */}
                <div class="contactUS-form_row">
                    <div class="column1">
                        <form className="container1" action="https://submit-form.com/qxnTbx6A">
                            <label for="name">Name: </label>
                            <input type="text" id="name" name="name" placeholder="Name" required="required" />
                            <label for="number">Number: </label>
                            <input type="text" id="number" name="number" placeholder="Phone Number" required="required" />
                            <label for="email">E-mail: </label>                
                            <input type="email" id="email" name="email" placeholder="Email" required="required" />
                            <label for="message">Message: </label>
                            <textarea
                            id="message"
                            name="message"
                            placeholder="Message"
                            required="required"
                            ></textarea>
                            <button type="submit" className="shadow_btn"> Send </button>
                        </form>
                    </div>
                    <div class="column2">
                        <div className="container2">
                            <text for="name">Kemba Inc</text>
                            <label for="number">Number: </label>
                            <text for="number">+1(978)-xxx-xxxx</text>
                            <label for="email">E-mail: </label>                
                            <text for="email">kembacorp@gmail.com</text>
                            {/* <text for="desc">Please contact me anytime for a conversation about my experience and background</text> */}
                            {/* <img src={logo} className="contact_me-logo" alt="Abdous-world" /> */}
                        </div>
                    </div>
                </div>
                <div className="contactUS-map_row">
                    2222 Boylston St, Boston, MA, 01945
                </div>
        </div>
        </Layout>
    )
}

export default ContactUs
