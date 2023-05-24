import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCircleInfo,
  faClose,
  faHouse,
  faListUl,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useState } from "react";
import { navData } from "~/utils/navData";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      {/* phones/tablets */}
      <nav className="lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed right-5 top-3 z-50 transition-all duration-150 ease-in-out active:translate-y-2"
        >
          {isOpen ? (
            <FontAwesomeIcon
              icon={faClose}
              className="text-2xl text-gray-100"
            />
          ) : (
            <FontAwesomeIcon icon={faBars} className="text-2xl" />
          )}
        </button>

        <aside
          className={`absolute h-full w-full bg-gradient-to-br from-slate-800 to-neutral-900 transition-all duration-200 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          `}
        >
          <ul className="flex h-full flex-col items-center justify-center gap-10 text-gray-100">
            <Link href="/" className="flex w-[200px] items-center gap-1">
              <FontAwesomeIcon icon={faHouse} />
              <span>home</span>
            </Link>
            <Link href="/faq" className="flex w-[200px] items-center gap-1">
              <FontAwesomeIcon icon={faCircleInfo} />
              <span>faq</span>
            </Link>
            <Link href="/faq" className="flex w-[200px] items-center gap-1">
              <FontAwesomeIcon icon={faUser} />
              <span>profile</span>
            </Link>
            <Link href="/faq" className="flex w-[200px] items-center gap-1">
              <FontAwesomeIcon icon={faListUl} />
              <span>view pokemons</span>
            </Link>
          </ul>
        </aside>
      </nav>

      {/* laptops/pc */}
      <nav className="hidden w-full bg-white px-10 py-3 shadow lg:block">
        <ul className="flex justify-between px-20">
          <Link href="/" className="flex items-center gap-1">
            <FontAwesomeIcon className="text-gray-700" icon={faHouse} />
            <span>{navData[0]?.text}</span>
          </Link>
          <div className="flex gap-10">
            {navData.map((item) => {
              if (item.specialItem && item.id > 1) {
                return <li key={item.id}>{item.text}</li>;
              }
              if (!item.specialItem && item.id > 2) {
                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    className="flex items-center gap-1"
                  >
                    <FontAwesomeIcon
                      className="text-gray-700"
                      icon={item.icon}
                    />
                    <span>{item.text}</span>
                  </Link>
                );
              }
            })}
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
