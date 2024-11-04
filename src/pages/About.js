// About.js
import React from 'react';
import TeamMember from '../components/TeamMember.js';
import profilePicture from './profile.png'
import NavBar from '../components/NavBar.js'
import Footer from '../components/Footer.js'

const About = () => {
    const teamMembers = [
        { name: 'Behruz Rajabov', role: 'Founder & CEO', image: profilePicture },
        { name: "Sanmxon Toshpo'latova", role: 'Creative Director', image: profilePicture },
        { name: "Erkin Toshpo'latov", role: 'Marketing Manager', image: profilePicture },
    ];

    return (
        <div className="about-page">
            <NavBar/>
            <section className="about-section container">
                <h1>About Us</h1>
                <p>
                    Our mission is to provide high-quality, stylish clothing that
                    empowers individuals to express themselves. We believe in sustainability
                    and ethical practices, ensuring that our clothing is made with care for
                    the environment and the people who create it.
                </p>
                <h2>Our Story</h2>
                <p>
                    Founded in 2024, our brand started with a simple vision: to make fashion accessible and sustainable.
                    From humble beginnings, we have grown into a thriving community of fashion enthusiasts who value quality and style.
                </p>
            </section>

            <section className="values-section container">
                <h2>Our Values</h2>
                <ul>
                    <li>Sustainability: We prioritize eco-friendly materials and processes.</li>
                    <li>Quality: Our products are crafted to last, combining style and durability.</li>
                    <li>Community: We support local artisans and give back to our community.</li>
                </ul>
            </section>

            <section className="team-section container">
                <h2>Meet Our Team</h2>
                <div className="team-members">
                    {teamMembers.map((member) => (
                        <TeamMember key={member.name} member={member} />
                    ))}
                </div>
            </section>

            <section className="contact-section container">
                <h2>Contact Us</h2>
                <p>Email: upcoder0@gmail.com</p>
                <p>Follow us on:</p>
                <ul>
                    <li><a href="https://facebook.com/upcoder">Facebook</a></li>
                    <li><a href="https://instagram.com/upcoder">Instagram</a></li>
                    <li><a href="https://twitter.com/upcoder">Twitter</a></li>
                </ul>
            </section>
            <Footer/>
        </div>
    );
};

export default About;
