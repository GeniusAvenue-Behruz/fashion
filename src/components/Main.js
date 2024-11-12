import React from 'react';
import Slider from 'react-slick';
import Rating from '../components/Rating.js'
const Main = () => {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            centerMode: true,
            centerPadding: '20px', 
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        dots: true,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        dots: true,
                    },
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: true,
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: true,
                    },
                },
                {
                    breakpoint: 320,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: true,
                    },
                },
            ],
        };

    const categories = [
        { img: 'imgs/categories/shirts.svg', label: 'shirts' },
        { img: 'imgs/categories/denim.svg', label: 'denim' },
        { img: 'imgs/categories/tees.svg', label: 'tees' },
        { img: 'imgs/categories/pants.svg', label: 'pants' },
        { img: 'imgs/categories/sweaters.svg', label: 'sweater' },
        { img: 'imgs/categories/outerwear.svg', label: 'outerwear' },
    ];

    const favorites = [
        { img: 'imgs/waffle.svg', name: 'The Waffle Long-Sleeve Crew', color: 'Bone' },
        { img: 'imgs/jacket.svg', name: 'The Bomber Jacket | Uniform', color: 'Toasted Coconut' },
        { img: 'imgs/organic.svg', name: 'The Slim 4-way Stretch Organic Jean | Uniform', color: 'Dark Indigo' },
        { img: 'imgs/essential.svg', name: 'The Waffle Long-Sleeve Crew', color: 'Bone' },
        { img: 'imgs/jacket.svg', name: 'The ReNew Long Parka', color: 'Charcoal' },
        { img: 'imgs/essential.svg', name: 'The Organic Cotton Hoodie', color: 'Navy' },
    ];

    return (
        <main>
            <div className='shopByCategory container'>
                <h1>Shop by Category</h1>
                <div className='shopByCategory__grid'>
                    {categories.map((category, index) => (
                        <div className='shopByCategory__grid-item' key={index}>
                            <img src={category.img} alt={category.label} />
                            <span><a href='/categories'>{category.label}</a></span>
                        </div>
                    ))}
                </div>
            </div>

            <div className='main__categories container'>
                <div className='newArrivals'>
                    <img src='imgs/categories/newArrivals.svg' alt='New Arrivals' />
                    <h1>New Arrivals</h1>
                    <button>Shop the latest</button>
                </div>
                <div className='bestSellers'>
                    <img src='imgs/categories/bestSeller.svg' alt='Best Sellers' />
                    <h1>Best-Sellers</h1>
                    <button>Shop your favorite</button>
                </div>
                <div className='holidayOutfits'>
                    <img src='imgs/categories/holidayOutfit.svg' alt='The Holiday Outfit' />
                    <h1>The Holiday Outfit</h1>
                    <button>Shop occasion</button>
                </div>
            </div>

            <div className='main__mission container'>
                <h1>We're on a Mission To Clean Up the Industry</h1>
                <span>Read about our progress in our latest Impact Report.</span>
                <button>Learn More</button>
            </div>

            <div className='main__favorites container'>
                <h1>Everlane Favorites</h1>
                <span>Beautifully Functional. Purposefully Designed. Consciously Crafted.</span>
                <Slider {...settings} className='favorites__slider container'>
                    {favorites.map((favorite, index) => (
                        <div className='favorites__grid-item' key={index}>
                            <img src={favorite.img} alt={favorite.name} />
                            <h3 className='grid-item__name'>{favorite.name}</h3>
                            <span className='grid-item__color'>{favorite.color}</span>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className='main__comments'>
                <div className='container'>
                    <div className='main__comments-text'>
                        <h3>People are talking</h3>
                        <Rating rating={5} />
                        <p>“Love this shirt! Fits perfectly and the fabric is thick without being stiff.”</p>
                        <span>-- JonSnSF, The Heavyweight Overshirt</span>
                    </div>
                    <div className='main__comments-img'>
                        <img src='imgs/comment.png' alt='Comment IMG' />
                    </div>
                </div>
            </div>
            <div className="main__pick">
                <div className="main-container">
                    <div className="card">
                            <h3>Our Holiday Gift Picks</h3>
                        <img src="imgs/holidayPick.png" alt="Stack of folded clothes"/>
                            <p>The best presents for everyone on your list.</p>
                            <a href="/about">Read More</a>
                    </div>
                    <div className="card">
                            <h3>Cleaner Fashion</h3>
                        <img src="imgs/cleanerPick.png" alt="Cotton field"/>
                            <p>See the sustainability efforts behind each of our products.</p>
                            <a href="/about">Learn More</a>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Main;
