"use client";

import cn from "clsx";
import React, { useEffect } from "react";
import { useState } from "react";
import Image from "next/image";
import { gb, es, it, de, fr } from "@public/images/flags";
import styles from "./LanguageSelect.module.css";

type Props = {
  className: string;
};

const LanguageSelect: React.FC<Props> = ({ className }) => {
  const languages: SelectedLang[] = [
    {
      key: "gb",
      name: "EN",
      imgUrl: gb,
    },
    {
      key: "es",
      name: "SP",
      imgUrl: es,
    },
    {
      key: "it",
      name: "IT",
      imgUrl: it,
    },
    {
      key: "de",
      name: "DE",
      imgUrl: de,
    },
    {
      key: "fr",
      name: "FR",
      imgUrl: fr,
    },
  ];

  const [langState, setLangState] = useState<SelectedLang>(languages[0]);
  const [isOpenState, setIsOpenState] = useState(false);

  const setLocalStorageItem = (key: string, value: string) => {
    localStorage.setItem(key, value);
  };

  const setLangStateByKey = (key: string) => {
    const lang = getLangByKey(key);
    setLangState(lang);
  };

  useEffect(() => {
    let key = localStorage.getItem("lang");
    if (!key) {
      key = langState.key;
      setLocalStorageItem("lang", key);
    } else {
      setLangStateByKey(key);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggle = () => {
    setIsOpenState(!isOpenState);
  };

  const getLangByKey = (key: string) => {
    const lang = languages.find((l) => l.key == key) || languages[0];
    return lang;
  };

  const setLang = (e: any, key: string) => {
    setLangStateByKey(key);
    e.preventDefault();
    e.stopPropagation();
    setLocalStorageItem("lang", key);
    toggle();
  };

  return (
    <div className={cn(className, "text-sm")}>
      <div className={`${styles.lang_menu} relative`}>
        <div
          onClick={toggle}
          className={`text-[#fbf4a1] ${styles.selected_lang}  ${
            !isOpenState
              ? "after:rotate-45 after:-translate-y-40px after:mb-[2px]"
              : "after:-rotate-[135deg] after:-translate-y-40px after:mt-[6px]"
          }`}
        >
          <Image
            src={langState.imgUrl}
            width={28}
            height={28}
            alt="lang flag"
            className="mt-[2px] mx-auto mb-[6px] w-[28px] h-auto"
          />
          {/* <Image
                src={globe}
                width={30}
                height={30}
                alt='globe'
                className="mb-1"
            /> */}
          <span>{langState.name}</span>
        </div>
        <ul className={`w-14 ${!isOpenState ? "hidden" : ""}`}>
          {languages.map((lang) => (
            <li key={lang.key}>
              <a href="" onClick={() => setLang(event, lang.key)}>
                <Image
                  src={lang.imgUrl}
                  width="4"
                  height="3"
                  sizes="100vw"
                  className="mb-[2px] w-full h-auto image-spinner"
                  alt="lang flag"
                />
                <span className="font-bold text-gray-700">{lang.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default LanguageSelect;
