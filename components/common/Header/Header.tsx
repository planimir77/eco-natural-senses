"use client";

import cn from "clsx";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import LanguageSelect from "../LanguageSelect";
import SearchBar from "../SearchBar";
import UserCartBtn from "../UserCartBtn/UserCartBtn";
import Navbar from "../Navbar";
import s from "./header.module.css";
import logo from "@public/images/logo.svg";
import userIcon from "@public/images/user.svg";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  // handlechange
  const [results, setResults] = useState("");
  type changeHandler = React.ChangeEventHandler<HTMLInputElement>;

  const handleClick = () => {
    // take the parameter passed from the Child component

    console.log(`Click: value ${results}`);
  };

  const handleChange: changeHandler = (e) => {
    const { target } = e;
    if (!target.value.trim()) return setResults("");

    setResults(target.value.trim());
  };
  return (
    <div>
      <header className="py-3 sm:pt-7 sm:pb-3 md:pt-8 md:pb-4  text-white bg-emerald-900">
        <div className="px-3 sm:px-5 md:px-8">
          <div className="sm:grid sm:grid-cols-[140px_1fr] md:grid-cols-[140px_minmax(560px,auto)] lg:grid-cols-[140px_minmax(760px,auto)] sm:gap-7 md:gap-0 lg:gap-0">
            <div className="mb-4 sm:mb-0 relative">
              <div className="h-full flex justify-center items-center">
                <Link href={"/"}>
                  <Image
                    className={cn("mx-auto")}
                    priority
                    src={logo}
                    // placeholder="blur"
                    // blurDataURL={logo}
                    alt="Logo"
                  />
                </Link>
              </div>
            </div>
            <div className="sm:grid sm:grid-rows-[1fr_1fr] md:ml-10 lg:ml-12">
              <div className="sm:mb-2 text-center">
                <div className="text-[10px] xs:text-xs mt-0 mb-3 sm:mb-8 sm:px-4 text-transparent bg-clip-text bg-gradient-to-r from-[#8f5e25] via-[#fbf4a1] to-[#8f5e25]">
                  <span>DECORATIVE FLOWERS, FOLIAGE, MOSS</span>
                  <span> | </span>
                  <span>DRIED &amp; PRESERVED</span>
                  <br className="md:hidden" />
                  <span className="hidden md:inline"> | </span>
                  <span>WHOLESALE &amp; IMPORT</span>
                </div>
              </div>
              <div className="hidden place-content-between  pr-4 sm:pr-0 sm:grid sm:grid-cols-[minmax(44%,60%)_233px] md:grid-cols-[50%_240px] lg:grid-cols-[50%_270px]">
                <SearchBar
                  className="h-11"
                  // onChange={handleChange}
                  // handleClick={handleClick}
                ></SearchBar>
                {/* grid grid-cols-3 gap-5 */}
                <div className="flex sm:justify-end md:justify-evenly">
                  <LanguageSelect
                    className={cn(s.language_select)}
                  ></LanguageSelect>
                  <a className="text-sm text-[#fbf4a1] px-2" href="/login">
                    <Image
                      className="mx-auto"
                      priority
                      src={userIcon}
                      alt="user icon"
                    />
                    <span>
                      {(isLoggedIn && "My Profile") || "Log in"}
                      {!isLoggedIn && ""}
                    </span>
                  </a>
                  <UserCartBtn className={cn(s.cart)} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Navbar className="" />
    </div>
  );
}
