import Link from "next/link";

const Hero = () => {
    return (
        <div className="flex flex-col justify-center h-screen">
            <span className="text-xs font-mono font-medium text-[#7CB8FC] leading-7">
                Get to know me, I&apos;m
            </span>
            <h1 className="text-5xl font-semibold leading-[4.5rem]">
                Alfian Nahar
            </h1>
            <p className="font-normal tracking-wider leading-6 text-sm mt-2 opacity-60">
            Energetic and Motivated Full Stack Developer. Always on exploring, learning, and practicing a new skill set. <br/>
            Actively seeking a project or full-time job, TL:DR -&gt; <span className="text-[#28C14C] font-medium">Open to Work!</span>
            </p>
            <Link href="/bio">
                <a className="button mt-6">
                    <box-icon name="list-ul" color="#040c15" size="md"></box-icon>
                    <p className="flex-grow">
                        Go to My Bio
                    </p>
                </a>
            </Link>
        </div>
    )
}

export default Hero;
