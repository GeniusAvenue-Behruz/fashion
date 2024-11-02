import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const navigate = useNavigate();

    const handleClick = (item) => {
        document.body.style.overflow = 'auto';
        navigate(`/listing`, { state: { name: item.name, picture: item.img, id: item.id } });
    };

    const [searchVisible, setSearchVisible] = useState(false);
    const [searchInput, setSearchInput] = useState('');
    const [filteredItems, setFilteredItems] = useState([]);

    const items = [
        { id: "010", name: "Women's Sweaters", img: '../imgs/womenSweater.svg' },
        { id: "011", name: "ReWool Oversized Shirt Jacket", img: '../imgs/oversizedShirtJacket.svg' },
        { id: "012", name: "Women's Bottoms", img: '../imgs/womenBottom.svg' },
        { id: "013", name: "Women's Boots", img: '../imgs/womenBoot.svg' },
        { id: "014", name: "The Waffle Long-Sleeve Crew", img: '../imgs/waffle.svg' },
        { id: "015", name: "The Bomber jacket | Uniform | Men's", img: '../imgs/jacket.svg' },
        { id: "016", name: "The Essential Original Crew", img: '../imgs/essential.svg' },
        { id: "017", name: "The Heavy Weight | Men's Bottoms", img: '../imgs/menBestSeller.svg' },
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
        const query = e.target.value.toLowerCase();
        setSearchInput(query);

        if (query.length > 0) {
            const queryParts = query.split(' ');
            const filtered = items.filter(item =>
                queryParts.some(part => item.name.toLowerCase().includes(part))
            );
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
                        <li><a href='#!'>Women</a></li>
                        <li><a href='#!'>Men</a></li>
                        <li><a href='/about'>About</a></li>
                        <li><a href='/stories'>Everworld Stories</a></li>
                    </ul>
                    <a href='home' className='logo'><img src='logo.svg' alt="Logo" /></a>
                    <ul className='nav__buttons'>
                        <li><button onClick={toggleSearch}><i className="fa fa-search" aria-hidden="true"></i></button></li>
                        <li><button><i className="fa-solid fa-user"></i></button></li>
                        <li><button><i className="fa-solid fa-cart-shopping"></i></button></li>
                    </ul>
                </nav>
            </div>
            <ul className='nav__options-menu'>
                <li><a href='#!'>Holiday Gifting</a></li>
                <li><a href='#!'>New Arrivals</a></li>
                <li><a href='#!'>Best-seller</a></li>
                <li><a href='#!'>Clothing</a></li>
                <li><a href='#!'>Tops & Sweater</a></li>
                <li><a href='#!'>Pants & Jeans</a></li>
                <li><a href='#!'>Outerwear</a></li>
                <li><a href='#!'>Shoes & Bags</a></li>
                <li><a href='#!'>Sales</a></li>
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
                    {searchInput && filteredItems.length > 0 && (
                        <div className='searchResults container'>
                            <h3>Search Results</h3>
                            <div className='searchResults__grid'>
                                {filteredItems.slice(0, 4).map((item, index) => (
                                    <div key={index} className='searchResults__grid-item' onClick={() => handleClick(item)}>
                                        <img src={item.img} alt={item.name} />
                                        <span className='imgCaption'>{item.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default NavBar;
