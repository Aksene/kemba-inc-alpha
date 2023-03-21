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
                            <button type="submit" className="submit_btn"> Send </button>
                        </form>
                    </div>
                    <div class="column2">
                        <div className="container2">
                            <label for="Name">Name: </label>
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
                    {/* 2222 Boylston St, Boston, MA, 01945 */}
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2949.745317854403!2d-71.15090318416823!3d42.326630579189214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37891e5242a2f%3A0xc14d2dca2ff261cd!2sBoylston%20St%2C%20Massachusetts!5e0!3m2!1sen!2sus!4v1675725476356!5m2!1sen!2sus" 
                        allowFullScreen="true" 
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        frameborder="0"
                    >
                    </iframe>
                </div>
        </div>
        </Layout>
    )
}

export default ContactUs
