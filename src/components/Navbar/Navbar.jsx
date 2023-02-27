import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';

import images from '../../constants/images';
import './navbar.css';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <nav className='app__navbar'>
            <div className='app__navbar-logo'>
                <img src={images.logo} alt="logo" />
                <a href='Home' className='p__opensans club_name'> Nepal United FC</a>
            </div>
            <ul className='app__navbar-links'>
                <li className='p__opensans'><a href='#Home'>Home</a></li>
                <li className='p__opensans'><a href='#LatestNews'>Latest-News</a></li>
                <li className='p__opensans'><a href='#Team'>Team</a></li>
                <li className='p__opensans'><a href='#Gallery'>Gallery</a></li>
                <li className='p__opensans'><a href='#Awards'>Awards</a></li>
                <li className='p__opensans'><a href='#FindUs'>FindUs</a></li>
            </ul>
            <div className='app__navbar-smallscreen'>
                <GiHamburgerMenu color='#000' fontSize={27} onClick={() => setToggleMenu(true)} />
                {toggleMenu && (
                    <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
                        <AiOutlineClose fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)} />
                        <ul className='app__navbar-smallscreen_links'>
                            <li className='p__opensans'><a href='#Home'>Home</a></li>
                            <li className='p__opensans'><a href='#LatestNews'>Latest-News</a></li>
                            <li className='p__opensans'><a href='#Team'>Team</a></li>
                            <li className='p__opensans'><a href='#Gallery'>Gallery</a></li>
                            <li className='p__opensans'><a href='#Awards'>Awards</a></li>
                            <li className='p__opensans'><a href='#FindUs'>FindUs</a></li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar