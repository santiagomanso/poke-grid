import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import type { ThemeSwitcherProps } from "~/interfaces/interfaces";

const ThemeSwitcher = ({ setIsOpen }: ThemeSwitcherProps) => {
  const [isSelected, setIsSelected] = useState("dark");
  const handleSelect = () => {
    if (setIsOpen) {
      setIsOpen(false);
    }
    isSelected === "dark" ? setIsSelected("light") : setIsSelected("dark");
  };

  useEffect(() => {
    isSelected === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [isSelected]);

  return (
    <div
      onClick={handleSelect}
      className="flex w-10 cursor-pointer rounded-full  p-1 transition-colors"
    >
      <div
        className={`flex items-center justify-center  transition-all duration-300 ease-in-out
        ${isSelected === "dark" ? "translate-x-full " : "translate-x-0 "}`}
      >
        <FontAwesomeIcon
          icon={isSelected === "dark" ? faMoon : faSun}
          className={`text-2xl ${
            isSelected === "dark" ? "text-slate-300" : "text-yellow-500"
          }`}
        />
      </div>
    </div>
  );
};

export default ThemeSwitcher;
