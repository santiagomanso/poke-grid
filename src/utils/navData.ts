import {
  faCircleInfo,
  faHouse,
  faListUl,
  faIdCard,
  faBolt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { type navItems } from "~/interfaces/interfaces";

// interface navDataI {
//   id: number;
//   icon: IconDefinition | boolean;
//   text: string | boolean;
//   href: string;
//   specialItem: boolean;
// }

type navDataArr = navItems[];

export const navData: navDataArr = [
  {
    id: 1,
    icon: faHouse,
    text: { en: "home", es: "inicio", de: "Startseite" },
    href: "/",
    specialItem: false,
  },
  {
    id: 2,
    icon: false,
    text: { en: "dark/light", es: "dark/light", de: "dark/light" },
    href: "",
    specialItem: true,
  },
  {
    id: 3,
    icon: false,
    text: { en: "language", es: "idioma", de: "sprache" },
    href: "",
    specialItem: true,
  },
  {
    id: 4,
    icon: faCircleInfo,
    text: { en: "how to play", es: "como jugar", de: "Spielweise" },
    href: "/faq",
    specialItem: false,
  },
  {
    id: 5,
    icon: faBolt,
    text: { en: "grid", es: "red", de: "Stromnetz" },
    href: "/grid",
    specialItem: false,
  },
  {
    id: 6,
    icon: faListUl,
    text: { en: "pokemons", es: "pokemones", de: "pokemons" },
    href: "/pokemons",
    specialItem: false,
  },
  {
    id: 7,
    icon: faIdCard,
    text: { en: "profile", es: "mi perfil", de: "main Profil" },
    href: "/profile",
    specialItem: false,
  },
  {
    id: 8,
    icon: faUser,
    text: { en: "sign in", es: "iniciar sesion", de: "Anmelden" },
    href: "/signIn",
    specialItem: false,
  },
];
