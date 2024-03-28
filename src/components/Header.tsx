import { useState } from "react";
import { BiMenu, BiHome, BiBriefcase, BiPhone } from "react-icons/bi";

const Header = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between bg-charcoal p-4 sm:px-12 xl:px-24">
      <a href="#hero" className="flex items-center gap-2">
        <img src="/logo.png" alt="logo" className="h-7 sm:h-8 xl:h-9" />{" "}
        <span className="font-tektur text-xl font-medium text-primary sm:text-2xl xl:text-3xl">
          Явір-90
        </span>
      </a>
      <button
        className="sm:hidden"
        onClick={() => setIsMenuOpened((prevState) => !prevState)}
      >
        <BiMenu
          className={`text-3xl ${isMenuOpened ? "fill-primary" : "fill-white"}`}
        />
      </button>
      <nav
        className={`absolute left-0 right-0 top-full flex-col gap-1 border-y border-steel-gray bg-charcoal p-4 transition-colors ${isMenuOpened ? "flex" : "hidden"} sm:static sm:flex sm:flex-row sm:gap-4 sm:border-none sm:p-0 xl:gap-6`}
      >
        <a
          href="#hero"
          className="header-link flex items-center gap-1 hover:text-primary sm:text-lg xl:text-xl"
        >
          <BiHome className="header-link-icon" /> Головна
        </a>
        <a
          href="#projects"
          className="header-link flex items-center gap-1 hover:text-primary sm:text-lg xl:text-xl"
        >
          <BiBriefcase className="header-link-icon" /> Проєкти
        </a>
        <a
          href="#contacts"
          className="header-link flex items-center gap-1 hover:text-primary sm:text-lg xl:text-xl"
        >
          <BiPhone className="header-link-icon" /> Контакти
        </a>
      </nav>
    </header>
  );
};

export default Header;
