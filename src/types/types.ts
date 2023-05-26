export type strstrstrToVoid = (
  arg1: string,
  arg2: string,
  arg3: string
) => void;

export type dataValueLanguage = {
  text: object | undefined;
  language: string;
  flag: string;
  name: string;
  changeLanguage: strstrstrToVoid;
};

export type noProps = object;
