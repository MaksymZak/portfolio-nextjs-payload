import React from "react";
import { motion } from "framer-motion";

import ParticlesContainer from "@/(frontend)/(portfolio)/_components/ParticlesContainer";
import ProjectsBtn from "@/(frontend)/(portfolio)/_components/ProjectsBtn";
import Avatar from "@/(frontend)/(portfolio)/_components/Avatar";

import { fadeIn } from "@/utilities/variants";

type Props = {};

export default function HomePage({}: Props) {
  return (
    <div className="h-full flex-1 bg-primary/60">
      <div className="h-full w-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="container mx-auto flex h-screen flex-col justify-center text-center xl:pt-40 xl:text-left">
          <h1 className="h1">
            Transforming Ideas <br />
            Into
            <span className="text-accent-portfolio"> Digital Reality</span>
          </h1>

          <p className="mx-auto mb-10 max-w-sm xl:mx-0 xl:mb-16 xl:max-w-xl">
            Enim ex non tempor et aliqua occaecat nostrud reprehenderit
            cupidatat enim. Esse sunt cillum est duis qui et cillum in commodo
            consectetur est. Et tempor quis pariatur consectetur id sunt ut.
          </p>

          <div className="relative flex justify-center xl:hidden">
            <ProjectsBtn />
          </div>
          <div className="relative hidden xl:flex">
            <ProjectsBtn />
          </div>
        </div>
      </div>
    </div>
  );
}
