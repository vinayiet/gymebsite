import React from 'react'
import './Footer.css'
import LinkdIn from '../../assets/linkedin.png'
import Instagram from '../../assets/instagram.png'
import Github from '../../assets/github.png'
const Footer = () => {
    return (
        <div className="footer-container">
            <hr />
            <div className="footer">
                <div className="social-links">
                    <a href="https://github.com/vinayiet">
                        <img src={Github} alt="GitHub" />
                    </a>
                    {/* Add the Instagram link */}
                    <img src={Instagram} alt="Instagram" />
                    {/* Add the LinkedIn link */}
                    <a href="https://www.linkedin.com/in/vinayiet/">
                        <img src={LinkdIn} alt="LinkedIn" />
                    </a>

                </div>
            </div>
        </div>
    )
}

export default Footer
