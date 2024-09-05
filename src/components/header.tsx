import { FC } from "react";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../utils/routes";
import { useLinkStyle } from "./utils/getLinkStyle";

interface NavLink {
  path: string;
  label: string;
}

const navLinks: NavLink[] = [
  { path: AppRoutes.home, label: "Get Started" },
  { path: AppRoutes.pricing, label: "Pricing & Payment" },
  { path: AppRoutes.portal, label: "Developer Portal" },
];

const Header: FC = () => {
  const getLinkStyle = useLinkStyle();

  return (
    <nav className="flex justify-between items-center mx-8 relative">
      <Link to={AppRoutes.home}>
        <img src="/Logo.svg" alt="Logo" />
      </Link>
      <ul className="flex gap-10">
        {navLinks.map((link) => (
          <Link key={link.path} to={link.path}>
            <li
              key={link.path}
              style={getLinkStyle(link.path)}
              className="pb-4 py-7 text-sm font-bold z-20 transition-colors duration-300 ease-in-out hover:text-primary focus:text-primary"
            >
              {link.label}
            </li>
          </Link>
        ))}
      </ul>
      <div className="absolute w-full border-b-2 border-borderCol bottom-0 -z-20"></div>
    </nav>
  );
};

export default Header;
