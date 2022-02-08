import SocmedLink from "./SocmedLink";

const Footer = () => {
  return (
    <div className="main-footer">
      <SocmedLink />
      <a
        href="https://github.com/alfianahar"
        target="_blank"
        rel="noopener noreferrer"
        className="-mt-3"
      >
        <p className="text-center font-mono text-xs tracking-widest">
          Designed &amp; Built with Passion <br /> by Alfian Nahar
        </p>
      </a>
    </div>
  );
};

export default Footer;
