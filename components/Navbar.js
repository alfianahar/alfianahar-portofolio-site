import { useEffect, useRef, useState } from "react"
import Image from "next/image";

function useOnClickOutside(ref, handler) {
//     useEffect(
//       () => {
//         const listener = (event) => {
//           if (!ref.current || ref.current.contains(event.target)) {
//             return;
//           }
//           handler(event);
//         };
//         document.addEventListener("mousedown", listener);
//         document.addEventListener("touchstart", listener);
//         return () => {
//           document.removeEventListener("mousedown", listener);
//           document.removeEventListener("touchstart", listener);
//         };
//       },
//       [ref, handler]
//     );
//   }

const Navbar = () => {
    
    // const ref = useRef();
    // const [open, setOpen] = useState(false)
    // const handleClick = () => setOpen(!open)
    // const closeMenu = () => setOpen(false)
    // useOnClickOutside(ref, () => setOpen(false))
    // const [scrolled, setScrolled] = useState(false)

    // useEffect(() => {
    //     const handleScroll = () => {
    //       const isScrolled = window.scrollY > 10;
    //       if (isScrolled !== scrolled) {
    //         setScrolled(!scrolled);
    //       }
    //     };
    
    //     document.addEventListener('scroll', handleScroll, { passive: true });
    
    //     return () => {
    //       // clean up the event handler when the component unmounts
    //       document.removeEventListener('scroll', handleScroll);
    //     };
    //   }, [scrolled]);

    return (
        <nav data-active={scrolled} ref={ref} className="flex items-center justify-between w-full h-14">
          <div className="w-14">
            <Image src="/an-logo-blue.svg" alt="logo AN" width={100} height={68.92} className=""/>
          </div>
          <div className="-mr-2">
            <box-icon name="menu-alt-right" color="#7CB8FC" size="60px"></box-icon>

          </div>
        </nav>
    )
}

export default Navbar
 