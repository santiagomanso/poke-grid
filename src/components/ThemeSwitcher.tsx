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
      className="flex cursor-pointer rounded-full transition-colors"
    >
      <div
        className={`${
          isSelected === "dark" ? "translate-x-full " : "translate-x-0 "
        } flex items-center justify-center transition-all duration-300 ease-in-out`}
      >
        <i
          className={`${
            isSelected === "dark" ? "fa-solid fa-moon" : "fa-solid fa-sun"
          }  text-xl`}
        ></i>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
