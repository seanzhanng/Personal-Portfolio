import Link from "next/link";

const NavLink = ({ href, title }) => {
  if (href.startsWith("http")) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block py-2 pl-3 pr-4 text-white"
        a
      >
        {title}
      </a>
    );
  } else {
    return (
      <Link href={href} className="block py-2 pl-3 pr-4 text-white">
        {title}
      </Link>
    );
  }
};

export default NavLink;
