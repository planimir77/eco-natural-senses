import cn from "clsx";
import Link from "next/link";
import React, { FC, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import s from "./navbar.module.css";
import UserCartBtn from "../UserCartBtn";
import navItems from "@lib/navbar-items";
import MenuItem from "components/ui/MenuItem/MenuItem";

interface Props {
  className?: string;
}

const Navbar: FC<Props> = ({ className }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(`MENU: ${isMenuOpen ? "open" : "closed"}`);
  };

  return (
    <div className={cn("relative", className)}>
      <div
        className={`${s.mobileNav} items-center sm:hidden sticky grid grid-cols-2 h-16 top-0 bg-white  shadow-emerald-950/20 shadow-lg z-10 py-4 px-7`}
      >
        <button
        className="w-fit"
          role="button"
          title={`${isMenuOpen ? "Close" : "Open"} Menu`}
          onClick={menuToggle}
        >
          <RxHamburgerMenu className="fill-emerald-950 h-9 w-9" />
          <span className="hidden">Menu</span>
        </button>
        <UserCartBtn className={cn(s.cart)}></UserCartBtn>
      </div>
      <nav
        role="navigation"
        className={`animated ${
          isMenuOpen ? "fadeIn block" : "smmax:fadeOut hidden"
        } sm:fadeIn sm:block sm:top-0 absolute top-16 left-0 z-[1] w-full bg-emerald-700 text-[#fbf4a1] sm:relative flex items-center`}
      >
        <ul
          role="menubar"
          className="relative flex flex-col sm:flex-row justify-evenly h-full w-full px-6"
        >
          {navItems.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
