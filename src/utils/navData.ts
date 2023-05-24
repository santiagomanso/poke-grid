import {
  faCircleInfo,
  faHouse,
  faListUl,
  faIdCard,
  faBolt,
  type IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

interface navDataI {
  id: number;
  icon: IconDefinition | boolean;
  text: string | boolean;
  href: string;
  specialItem: boolean;
}

type navDataArr = navDataI[];

export const navData: navDataArr = [
  {
    id: 1,
    icon: faHouse,
    text: "home",
    href: "/",
    specialItem: false,
  },
  {
    id: 2,
    icon: false,
    text: "dark/light",
    href: "",
    specialItem: true,
  },
  {
    id: 3,
    icon: false,
    text: "language",
    href: "",
    specialItem: true,
  },
  {
    id: 4,
    icon: faCircleInfo,
    text: "faq",
    href: "/faq",
    specialItem: false,
  },
  {
    id: 5,
    icon: faBolt,
    text: "grid",
    href: "/grid",
    specialItem: false,
  },
  {
    id: 6,
    icon: faListUl,
    text: "pokemons",
    href: "/pokemons",
    specialItem: false,
  },
  {
    id: 7,
    icon: faIdCard,
    text: "profile",
    href: "/profile",
    specialItem: false,
  },
];
