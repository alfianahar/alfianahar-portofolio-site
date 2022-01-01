import Image from "next/image";
import Link from "next/link";
import Script from "next/script"
import { useEffect } from "react";
import Avatar from "./Avatar";
import BioFooter from "./BioFooter";

const BioLayout = ({ children }) => {

    useEffect(() => {
        const swiper = new Swiper('.swiper', {
            slidesPerView: 1,
            spaceBetween: 0,
            scrollbar: {
                el: '.swiper-scrollbar',
                draggable: true,
            }
        });
    }, [])

    return (
        <>
            <Script src="https://unpkg.com/swiper@7.3.3/swiper-bundle.min.js" strategy="beforeInteractive" />
            <div className='swiper bio-background'>
                <div className="bio-logo">
                    <Image src="/an-logo.svg" alt="logo AN" layout="responsive" width={100} height={68.92} />
                </div>
                <div className="swiper-wrapper">
                    <div className="swiper-slide bio-page">
                        <Avatar />
                        <h3 className="text-xl font-medium mt-4">Alfian Nahar</h3>
                        <p className="font-light mt-3 mb-10 tracking-widest leading-6">Full Stack Developer with <br /> Minimal UI/UX Design Skills</p>
                        { children }
                    </div>



                    <div className="swiper-slide bio-page">
                        <Image src="/me-bg.png" alt="me" width={500} height={500} className="grayscale" />
                    </div>
                </div>
                <BioFooter />
                <div class="swiper-scrollbar"></div>
            </div>
        </>
    )
}

export default BioLayout
