import Image from "next/image";
import ImageUrl from "/public/top-left-img.png";

const TopLeftImg = () => {
  return (
    <div className="absolute left-0 top-0 z-10 w-[200px] opacity-50 mix-blend-color-dodge xl:w-[400px]">
      <Image src={ImageUrl} width={400} height={400} alt="" />
    </div>
  );
};

export default TopLeftImg;
