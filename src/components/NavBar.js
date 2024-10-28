import React from 'react'

const NavBar = () => {
    return (
        <div className='navBar'>
            <div className='nav-warapper'>
                <nav className='nav container'>
                    <ul className='nav__categories'>
                        <li><a href='#!'>Women</a></li>
                        <li><a href='#!'>Men</a></li>
                        <li><a href='/about'>About</a></li>
                        <li><a href='/stories'>Everworld Stories</a></li>
                    </ul>
                    <a href='#!' className='logo'><img src='logo.svg' alt="This is logo" /></a>
                    <ul className='nav__buttons'>
                        <li><button><i class="fa fa-search" aria-hidden="true"></i></button></li>
                        <li><button><i class="fa-solid fa-user"></i></button></li>
                        <li><button><i class="fa-solid fa-cart-shopping"></i></button></li>
                    </ul>
                </nav>
            </div>
            <ul className='nav__options-menu'>
                <li><a href='#!'>Holiday Gifting</a></li>
                <li><a href='#!'>New Arivals</a></li>
                <li><a href='#!'>Best-seller</a></li>
                <li><a href='#!'>Clothing</a></li>
                <li><a href='#!'>Tops & Sweater</a></li>
                <li><a href='#!'>Pants & Jeans</a></li>
                <li><a href='#!'>Outerwear</a></li>
                <li><a href='#!'>Shoes & Bags</a></li>
                <li><a href='#!'>Sales</a></li>
            </ul>
            <div className='navBar__searchField'>
                <form >
                    <input className='navBar__searchField-input' placeholder='Search'/>
                    <button type='reset'>Cancel</button>
                </form>
            </div>
        </div>
    )
}

export default NavBar