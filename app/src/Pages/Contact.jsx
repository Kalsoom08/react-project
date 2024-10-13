import React from 'react';
import './Contact.css'; 

const Contact = () => {
    return (
        <div className="contact-container">
            {/* <div className="breadcrumb">
                <span>Home</span> / <span>Contact</span>
            </div> */}
            <div className="contact-wrapper">
                <div className="contact-info">
                    <div className="contact-info-card">
                        <div className="icon">
                            <i className="fa fa-phone"></i>
                        </div>
                        <h3>Call To Us</h3>
                        <p>We are available 24/7, 7 days a week.</p>
                        <p>Phone: +92 123456789</p>
                    </div>
                    <div className="contact-info-card">
                        <div className="icon">
                            <i className="fa fa-envelope"></i>
                        </div>
                        <h3>Write To Us</h3>
                        <p>Fill out our form and we will contact you within 24 hours.</p>
                        <p>Emails: customer@exclusive.com</p>
                        <p>support@exclusive.com</p>
                    </div>
                </div>
                <div className="contact-form">
                    <input type="text" placeholder="Your Name *" required />
                    <input type="email" placeholder="Your Email *" required />
                    <input type="tel" placeholder="Your Phone *" required />
                    <textarea placeholder="Your Message" required></textarea>
                    <button type="submit">Send Message</button>
                </div>
            </div>
        </div>
    );
}

export default Contact;
