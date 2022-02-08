import Image from "next/image";

const BioAboutMe = () => {
  return (
    <div className="relative w-full">
      <div className="absolute bottom-0 h-[60%] w-full rounded-3xl bg-[#d5ccff]/40"></div>
      <Image
        src="/me-bg.png"
        alt="me"
        layout="responsive"
        width={500}
        height={500}
        className="rounded-3xl grayscale"
      />
    </div>
  );
};

export default BioAboutMe;
