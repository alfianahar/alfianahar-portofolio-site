import Link from "next/link";

const Hero = () => {
  return (
    <div className=" flex h-screen flex-col justify-center">
      <span className="font-mono text-xs font-medium leading-7 text-[#7CB8FC]">
        Get to know me, I&apos;m
      </span>
      <h1 className="text-5xl font-semibold leading-[4.5rem]">Alfian Nahar</h1>
      <p className="mt-2 text-sm font-normal leading-6 tracking-wider opacity-60">
        Energetic and Motivated Full Stack Developer. Always on exploring,
        learning, and practicing a new skill set. <br />
        Actively seeking a project or full-time job, TL:DR -&gt;{" "}
        <span className="font-medium text-[#28C14C]">Open to Work!</span>
      </p>
      <Link href="/bio">
        <a className="button mt-6">
          <box-icon name="list-ul" color="#040c15" size="md"></box-icon>
          <p className="flex-grow">Go to My Bio</p>
        </a>
      </Link>
    </div>
  );
};

export default Hero;
