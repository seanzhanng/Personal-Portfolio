import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav>
        <div className="flex flex-wrap items-center justify-between mx-auto p-8">
            <Link href={"/"} className="text-5xl text-white font-semibold">
                LOGO
            </Link>
            <div className="menu hidden md:block md:w-auto" id="navbar">
                <ul className="flex space-x-4">
                    <li>
                        <Link href={"#about"} className="block py-2 pl-3 pr-4 text-white">About</Link>
                    </li>
                    <li>
                        <Link href={"#contact"} className="block py-2 pl-3 pr-4 text-white">Contact</Link>
                    </li>
                </ul>
            </div>     
        </div>
    </nav>
  )
}

export default Navbar