import Link from "next/link";
import React from "react";
import NavLink from "./Navlink";

const navLinks = [
  {
    title: "About",
    path: "about",
  },
  {
    title: "Contact",
    path: "contact",
  },
  {
    title: "GitHub",
    path: "https://github.com/seanzhanng",
  },
  {
    title: "Resume",
    path: "/resume.pdf"
  },
];

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90">
      <div className="flex flex-wrap items-center justify-between mx-auto p-8">
        <Link href={"/"} className="text-2xl text-white font-semibold">
          Home
        </Link>
        <div className="menu md:block md:w-auto" id="navbar">
          <ul className="flex space-x-4">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
