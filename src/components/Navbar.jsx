import { useEffect, useState } from "react";

import { navLinks, profile } from "../constants";
import { styles } from "../styles";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full fixed top-0 z-30 py-4 transition-colors duration-300 ${
        scrolled ? "bg-primary/80 backdrop-blur-md border-b border-line" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <a href="#" onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-3">
          <img src={logo} alt="" className="h-9 w-9 object-contain" />
          <span className="font-display font-semibold text-ink text-[17px]">{profile.name}</span>
        </a>

        <ul className="list-none hidden sm:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} className="text-secondary hover:text-ink text-[15px] transition-colors">
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <button type="button" aria-label="Toggle menu" onClick={() => setToggle(!toggle)}>
            <img src={toggle ? close : menu} alt="" className="w-[26px] h-[26px] object-contain" />
          </button>
          <div
            className={`${toggle ? "flex" : "hidden"} p-6 bg-surface border border-line absolute top-16 right-0 mx-4 my-2 min-w-[160px] z-10 rounded-xl`}
          >
            <ul className="list-none flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`} onClick={() => setToggle(false)} className="text-ink text-[16px]">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
