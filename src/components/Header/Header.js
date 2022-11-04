import React from 'react';
import { Link,NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='sticky top-0 bg-white px-12 py-7 flex justify-between'>
            <div className='hidden md:block'>
                <Link to='/' className='font-sans font-bold text-xl text-gray-600'>
                 (C u r n c y)
                </Link>
                </div>
            <div className='flex text-xl gap-4'>
               
                <NavLink to='/coins'>Coins</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
            </div>
        </div>
    );
};

export default Header;