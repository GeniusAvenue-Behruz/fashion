import React from 'react'
import NavBar from '../components/NavBar.js'
import Footer from '../components/Footer.js'
import Card from '../components/Card.js'; 
import Marquee from '../components/Marquee.js'
const Blog = () => {
    const cards = [
        {
            imgSrc: 'imgs/winterWhites.png',
            title: 'How To Style Winter Whites',
            tags: ['Style']
        },
        {
            imgSrc: 'imgs/glossyAward.png',
            title: 'We Won A Glossy Award',
            tags: ['Transparency']
        },
        {
            imgSrc: 'imgs/matchingOutfits.png',
            title: 'Coordinate Your Matching Outfits with Everyone',
            tags: ['Style']
        },
        {
            imgSrc: 'imgs/blackFriday.png',
            title: 'Black Friday Fund 2023',
            tags: ['Transparency']
        },
        {
            imgSrc: 'imgs/holidayOutfits.png',
            title: 'What to Wear this season: Holiday Outfits & OIdeas',
            tags: ['Style', 'hi']
        },
        {
            imgSrc: 'imgs/thanksgivingOutfit.png',
            title: 'Thanksgiving Outfit Ideas',
            tags: ['Style']
        },
    ];
    const progresses = [
        {
            imgSrc: 'imgs/carbonCommitment.png',
            title: 'Carbon Commitment'
        },
        {
            imgSrc: 'imgs/envInitiatives.png',
            title: 'Environmental Initiatives'
        },
        {
            imgSrc: 'imgs/betterFactories.png',
            title: 'Better Factories'
        },
    ];
    const headlineText = [
        'Keep it Clean',
        'Do right by people',
        'Keep it Clear',
        'Stay Positive',
        'Be Kind',
        'Work Hard'
    ];
    return (
        <div className="blog">
            <NavBar/>
            <div className='blog-context'>
                <h2>The Latest</h2>
                <div className="cards-container container">
                    {cards.map((card, index) => (
                        <Card key={index} imgSrc={card.imgSrc} title={card.title} tags={card.tags} />
                    ))}
                </div>
            </div>
            <Marquee text={headlineText} />
            <div className='blog__progress container'>
                {
                    progresses.map((process, index) => (
                        <Card key={index} imgSrc={process.imgSrc} title={process.title}/>
                    ))}
            </div>
            <div className='blog__social'>
                <div className='blog__social-context container'>
                    <h1>Follow us on social for more</h1>
                    <a href="https://instagram.com/behruzrajabov1610"><button>@UpCoder Instagram</button></a>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Blog;
