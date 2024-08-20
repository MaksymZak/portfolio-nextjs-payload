"use client";

import TopLeftImg from "./_components/TopLeftImg";
import Header from "./_components/Header";
import Nav from "./_components/Nav";
import Transition from "./_components/Transition";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname}>
        <div className="page relative flex flex-col bg-site bg-cover bg-no-repeat text-white">
          <Transition />
          <Nav />
          <Header />
          <TopLeftImg />

          {children}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
