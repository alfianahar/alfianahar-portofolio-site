import Footer from "./Footer";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";

const Layout = ({ children }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(!scrolled);
      }
    };

    document.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      // clean up the event handler when the component unmounts
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <>
      <header data-active={scrolled} className="main-header">
        <Navbar />
      </header>
      <div className="main-layout">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
