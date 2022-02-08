import Image from "next/image";

const BioFooter = () => {
  return (
    <div>
      <div className="absolute bottom-4 z-50 flex h-6 w-full flex-row justify-center text-center blur-md">
        <p className="font-light">Made by</p>
        <div className="flex w-12">
          <Image
            src="/an-logo-blue.svg"
            alt="logo AN"
            layout="intrinsic"
            width={100}
            height={68.92}
            className=""
          />
        </div>
      </div>
      <div className="absolute bottom-4 z-50 flex h-6 w-full flex-row justify-center text-center">
        <p className="font-light">Made by</p>
        <div className="flex w-12">
          <Image
            src="/an-logo-blue.svg"
            alt="logo AN"
            layout="intrinsic"
            width={100}
            height={68.92}
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default BioFooter;
