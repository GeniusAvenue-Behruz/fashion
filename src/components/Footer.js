import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__content">
                    <div className="footer__section">
                        <h3>Account</h3>
                        <ul>
                            <li><a href="#!">Log In</a></li>
                            <li><a href="#!">Sign Up</a></li>
                            <li><a href="#!">Redeem a Gift Card</a></li>
                        </ul>
                    </div>
                    <div className="footer__section">
                        <h3>Company</h3>
                        <ul>
                            <li><a href="#!">About</a></li>
                            <li><a href="#!">Environmental Initiatives</a></li>
                            <li><a href="#!">Factories</a></li>
                            <li><a href="#!">DEI</a></li>
                            <li><a href="#!">Careers</a></li>
                            <li><a href="#!">International</a></li>
                            <li><a href="#!">Accessibility</a></li>
                        </ul>
                    </div>
                    <div className="footer__section">
                        <h3>Get Help</h3>
                        <ul>
                            <li><a href="#!">Help Center</a></li>
                            <li><a href="#!">Return Policy</a></li>
                            <li><a href="#!">Shipping Info</a></li>
                            <li><a href="#!">Bulk Orders</a></li>
                        </ul>
                    </div>
                    <div className="footer__section">
                        <h3>Connect</h3>
                        <ul>
                            <li><a href="#!">Facebook</a></li>
                            <li><a href="#!">Instagram</a></li>
                            <li><a href="#!">Twitter</a></li>
                            <li><a href="#!">Affiliates</a></li>
                            <li><a href="#!">Our Stores</a></li>
                        </ul>
                    </div>
                    <div className="footer__newsletter">
                        <input type="email" placeholder="Email Address" aria-label="Email Address" />
                        <button type="submit">→</button>
                    </div>
                </div>
                <div className="footer__bottom">
                    <ul>
                        <li><a href="#!">Privacy Policy</a></li>
                        <li><a href="#!">Terms of Service</a></li>
                        <li><a href="#!">Do Not Sell or Share My Personal Information</a></li>
                        <li><a href="#!">CS Supply Chain Transparency</a></li>
                        <li><a href="#!">Vendor Code of Conduct</a></li>
                        <li><a href="#!">Sitemap Pages</a></li>
                        <li><a href="#!">Sitemap Products</a></li>
                    </ul>
                    <p>© 2023 All Rights Reserved By <a href='https://t.me/UpCoder'>UpCoder</a></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
