import React from 'react'
import './contact.css'
import { BiMailSend } from 'react-icons/bi';
import { MdPhoneIphone } from 'react-icons/md';

const Contact = () => {
    return (
        <section className="contact">
            <div className="contact-container">
                <div className="contact-row">
                    <div className="row-container">
                        <h2 className='contact-h2'>Contact me</h2>
                        <p className='first-p'>I am available for contract work, when you're ready - let me know!</p>

                        <div className="card-container">
                            <div className="card-contact">
                                <div style={{ backgroundColor: '#f76400' }} className="icon-contact">
                                    <BiMailSend className='iconss' />
                                </div>
                                <a href="google.com">hello@example.com</a>
                            </div>

                            <div className="card-contact">
                                <div style={{ backgroundColor: '#00ac69' }} className="icon-contact">
                                    <MdPhoneIphone className='iconss' />
                                </div>
                                <p className='number'>055-555-55-55</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;