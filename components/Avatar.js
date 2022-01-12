import Image from "next/image"

const Avatar = () => {
    return (
        <div className="inline-flex relative">
            <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#37cdbe] to-[#99FEFC] border-2 border-[#EFEFF6] ">
                <Image src="/ava-bg.png" alt="me" width={500} height={500} className="rounded-full" />
            </div>
        </div>
    )
}

export default Avatar
