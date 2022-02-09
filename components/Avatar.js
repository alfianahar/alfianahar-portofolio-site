import Image from "next/image";

const Avatar = () => {
  return (
    <div className="relative inline-flex">
      <div className="h-24 w-24 rounded-full border-2 border-[#EFEFF6] bg-gradient-to-tr from-[#37cdbe] to-[#99FEFC] ">
        <Image
          src="/drink.jpg"
          alt="me"
          width={100}
          height={100}
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Avatar;
