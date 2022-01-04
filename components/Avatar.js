import Image from "next/image"

const Avatar = () => {
    return (
        <div className="inline-flex relative">
            <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#37cdbe] to-[#2aa79b] border-2 border-[#d5ccff] ">
                <Image src="/me-bg.png" alt="me" width={500} height={500} className="rounded-full" />
            </div>
        </div>
    )
}

export default Avatar
