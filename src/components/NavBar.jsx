import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import voltaicIcon from '../assets/voltaic.svg';


function NavBar() {
   

  return <nav className="flex items-center py-3 px-3 border-b-white bg-slate-800">
    <ul className = 'flex flex-row  items-center basis-full justify-evenly'>
    <li> <img src={voltaicIcon} alt="" /></li>
    <li className = "text-white">
        <Link to = '/'>
            Voltaic
        </Link>
    </li>
    <li className = "text-white">
        <Link to = '/'>
            About Us
        </Link>
    </li>
    <li className = "text-white">
        <Link to = '/'>
            Contact Us
        </Link>
    </li>
    <li>
    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'>Login</button>
    </li>
    </ul>

    
    </nav>;
}

export default NavBar;
