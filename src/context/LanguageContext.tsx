//react hooks
import { useState, createContext, useEffect } from "react";

//dictionary object
import { dictionary } from "~/utils/dictionary";

//interfaces and types
import type { strstrstrToVoid } from "~/types/types";
import type { children, languageContextI } from "../interfaces/interfaces";

//initial object for the component
const initialContext: languageContextI = {
  language: "",
  text: {
    en: {
      //navbar - component
      home: "Home",
      howToPlay: "How to play",
      shopNow: "Shop now!",
      players: "Players",
      login: "Log in",
      cart: "Cart",
      //dropDown
      myProfile: "My profile",
      logout: "logout",
      //home page
      welcome: "Welcome to the PoKeGrid",
      greenEnergy: "Green energy by pokemons",
    },
    es: {
      //navbar
      home: "Inicio",
      howToPlay: "Como jugar",
      shopNow: "Comprar ya!",
      players: "Jugadores",
      login: "Iniciar sesion",
      cart: "Cart",
      //dropDown
      myProfile: "My profile",
      logout: "logout",
      //home page
      welcome: "Bienvenido a PoKeGrid",
      greenEnergy: "Energía verde por pokemones",
    },
    de: {
      //navbar - component
      home: "Startseite",
      howToPlay: "Spielregeln",
      shopNow: "Jetzt einkaufen",
      players: "Spieler",
      login: "Einloggen",
      cart: "Cart",
      //dropDown
      myProfile: "My profile",
      logout: "logout",
      //home page
      welcome: "Willkommen bei Pokegrid",
      greenEnergy: "Grüne Energie von Pokemon",
    },
  },
  flag: "",
  name: "",
  setLanguage: () => console.log("not initialized"),
  setText: () => console.log("not initialized"),
  setFlag: () => console.log("not initialized"),
  setName: () => console.log("not initialized"),
  changeLanguage: () => console.log("not initialized"),
};

export const LanguageContext = createContext<languageContextI>(initialContext);

export const LanguageProvider = ({ children }: children) => {
  const [language, setLanguage] = useState<string>("en");
  const [text, setText] = useState(dictionary.en);

  //flag
  const [flag, setFlag] = useState(
    "https://cdn3.iconfinder.com/data/icons/142-mini-country-flags-16x16px/32/flag-usa2x.png"
  );

  //country name
  const [name, setName] = useState<string>("United States");

  const changeLanguage: strstrstrToVoid = (flag, language, name) => {
    setFlag(flag);
    setLanguage(language);
    setName(name);
    setText(dictionary[language]);
  };

  //detect user language based on the navigator.language
  const getBrowserLanguage = () => {
    switch (navigator.language) {
      case "es":
        setLanguage("es");
        setText(dictionary.es);

        setFlag(
          "https://cdn3.iconfinder.com/data/icons/142-mini-country-flags-16x16px/32/flag-spain2x.png"
        );
        break;

      case "en":
        setLanguage("en");
        setText(dictionary.en);

        setFlag(
          "https://cdn3.iconfinder.com/data/icons/142-mini-country-flags-16x16px/32/flag-usa2x.png"
        );
        break;

      case "de":
        setLanguage("de");
        setText(dictionary.de);

        setFlag(
          "https://cdn3.iconfinder.com/data/icons/142-mini-country-flags-16x16px/32/flag-germany2x.png"
        );
        break;

      default:
        setLanguage("en");
        setText(dictionary.en);
        setFlag(
          "https://cdn3.iconfinder.com/data/icons/142-mini-country-flags-16x16px/32/flag-usa2x.png"
        );
        break;
    }
  };

  //call detect language function
  useEffect(() => {
    getBrowserLanguage();
  }, []);

  const data: languageContextI = {
    text,
    language,
    flag,
    name,
    changeLanguage,
  };

  return (
    <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
  );
};
