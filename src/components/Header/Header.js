import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='sticky top-0 bg-white px-12 py-7 flex justify-between'>
            <div className='hidden md:block border-gray-800 p-2'>
                <Link to='/' className='font-sans font-extrabold text-2xl text-gray-500'>
                 C u r n c y
                </Link>
                </div>
            <div className='flex text-xl gap-4'>
               
                <NavLink className='nav-link' to='/'>Home</NavLink>
                <NavLink className='nav-link'  to='/coins'>Coins</NavLink>
                <NavLink className='nav-link'  to='/about'>About</NavLink>
                <NavLink className='nav-link'  to='/contact'>Contact</NavLink>
            </div>
        </div>
    );
};

export default Header;