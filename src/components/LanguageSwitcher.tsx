import { useEffect, useState, useContext, useRef } from "react";
import { LanguageContext } from "../context/LanguageContext";

import { countries } from "~/utils/countries";
import { type Country, type languageContextI } from "~/interfaces/interfaces";

//TODO -
const LanguageSwitcher = () => {
  const [open, setOpen] = useState(false); //<ul>activation
  const [activeCountry, setActiveCountry] = useState("");
  const menuRef = useRef<HTMLDivElement>(null);

  const { text, language, name, flag, changeLanguage } =
    useContext<languageContextI>(LanguageContext);

  const handleClick = (country: Country) => {
    const selectedLanguage = country.language ?? "";
    changeLanguage(
      country.flag,
      country.language,
      country.name[selectedLanguage]
    );
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  return (
    <div
      ref={menuRef}
      className="relative z-50 cursor-pointer rounded-md"
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-start gap-2 rounded-lg  px-2 duration-200">
        <img src={flag} alt="english" />
        <span className="text-gray-700 dark:text-gray-100">{language}</span>
      </div>
      <ul
        className={`fixed duration-100 ${
          open ? " scale-100" : "scale-0"
        } z-[999] flex w-40 flex-col gap-4 overflow-hidden rounded border-[1px] border-slate-300  bg-gradient-to-br from-gray-100 to-gray-200 capitalize dark:border-slate-600 dark:from-slate-900 dark:to-slate-700`}
      >
        {countries.map((country: Country) => {
          return (
            <li
              key={country.id}
              onClick={() => handleClick(country)}
              className="z-50 flex w-[90%] items-center justify-start gap-2 rounded p-3 duration-200 hover:translate-x-1 hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              <img src={country.flag} alt={country.name[language]} />
              <span className="text-gray-700 dark:text-gray-100">
                {country.name[language]}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LanguageSwitcher;
