import Image from "next/image"

const BioFooter = () => {
    return (
        <div>
            <div className="absolute bottom-4 flex flex-row justify-center w-screen h-6 text-center blur-md z-50">
                <p className="font-light">Made by</p>
                <div className="w-12 flex">
                    <Image src="/an-logo-blue.svg" alt="logo AN" layout="intrinsic" width={100} height={68.92} className="" />
                </div>
            </div>
            <div className="absolute bottom-4 flex flex-row justify-center w-screen h-6 text-center z-50">
                <p className="font-light">Made by</p>
                <div className="w-12 flex">
                    <Image src="/an-logo-blue.svg" alt="logo AN" layout="intrinsic" width={100} height={68.92} className="" />
                </div>
            </div>
        </div>

    )
}

export default BioFooter

