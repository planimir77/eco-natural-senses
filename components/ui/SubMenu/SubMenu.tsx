import cn from "clsx";
import Link from "next/link";
import React, { useState } from "react";
import s from "./SubMenu.module.css";

type Props = {
  links: NavLink[];
  subMenuHide: () => void;
  isSubMenuOpen: boolean;
};

const SubMenu = (props: Props) => {
  const getCols = (length: number) => {
    return Math.ceil(length / 8);
  };
  const getRows = (length: number) => {
    return Math.ceil(length / cols).toString();
  };
  const subMenuHide = props.subMenuHide;
  const [cols] = useState(getCols(props.links.length));
  const [rows] = useState(getRows(props.links.length));
  const gridRows: { [key: string]: string } = {
    "6": `sm:grid-rows-[repeat(6,auto)]`,
    "8": `sm:grid-rows-[repeat(8,auto)]`,
  };
  return (
    <div
      className={cn(s.sub_menu, `${props.isSubMenuOpen ? "grid" : "hidden"}`)}
    >
      <ul
        className={cn(
          `grid-cols-1 ${
            cols > 1
              ? "sm:grid-cols-[repeat(2,minmax(0,1fr))] sm:grid-flow-col"
              : "sm:grid-cols-[repeat(1,minmax(0,1fr))]"
          } ${gridRows[rows]}`
        )}
      >
        {props.links.map((link: NavLink) => (
          <li key={link.id} className="flex">
            <Link
              className={cn(
                `sm:flex ${
                  getCols(props.links.length) == 1
                    ? "sm:justify-center"
                    : "sm:justify-start"
                } `
              )}
              href={link.href}
              onClick={subMenuHide}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      <button
        onClick={subMenuHide}
        className="hidden sm:block absolute top-0 right-0 m-2"
        role="button"
      >
        <svg
          aria-expanded="true"
          color="#000000"
          width="30px"
          height="30px"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 64"
        >
          <polygon
            fill="currentColor"
            points="49.04 10.79 46.21 7.96 25 29.17 3.79 7.96 0.96 10.79 22.17 32 0.96 53.21 3.79 56.04 25 34.83 46.21 56.04 49.04 53.21 27.83 32 49.04 10.79"
          ></polygon>
        </svg>
      </button>
    </div>
  );
};

export default SubMenu;
