import React from 'react'
import { AiOutlineInstagram, AiOutlineFacebook, AiFillGithub,AiOutlineTwitter } from 'react-icons/ai';
import './footer.css'

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-row">
                    <div className="footer-left p15">
                        <h2 className='logo'>SB UI KIT PRO</h2>
                        <p className='footer-p'>Build better websites</p>
                        <div className="social-media">
                            <AiOutlineInstagram className='footer-social' />
                            <AiOutlineFacebook className='footer-social' />
                            <AiFillGithub className='footer-social' />
                            <AiOutlineTwitter className='footer-social' />
                        </div>
                    </div>
                    <div className="footer-right p15">
                        <div className="right-row">
                            <div className="right-items p15">
                                <h3 className='footer-h3'>PRODUCT</h3>
                                <ul>
                                    <li>Landing</li>
                                    <li>Pages</li>
                                    <li>Sections</li>
                                    <li>Documentation</li>
                                    <li>Changelog</li>
                                </ul>
                            </div>
                            <div className="right-items p15">
                                <h3 className='footer-h3'>TECHNICAL</h3>
                                <ul>
                                    <li>Documentation</li>
                                    <li>Changelog</li>
                                    <li>Theme Customizer</li>
                                    <li>UI Kit</li>
                                </ul>
                            </div>
                            <div className="right-items p15">
                                <h3 className='footer-h3'>INCLUDES</h3>
                                <ul>
                                    <li>Utilities</li>
                                    <li>Components</li>
                                    <li>Layouts</li>
                                    <li>Code Samples</li>
                                    <li>Products</li>
                                    <li>Affiliates</li>
                                    <li>Updates</li>
                                </ul>
                            </div>
                            <div className="right-items p15">
                                <h3 className='footer-h3'>LEGAL</h3>
                                <ul>
                                    <li>Privacy Policy</li>
                                    <li>Terms and Conditions</li>
                                    <li>License</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>

                <hr style={{borderColor:'hsla(0,0%,100%,.6)'}} />

                <div className="last-footer">

                </div>
            </div>
        </footer>
    )
}

export default Footer;