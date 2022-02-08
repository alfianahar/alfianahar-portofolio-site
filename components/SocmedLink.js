const SocmedLink = () => {
  return (
    <div className="flex h-20 flex-row justify-center space-x-6 p-6">
      <a
        href="https://github.com/alfianahar"
        target="_blank"
        rel="noreferrer"
        aria-label="github"
        className="transition duration-300 hover:scale-125 hover:ease-out"
      >
        <box-icon
          type="logo"
          name="github"
          color="#EFEFF6"
          size="sm"
        ></box-icon>
      </a>
      <a
        href="https://www.linkedin.com/in/alfianahar/"
        target="_blank"
        rel="noreferrer"
        aria-label="linkedin"
        className="transition duration-300 hover:scale-125 hover:ease-out"
      >
        <box-icon
          type="logo"
          name="linkedin"
          color="#EFEFF6"
          size="sm"
        ></box-icon>
      </a>
      <a
        href="https://twitter.com/alfianahar"
        target="_blank"
        rel="noreferrer"
        aria-label="twitter"
        className="transition duration-300 hover:scale-125 hover:ease-out"
      >
        <box-icon
          type="logo"
          name="twitter"
          color="#EFEFF6"
          size="sm"
        ></box-icon>
      </a>
      <a
        href="https://www.tiktok.com/@alfianahar"
        target="_blank"
        rel="noreferrer"
        aria-label="tiktok"
        className="transition duration-300 hover:scale-125 hover:ease-out"
      >
        <box-icon
          type="logo"
          name="tiktok"
          color="#EFEFF6"
          size="sm"
        ></box-icon>
      </a>
      <a
        href="https://www.instagram.com/alfianahar/"
        target="_blank"
        rel="noreferrer"
        aria-label="instagram"
        className="transition duration-300 hover:scale-125 hover:ease-out"
      >
        <box-icon
          type="logo"
          name="instagram"
          color="#EFEFF6"
          size="sm"
        ></box-icon>
      </a>
    </div>
  );
};

export default SocmedLink;
