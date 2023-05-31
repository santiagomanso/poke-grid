import { type IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { type strstrstrToVoid } from "~/types/types";

//components with children
export interface children {
  children: React.ReactNode;
}

//navigation
export interface navItems {
  id: number;
  icon: IconDefinition | boolean;
  text: {
    [index: string]: string;
    en: string;
    es: string;
    de: string;
  };
  href: string;
  specialItem: boolean;
}

//LANGUAGE
export interface languageContextI {
  language: string;
  text: Dictionary;
  flag: string;
  name: string;
  setLanguage?: (arg: string) => void;
  setText?: (arg: Dictionary) => void;
  setFlag?: (arg: string) => void;
  setName?: (arg: string) => void;
  changeLanguage: strstrstrToVoid;
}
export interface LanguageText {
  home: string;
  howToPlay: string;
  shopNow: string;
  players: string;
  login: string;
  cart: string;
  myProfile: string;
  logout: string;
  welcome: string;
  greenEnergy: string;
  description: string;
  toTheGrid: string;
  // Add other translation keys and their respective types if needed
}
export interface Dictionary {
  [index: string]: object;
}
export interface locales {
  en: string;
  de: string;
  es: string;
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
  language: keyof locales;
}

export type Countries = Country[];
// THEME SWITCHER
export interface ThemeSwitcherProps {
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}
