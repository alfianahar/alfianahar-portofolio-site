import Head from 'next/head'
import Image from "next/image";
import { Scrollbar, Navigation } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react'
import Avatar from "./Avatar";
import BioAboutMe from './BioAboutMe';
import BioFooter from "./BioFooter";

const BioLayout = ({ children }) => {

    return (
        <>
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
                    <div className="bio-logo">
                        <Image src="/an-logo.svg" alt="logo AN" layout="responsive" width={100} height={68.92} />
                    </div>
                    <SwiperSlide className="bio-page">
                        <Avatar />
                        <h3 className="text-xl font-medium mt-4">Alfian Nahar</h3>
                        <p className="font-light mt-3 mb-10 tracking-widest leading-6">Full Stack Developer with <br /> Minimal UI/UX Design Skills</p>
                        {children}
                    </SwiperSlide>
                    <SwiperSlide className="bio-page">
                        <div className="overflow-y-auto">
                            <div className="border-2 mt-3 border-dotted rounded-xl px-2">
                                <div className="w-2/5 ">
                                    <h5 className="z-10 rounded-xl text-lg font-mono text-center -mt-4 bg-[#22212c] text-[#839bec]">Hello, i am</h5>

                                </div>
                                <h3 className="text-5xl font-semibold mt-4">Alfian Nahar</h3>
                                <p className="font-light mt-4 mb-10 tracking-widest leading-6">Energetic, confidence and eager to learn new skillset! Professional full-stack developer with a motivation to build something awesome </p>

                            </div>
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
