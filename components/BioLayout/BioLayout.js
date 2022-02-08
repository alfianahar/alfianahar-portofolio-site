import Head from "next/head";
import Image from "next/image";
import { Scrollbar, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Avatar from "../Avatar";
import BioAboutMe from "./BioAboutMe";
import BioFooter from "./BioFooter";
import SocmedLink from "../SocmedLink";

const BioLayout = ({ children }) => {
  return (
    <>
      <div className="flex h-screen items-center">
        <Swiper
          // install Swiper modules
          modules={[Scrollbar, Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={{ prevEl: ".slidePrev-btn", nextEl: ".bio-next" }}
          scrollbar={{ draggable: true }}
          className="bio-background "
        >
          <div className="absolute top-0 h-full w-full">
            <div className="bio-logo">
              <Image
                src="/an-logo.svg"
                alt="logo AN"
                width={520.05}
                height={409.03}
              />
            </div>
          </div>
          <SwiperSlide className="bio-page">
            <Avatar />
            <h3 className="mt-4 text-xl font-medium">Alfian Nahar</h3>
            <p className="mt-3 mb-3 font-light leading-6 tracking-widest">
              Full Stack Developer with <br /> Minimal UI/UX Design Skills
            </p>
            <SocmedLink />
            {children}
          </SwiperSlide>
          <SwiperSlide className="bio-page">
            <div className="overflow-y-auto">
              <div className="mt-3 rounded-xl border-2 border-dotted px-3">
                <div className="w-2/5 ">
                  <h5 className="z-10 -mt-4 rounded-xl bg-[#14273E] text-center font-mono text-lg text-[#7CB8FC]">
                    Hello, i am
                  </h5>
                </div>
                <h3 className="text mt-4 text-5xl font-semibold">
                  Alfian Nahar
                </h3>
                <p className="my-4 font-light leading-6 tracking-widest">
                  Energetic, motivated and eager to learn new skillset!
                  Professional full-stack developer with a motivation to build
                  something awesome{" "}
                </p>
              </div>
              <BioAboutMe />
            </div>
          </SwiperSlide>
          <BioFooter />
        </Swiper>
      </div>
    </>
  );
};

export default BioLayout;
