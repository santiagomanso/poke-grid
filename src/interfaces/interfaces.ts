import { type strstrstrToVoid } from "~/types/types";

//components with children
export interface children {
  children: React.ReactNode;
}

//LANGUAGE switcher
export interface languageContextI {
  language: string;
  text: object | undefined;
  flag: string;
  name: string;
  setLanguage?: (arg: string) => void;
  setText?: (arg: object) => void;
  setFlag?: (arg: string) => void;
  setName?: (arg: string) => void;
  changeLanguage: strstrstrToVoid;
}

export interface Country {
  id: number;
  name: {
    [index: string]: string;
    en: string;
    es: string;
    de: string;
  };
  flag: string;
  language: "en" | "de" | "es";
}

export interface Dictionary {
  [index: string]: object;
}

// THEME SWITCHER
export interface ThemeSwitcherProps {
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}
