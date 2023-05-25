import { createContext, useState } from "react";

export const LanguageContext = createContext(null);

interface languageContextI {
  children: React.ReactNode;
}

interface contextDataI {
  language: string;
  setLanguage: (language: string) => void;
}

export const LanguageContextProvider = ({ children }: languageContextI) => {
  const [language, setLanguage] = useState("en");

  const data: contextDataI = {
    language,
    setLanguage,
  };

  return (
    <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
  );
};
