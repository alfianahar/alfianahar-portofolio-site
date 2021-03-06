import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const ref = useRef();
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);
  const closeMenu = () => setOpen(false);
  useOnClickOutside(ref, () => setOpen(false));

  const NavbarList = () => {
    return (
      <>

        <Link href="/bio">
          <a onClick={closeMenu} className="">
            Biopage
          </a>
        </Link>
        <Link href="/alfianahar-resume-v.1.2.pdf">
          <a target="_blank" className="button-resume">
            My Resume
          </a>
        </Link>
      </>
    )
  };

  return (
    <nav className="navbar">
      <div className={`${open ? "blur-effect" : "absolute invisible"}`}></div>
      <div className="z-50 inline-flex">
        <Link href="/">
          <a className="navbar-logo" onClick={closeMenu}>
            <span className="block w-full">
              <Image
                src="/an-logo.svg"
                alt="logo AN"
                layout="responsive"
                width="100"
                height="68.92"
                className="rounded-full"
              />
            </span>
          </a>
        </Link>
      </div>
      <div ref={ref} className="relative h-full">
        <div className="relative z-50 -mr-2 lg:hidden" onClick={handleClick}>
          <div
            className={`${open ? "-translate-x-12 opacity-0" : ""
              } icon-transition`}
          >
            <box-icon name="menu" color="#7CB8FC" size="48px"></box-icon>
          </div>
          <div
            className={`${open ? "" : "translate-x-12 opacity-0"
              } icon-transition`}
          >
            <box-icon name="x" color="#7CB8FC" size="48px"></box-icon>
          </div>
        </div>

        <aside
          ref={ref}
          className={`${open ? "-translate-x-0" : "translate-x-[150%]"
            } navbar-side lg:hidden`}
        >
          <NavbarList />
        </aside>
      </div>
      <div className="hidden lg:navbar-side-lg">
        <NavbarList />
      </div>
    </nav>
  );
};

export default Navbar;

function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}