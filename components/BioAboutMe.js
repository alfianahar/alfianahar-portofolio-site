import Image from "next/image"

const BioAboutMe = () => {
    return (
        <div className="w-full  relative">
            <div className="w-full bg-[#d5ccff]/40 h-[60%] rounded-3xl absolute bottom-0"></div>
            <Image src="/me-bg.png" alt="me" layout='responsive' width={500} height={500} className="grayscale rounded-3xl" />
        </div>
    )
}

export default BioAboutMe
