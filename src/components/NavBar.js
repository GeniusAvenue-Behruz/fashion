import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const navigate = useNavigate();

    const handleClick = (item) => {
        document.body.style.overflow = 'auto';
        setSearchVisible(false);
        navigate(`/listing`, { state: { name: item.name, picture: item.img, id: item.id } });
    };

    const handleProfileClick = () => {
        setSearchVisible(false);
        document.body.style.overflow = 'auto';
        navigate('/profile'); // Update to the profile route
    };

    const handleBagClick = () => {
        setSearchVisible(false);
        document.body.style.overflow = 'auto';
        navigate('/bag'); // Update to the bag route
    };

    const [searchVisible, setSearchVisible] = useState(false);
    const [searchInput, setSearchInput] = useState('');
    const [filteredItems, setFilteredItems] = useState(['Women']);

    const items = [
        { id: "010", name: "Women's Sweaters", img: '../imgs/womenSweater.svg' },
        { id: "011", name: "ReWool Oversized Shirt Jacket", img: '../imgs/oversizedShirtJacket.svg' },
        { id: "012", name: "Women's Bottoms", img: '../imgs/womenBottom.svg' },
        { id: "013", name: "Women's Boots", img: '../imgs/womenBoot.svg' },
        { id: "014", name: "The Waffle Long-Sleeve Crew", img: '../imgs/waffle.svg' },
        { id: "015", name: "The Bomber jacket | Uniform | Men's", img: '../imgs/jacket.svg' },
        { id: "016", name: "The Essential Original Crew", img: '../imgs/essential.svg' },
        { id: "017", name: "Chino Slim Fit Pant Mens 32 x 28 Uniform Chocolate Brown", img: '../imgs/menBestSeller.svg' },
    ];
    const defaultItem = [
        { id: "012", name: "Women's Bottoms", img: '../imgs/womenBottom.svg' },
        { id: "010", name: "Women's Sweaters", img: '../imgs/womenSweater.svg' },
    ];

    const toggleSearch = () => {
        setSearchVisible(!searchVisible);
        if (!searchVisible) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
            setSearchInput('');
            setFilteredItems([]);
        }
    };

    const handleSearchChange = (e) => {
        const input = e.target.value;
        setSearchInput(input);

        const query = input.toLowerCase();

        if (query.length > 0) {
            const queryParts = query.split(' ').filter(part => part);

            const filtered = items.filter(item => {
                const itemWords = item.name.toLowerCase().replace(/['’]/g, '').split(/[^a-zA-Z]+/);
                return queryParts.every(part =>
                    itemWords.some(word => word.startsWith(part))
                );
            });

            setFilteredItems(filtered);
        } else {
            setFilteredItems([]);
        }
    };

    const handleCancel = () => {
        setSearchInput('');
        setFilteredItems([]);
        setSearchVisible(false);
        document.body.style.overflow = 'auto';
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape' && searchVisible) {
                handleCancel();
            }
        };

        if (searchVisible) {
            window.addEventListener('keydown', handleKeyDown);
        } else {
            window.removeEventListener('keydown', handleKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [searchVisible]);

    return (
        <div className='navBar'>
            <div className='nav-wrapper'>
                <nav className='nav container'>
                    <ul className='nav__categories'>
                        <li><a href='/women'>Women</a></li>
                        <li><a href='/men'>Men</a></li>
                        <li><a href='/about'>About</a></li>
                        <li><a href='/stories'>Everworld Stories</a></li>
                    </ul>
                    <a href='home' className='logo'><img src='logo.svg' alt="Logo" /></a>
                    <ul className='nav__buttons'>
                        <li><button onClick={toggleSearch}><i className="fa fa-search" aria-hidden="true"></i></button></li>
                        <li><button onClick={handleProfileClick}><i className="fa-solid fa-user"></i></button></li>
                        <li><button onClick={handleBagClick}><i className="fa-solid fa-cart-shopping"></i></button></li>
                    </ul>
                </nav>
            </div>
            <ul className='nav__options-menu'>
                <li><a href='/products'>Holiday Gifting</a></li>
                <li><a href='/products'>New Arrivals</a></li>
                <li><a href='/products'>Best-seller</a></li>
                <li><a href='/products'>Clothing</a></li>
                <li><a href='/products'>Tops & Sweater</a></li>
                <li><a href='/products'>Pants & Jeans</a></li>
                <li><a href='/products'>Outerwear</a></li>
                <li><a href='/products'>Shoes & Bags</a></li>
                <li><a href='/products'>Sales</a></li>
            </ul>

            {searchVisible && <div className='overlay' onClick={handleCancel}></div>}

            {searchVisible && (
                <div className='navBar__searchField'>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <input
                            type='text'
                            value={searchInput}
                            onChange={handleSearchChange}
                            className='navBar__searchField-input'
                            placeholder='Search'
                            autoFocus
                        />
                        <button type='button' onClick={handleCancel}>Cancel</button>
                    </form>
                    <div className='searchResults container'>
                        <h3>{searchInput ? 'Search Results' : 'Suggestions'}</h3>
                        <div className='searchResults__grid'>
                            {(searchInput ? filteredItems : defaultItem).slice(0, 4).map((item, index) => (
                                <div key={index} className='searchResults__grid-item' onClick={() => handleClick(item)}>
                                    <img src={item.img} alt={item.name} />
                                    <span className='imgCaption'>{item.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NavBar;
