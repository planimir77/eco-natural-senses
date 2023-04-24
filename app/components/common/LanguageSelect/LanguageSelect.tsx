"use client";

import React, { useEffect } from "react";
import { useState } from "react";
import styles from "./LanguageSelect.module.css";

export type Selected_lang = {
  key: string;
  name: string;
  imgUrl: string;
};

export default function LanguageSelect() {
  const languages: Selected_lang[] = [
    {
      key: "gb",
      name: "English",
      imgUrl:
        "url(https://shopify-script-tags.s3.eu-west-1.amazonaws.com/tlab-svg-flags/gb.svg)",
    },
    {
      key: "es",
      name: "Español",
      imgUrl:
        "url(https://shopify-script-tags.s3.eu-west-1.amazonaws.com/tlab-svg-flags/es.svg)",
    },
    {
      key: "it",
      imgUrl:
        "url(https://shopify-script-tags.s3.eu-west-1.amazonaws.com/tlab-svg-flags/it.svg)",
      name: "Italiano",
    },
    {
      key: "de",
      imgUrl:
        "url(https://shopify-script-tags.s3.eu-west-1.amazonaws.com/tlab-svg-flags/de.svg)",
      name: "German",
    },
    {
      key: "fr",
      name: "French",
      imgUrl:
        "url(https://shopify-script-tags.s3.eu-west-1.amazonaws.com/tlab-svg-flags/fr.svg)",
    },
  ];
  
  const [langState, setLangState] = useState<Selected_lang>(languages[0]);
  const [isOpenState, setIsOpenState] = useState(false);
  
  const setLocalStorageItem = (key:string,value:string)=>{
    localStorage.setItem(key, value);
  }

  const setLangStateByKey = (key:string)=> {
    const lang = getLangByKey(key);
    setLangState(lang);
  }

  useEffect(() => {
    let key = localStorage.getItem('lang');
    if (!key) {
      key = langState.key;
      setLocalStorageItem('lang', key);
    }else {
      setLangStateByKey(key);
    }
  }, []);

  const toggle = () => {
    setIsOpenState(!isOpenState);
  };

  const getLangByKey = (key: string)=>{
    const lang = languages.find(l=> l.key == key) || languages[0];
    return lang;
  };

  const setLang = (e: any, key: string)=> {
    e.preventDefault();
    e.stopPropagation();
    setLangStateByKey(key);
    setLocalStorageItem('lang', key);
    toggle();
  };

  return (
    <div className="mb-3 w-32">
      <div className={`${styles.lang_menu} w-32 relative`}>
        <div
          onClick={toggle}
          className={`${styles.selected_lang }  ${
            !isOpenState
              ? "after:rotate-45 after:-translate-y-40px after:mt-[4px]"
              : "after:-rotate-[135deg] after:-translate-y-40px after:mt-[6px]"
          }  before:bg-[${langState.imgUrl}]`}
        >
          <span className="px-2 mx-auto">{`${langState.name}`}</span>{" "}
        </div>
        <ul className={`w-[inherit] ${!isOpenState ? "hidden" : ""}`}>
          {languages.map((lang) => (
            <li key={lang.key} >
              <a href="" onClick={() => setLang(event,lang.key)} className={`before:bg-[${lang.imgUrl}]`}>
                {lang.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
