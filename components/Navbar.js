import { useEffect, useRef, useState } from "react"
import Image from "next/image";
import Link from "next/link";

function useOnClickOutside(ref, handler) {
  useEffect(
    () => {
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
    },
    [ref, handler]
  );
}

const Navbar = () => {

  const ref = useRef();
  const [open, setOpen] = useState(false)
  const handleClick = () => setOpen(!open)
  const closeMenu = () => setOpen(false)
  useOnClickOutside(ref, () => setOpen(false))
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(!scrolled);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      // clean up the event handler when the component unmounts
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav className="navbar">
      <div className={`${open ? "blur-effect" : "opacity-0 absolute" }`}></div>
      <div className="w-11 inline-flex z-50">
        <Link href="/" >
          <a className="navbar-logo" onClick={closeMenu}>
            <Image src="/an-logo.svg" alt="logo AN" width={100} height={68.92} className="rounded-full" />
          </a>
        </Link>
      </div>
      <div ref={ref} className="h-full relative">
        <div className="-mr-2 relative z-50 lg:hidden" onClick={handleClick}>
          <div className={`${open ? "icon-transition -translate-x-12" : "transition-ease-out"} absolute right-0`}>
            <box-icon name="menu" color="#7CB8FC" size="48px" ></box-icon>
          </div>
          <div className={`${open ? "transition-ease-out" : "icon-transition translate-x-12"} absolute right-0`}>
            <box-icon name='x' color="#7CB8FC" size="48px"></box-icon>
          </div>
        </div>
        
        <div ref={ref} data-active={scrolled} className={`${open ? "navbar-side-active" : "navbar-side-close" } lg:navbar-side`}>
          <Link href="">
            <a onClick={handleClick}>
              About Me
            </a>
          </Link>
          <Link href="">
            <a onClick={handleClick}>
              My Work
            </a>
          </Link>
          <Link href="">
            <a onClick={handleClick}>
              Contact Me
            </a>
          </Link>
        <Link href="/alfianahar-resume.pdf" >
          <a target="_blank" className="button-resume">
            My Resume
          </a>
        </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar


