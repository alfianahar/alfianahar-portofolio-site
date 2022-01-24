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
    <nav data-active={scrolled} ref={ref} className="flex items-center justify-between w-full h-10">
      <div className="w-11 inline-flex">
        <Link href="/">
          <a className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#7CB8FC] to-[#3E6BB5] flex items-center">
            <Image src="/an-logo.svg" alt="logo AN" width={100} height={68.92} className="rounded-full" />
          </a>
        </Link>
      </div>
      <div className="h-full">
        <div className="-mr-2 lg:hidden relative" onClick={handleClick}>
          <div className={`${open ? "transition-opacity duration-300 ease-out opacity-0" : ""} absolute right-0`}>
            <box-icon name="menu-alt-right" color="#7CB8FC" size="48px" ></box-icon>
          </div>
          <div className={`${open ? "" : "transition-opacity duration-300 ease-out opacity-0"} absolute right-0`}>
            <box-icon name='x' color="#7CB8FC" size="48px"></box-icon>
          </div>
        </div>
        
        <div className="hidden lg:inline-flex lg:space-x-10 text-sm font-mono items-center">
          <Link href="">
            <a>
              About Me
            </a>
          </Link>
          <Link href="">
            <a>
              My Work
            </a>
          </Link>
          <Link href="">
            <a>
              Contact Me
            </a>
          </Link>
        <Link href="/alfianahar-resume.pdf" >
          <a target="_blank" className="border-2 border-[#7CB8FC] text-[#7CB8FC] rounded-lg py-2 px-4 text-sm font-mono hover:bg-[#3E6BB5]/20 transition duration-300 ease-out hidden lg:block ">
            My Resume
          </a>
        </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar


