import Head from 'next/head'
import Image from "next/image";
import { Scrollbar, Navigation } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react'
import Avatar from "../Avatar";
import BioAboutMe from './BioAboutMe';
import BioFooter from "./BioFooter";
import SocmedLink from '../SocmedLink';


const BioLayout = ({ children }) => {

    return (
        <>
            <Head>
                <title> Alfian Nahar | Biopage </title>
                <meta name="title" content="Alfian Nahar" />
                <meta name="description" content="A personal portfolio page for connected to me! Just Someone who can work on in front or back. Sometimes design UI too. Just teach me by challenging me for a work!" />
                <meta name="keywords" content="Alfian, Alfian Nahar, Freelance Web Developer, Fullstack Developer, Frontend Developer, Javascript Developer, React Developer, Next.Js Developer, GatsbyJs Developer" />
                <meta name="robots" content="index, follow" />
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="language" content="English" />
                <meta name="revisit-after" content="1 days" />
                <meta name="author" content="Alfian Nahar" />
                
                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.alfianahar.com/" />
                <meta property="og:title" content="Alfian Nahar | Fullstack Developer | Indonesia" />
                <meta property="og:description" content="A personal portfolio page for connected to me! Just Someone who can work on in front or back. Sometimes design UI too. Just teach me by challenging me for a work!" />
                <meta property="og:image" content="/metaimage.jpg" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://www.alfianahar.com/" />
                <meta property="twitter:title" content="Alfian Nahar | Fullstack Developer | Indonesia" />
                <meta property="twitter:description" content="A personal portfolio page for connected to me! Just Someone who can work on in front or back. Sometimes design UI too. Just teach me by challenging me for a work!" />
                <meta property="twitter:image" content="/metaimage.jpg" />
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
                            <Image src="/an-logo.svg" alt="logo AN" width={520.05} height={409.03} />
                        </div>
                    </div>
                    <SwiperSlide className="bio-page">
                        <Avatar />
                        <h3 className="text-xl font-medium mt-4">Alfian Nahar</h3>
                        <p className="font-light mt-3 mb-3 tracking-widest leading-6">Full Stack Developer with <br /> Minimal UI/UX Design Skills</p>
                        <SocmedLink />
                        {children}
                    </SwiperSlide>
                    <SwiperSlide className="bio-page">
                        <div className="overflow-y-auto">
                            <div className="border-2 mt-3 border-dotted rounded-xl px-3">
                                <div className="w-2/5 ">
                                    <h5 className="z-10 rounded-xl text-lg font-mono text-center -mt-4 bg-[#14273E] text-[#7CB8FC]">Hello, i am</h5>
                                </div>
                                <h3 className="text-5xl text font-semibold mt-4">Alfian Nahar</h3>
                                <p className="font-light my-4 tracking-widest leading-6">Energetic, motivated and eager to learn new skillset! Professional full-stack developer with a motivation to build something awesome </p>
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
