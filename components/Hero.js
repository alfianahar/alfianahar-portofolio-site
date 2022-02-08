import Link from "next/link";
import Lottie from "react-lottie";
import { useEffect, useState } from "react";



const Hero = () => {
  const [animationData, setAnimationData] = useState()

  useEffect(() => {
    import('../public/lotties/blogging-pixeltrue.json').then(setAnimationData)
  }, [])

  if (!animationData) return;

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  }

  return (
    <div className="flex h-screen flex-col lg:flex-row justify-center items-center" >
      <div className="flex flex-col md:w-4/5 mt-4 lg:-mr-24 ">
        <span className="font-mono text-xs md:text-sm font-medium leading-7 md:leading-8 text-[#7CB8FC]">
          Get to know me, I&apos;m
        </span>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-[4.5rem] md:leading-[5.5rem] lg:leading-[6rem] ">Alfian Nahar</h1>
        <p className="mt-2 text-sm md:text-base font-normal leading-6 md:leading-7 tracking-wider">
          <span className="opacity-60">
            Energetic and Motivated Full Stack Developer. Always on exploring,
            learning, and practicing a new skill set. <br />
            Actively seeking a project or full-time job, TL:DR -&gt;
          </span>
          <span className="font-medium text-[#28C14C] "> Open to Work! </span>
        </p>
        <Link href="/bio">
          <a className="button mt-6 md:w-2/4">
            <box-icon name="list-ul" color="#040c15" size="md"></box-icon>
            <p className="flex-grow">Go to My Bio</p>
          </a>
        </Link>
      </div>
      <div className="mt-9 lg:mt-14 lg:w-11/12 h-2/6 md:h-auto scale-110 md:scale-105">
        <Lottie
          options={defaultOptions}
          ariaRole=""
          isClickToPauseDisabled={true}
          on
        />
      </div>
    </div>

  );
};

export default Hero;
