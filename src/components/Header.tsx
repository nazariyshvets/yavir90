import { useState } from "react";
import { BiMenu, BiHome, BiBriefcase, BiPhone } from "react-icons/bi";

const Header = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between bg-charcoal p-4 sm:px-12 xl:px-24">
      <a
        href="#home"
        className="text-xl font-bold text-primary sm:text-2xl xl:text-3xl"
      >
        Явір-90
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
        className={`absolute left-0 right-0 top-full flex-col gap-1 border-y border-steel-gray bg-charcoal p-4 ${isMenuOpened ? "flex" : "hidden"} sm:static sm:flex sm:flex-row sm:gap-4 sm:border-none sm:p-0 xl:gap-6`}
      >
        <a
          href="#home"
          className="flex items-center gap-1 hover:text-primary sm:text-lg xl:text-xl"
        >
          <BiHome /> Головна
        </a>
        <a
          href="#projects"
          className="flex items-center gap-1 hover:text-primary sm:text-lg xl:text-xl"
        >
          <BiBriefcase /> Проєкти
        </a>
        <a
          href="#contacts"
          className="flex items-center gap-1 hover:text-primary sm:text-lg xl:text-xl"
        >
          <BiPhone /> Контакти
        </a>
      </nav>
    </header>
  );
};

export default Header;
