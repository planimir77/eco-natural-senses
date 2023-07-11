import cn from "clsx";
import Link from "next/link";
import React, { useState } from "react";
import SubMenu from "../SubMenu/SubMenu";
import { FaChevronDown } from "react-icons/fa";
import s from "./MenuItem.module.css";

type Props = {
  item: NavItem;
};

const MenuItem = (props: Props) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const subMenuOpen = () => {
    setIsSubMenuOpen(true);
  };
  const subMenuHide = () => {
    setIsSubMenuOpen(false);
  };
  const subMenuToggle = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  }
  return (
    <li
      role="menuitem"
      key={props.item.id}
      className={cn(s.menu_item,`${isSubMenuOpen ? 'hover:bg-emerald-800' : 'hover:bg-emerald-700'}`)}
      onMouseOver={subMenuOpen}
      onMouseLeave={subMenuHide}
    >
      
        <Link href={"/"} className="mr-auto text-center">
          {props.item.name}
        </Link>
        <FaChevronDown onClick={subMenuToggle} className="inline-block sm:hidden float-right h-4 mb-1 mx-1" />
      
      <SubMenu links={props.item.children} subMenuHide={subMenuHide} isSubMenuOpen={isSubMenuOpen} />
    </li>
  );
};

export default MenuItem;
