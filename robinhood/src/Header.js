import React from 'react';
import Logo from '../src/robinhood.svg'
import SearchIcon from '@material-ui/icons/Search';
import '../src/Header.css'

function Header() {
    return (
        <div className='header__wrapper'>
            {/* logo */}
            <div className="header__logo">
                <img src={Logo} width={25} alt='robinhood' />
            </div>
            {/* searchbar */}
                <div className="header__search">
                    <div className="header__searchContainer">
                        <input type="text" placeholder='search' />
                        
                    </div>
                </div>
            {/* menu items */}
            <div className="header__menuItems">
                <a href="#">Free Stocks</a>
                <a href="#">Portfolio</a>
                <a href="#">Cash</a>
                <a href="#">Messages</a>
                <a href="#">Account</a>
            </div>
        </div>
    )
}

export default Header
