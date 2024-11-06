import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__content">
                    <div className="footer__section">
                        <h3>Account</h3>
                        <ul>
                            <li><a href="/login">Log In</a></li>
                            <li><a href="/signup">Sign Up</a></li>
                            <li><a href="/redeem">Redeem a Gift Card</a></li>
                        </ul>
                    </div>
                    <div className="footer__section">
                        <h3>Company</h3>
                        <ul>
                            <li><a href="/about">About</a></li>
                            <li><a href="/about">Environmental Initiatives</a></li>
                            <li><a href="/about">Factories</a></li>
                            <li><a href="/about">DEI</a></li>
                            <li><a href="/about">Careers</a></li>
                            <li><a href="/about">International</a></li>
                            <li><a href="/about">Accessibility</a></li>
                        </ul>
                    </div>
                    <div className="footer__section">
                        <h3>Get Help</h3>
                        <ul>
                            <li><a href="/help">Help Center</a></li>
                            <li><a href="/help">Return Policy</a></li>
                            <li><a href="/help">Shipping Info</a></li>
                            <li><a href="/help">Bulk Orders</a></li>
                        </ul>
                    </div>
                    <div className="footer__section">
                        <h3>Connect</h3>
                        <ul>
                            <li><a href="https://t.me/UpCoder">Facebook</a></li>
                            <li><a href="https://t.me/UpCoder">Instagram</a></li>
                            <li><a href="https://t.me/UpCoder">Twitter</a></li>
                            <li><a href="https://t.me/UpCoder">Affiliates</a></li>
                            <li><a href="https://t.me/UpCoder">Our Stores</a></li>
                        </ul>
                    </div>
                    <form className="footer__newsletter">
                        <input type="email" placeholder="Email Address" aria-label="Email Address" />
                        <button type="submit">→</button>
                    </form>
                </div>
                <div className="footer__bottom">
                    <ul>
                        <li><a href="https://t.me/UpCoder">Privacy Policy</a></li>
                        <li><a href="https://t.me/UpCoder">Terms of Service</a></li>
                        <li><a href="https://t.me/UpCoder">Do Not Sell or Share My Personal Information</a></li>
                        <li><a href="https://t.me/UpCoder">CS Supply Chain Transparency</a></li>
                        <li><a href="https://t.me/UpCoder">Vendor Code of Conduct</a></li>
                        <li><a href="https://t.me/UpCoder">Sitemap Pages</a></li>
                        <li><a href="https://t.me/UpCoder">Sitemap Products</a></li>
                    </ul>
                    <p>© 2023 All Rights Reserved By <a href='https://t.me/UpCoder'>UpCoder</a></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
