import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <Link
        href="/work"
        className="group relative flex size-[185px] items-center justify-center bg-circleStar bg-cover bg-center bg-no-repeat"
      >
        <Image
          src={"/rounded-text.png"}
          width={141}
          height={148}
          className="h-full max-h-[148px] w-full max-w-[141px] animate-spin-slow"
        />

        <HiArrowRight className="absolute text-4xl transition duration-200 group-hover:translate-x-2" />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
