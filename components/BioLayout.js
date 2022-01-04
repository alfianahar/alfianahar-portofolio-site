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
            <Swiper
                // install Swiper modules
                modules={[Scrollbar, Navigation]}
                spaceBetween={0}
                slidesPerView={1}
                navigation={{ prevEl: '.slidePrev-btn', nextEl: '.btn-nxt' }}
                scrollbar={{ draggable: true }}
                className="bio-background"
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
                <SwiperSlide className="bio-page overflow-y-auto justify-between">
                    <div>
                        <h3 className="text-2xl font-medium mt-4">About Me</h3>
                        <h3 className="text-xl font-medium mt-4">Alfian Nahar</h3>
                        <p className="font-light mt-3 mb-10 tracking-widest leading-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, aut ullam quaerat reprehenderit reiciendis itaque voluptate animi necessitatibus sapiente expedita possimus veritatis iure atque. Quidem nobis commodi voluptates facilis tempora.</p>
                    </div>
                    <BioAboutMe />
                </SwiperSlide>
                <BioFooter />
            </Swiper>
        </>
    )
}

export default BioLayout
