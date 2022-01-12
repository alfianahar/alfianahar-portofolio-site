import Head from 'next/head'
import Image from "next/image";
import { Scrollbar, Navigation } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react'
import Avatar from "./Avatar";
import BioAboutMe from './BioAboutMe';
import BioFooter from "./BioFooter";
import SocmedLink from './SocmedLink';
import Script from 'next/script'


const BioLayout = ({ children }) => {

    return (
        <>
            <Script
                src="https://unpkg.com/boxicons@2.1.1/dist/boxicons.js"
                strategy="afterInteractive"
            />
            <Head>
                <title> Alfian Nahar | Biopage </title>
                <meta name="title" content="Alfian Nahar" />
                <meta name="description" content="A personal own-made bio page for connected to me!" />
                <meta name="keywords" content="Freelance Web Developer, Fullstack Developer, Frontend Developer, Javascript Developer, React Developer, Next.Js Developer, GatsbyJs Developer" />
                <meta name="robots" content="index, follow" />
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="language" content="English" />
                <meta name="revisit-after" content="1 days" />
                <meta name="author" content="Alfian Nahar" />
            </Head>
            <div className="flex items-center h-screen">
                <Swiper
                    // install Swiper modules
                    modules={[Scrollbar, Navigation]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation={{ prevEl: '.slidePrev-btn', nextEl: '.bio-next' }}
                    scrollbar={{ draggable: true }}
                    className="bio-background "
                >
                    <div className="absolute h-full w-full top-0">
                        <div className="bio-logo">
                            <Image src="/an-logo.svg" alt="logo AN" width={520.05} height={409.03} className="-rotate-12" />
                        </div>
                    </div>
                    <SwiperSlide className="bio-page">
                        <Avatar />
                        <h3 className="text-xl font-medium mt-4">Alfian Nahar</h3>
                        <p className="font-light mt-3 mb-10 tracking-widest leading-6">Full Stack Developer with <br /> Minimal UI/UX Design Skills</p>
                        {children}
                    </SwiperSlide>
                    <SwiperSlide className="bio-page">
                        <div className="overflow-y-auto">
                            <div className="border-2 mt-3 border-dotted rounded-xl px-3">
                                <div className="w-2/5 ">
                                    <h5 className="z-10 rounded-xl text-lg font-mono text-center -mt-4 bg-[#14273E] text-[#7CB8FC]">Hello, i am</h5>
                                </div>
                                <h3 className="text-5xl text font-semibold mt-4">Alfian Nahar</h3>
                                <p className="font-light my-4 tracking-widest leading-6">Energetic, confidence and eager to learn new skillset! Professional full-stack developer with a motivation to build something awesome </p>
                            </div>
                            <SocmedLink />
                            <BioAboutMe />
                        </div>
                    </SwiperSlide>
                    <BioFooter />
                </Swiper>
            </div>
        </>
    )
}

export default BioLayout
