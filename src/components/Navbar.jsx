import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <ul className="hidden">
        <li><Link>Home</Link></li>
        <li><Link>About</Link></li>
        <li><Link>Portfolio</Link></li>
        <li><Link>Contact</Link></li>
      </ul>

      <div onClick={handleNav} className="block text-gray-300 fixed right-10 top-10 z-50">
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>

      <div className={nav ? 'block text-gray-300' : 'fixed left-[100%] hidden'}>
        <ul>
          <li><Link>Home</Link></li>
          <li><Link>About</Link></li>
          <li><Link>Portfolio</Link></li>
          <li><Link>Contact</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
