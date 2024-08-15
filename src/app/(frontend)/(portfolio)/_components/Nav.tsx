// icons
"use client";
import { cn } from "@/utilities/cn";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// nav data
export const navData = [
  { name: "home", path: "/", icon: <HiHome /> },
  { name: "about", path: "/about", icon: <HiUser /> },
  { name: "services", path: "/services", icon: <HiRectangleGroup /> },
  { name: "work", path: "/work", icon: <HiViewColumns /> },
  {
    name: "testimonials",
    path: "/testimonials",
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    name: "contact",
    path: "/contact",
    icon: <HiEnvelope />,
  },
];

const Nav = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <TooltipProvider>
      <nav className="fixed bottom-0 top-0 z-50 mt-auto flex h-max w-full flex-col items-center gap-y-4 xl:right-[2%] xl:h-screen xl:w-16 xl:max-w-md xl:justify-center">
        <div className="flex h-[80px] w-screen items-center justify-between gap-y-10 bg-white/10 px-4 py-8 text-3xl backdrop-blur-sm md:px-40 xl:h-max xl:w-full xl:flex-col xl:justify-center xl:rounded-full xl:px-0 xl:text-xl">
          {navData.map((link, index) => (
            <Tooltip key={index} delayDuration={300}>
              <TooltipTrigger asChild>
                <Link
                  className={cn(
                    "relative transition-all duration-200 hover:text-accent-portfolio",
                    link.path === pathname && "text-accent-portfolio",
                  )}
                  href={link.path}
                >
                  {link.icon}
                </Link>
              </TooltipTrigger>
              <TooltipContent className="rounded-md">
                <p className="font-sora text-xs font-semibold text-primary-portfolio first-letter:uppercase xl:text-sm">
                  {link.name}
                </p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </nav>
    </TooltipProvider>
  );
};

export default Nav;
