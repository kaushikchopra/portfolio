"use client";

import Image from "next/image";
import Link from "next/link";
import kaushik from "@/../public/kaushik.png";
import { motion } from "framer-motion";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";

const Intro = () => {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex justify-center items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "tween",
            duration: 0.2,
          }}
        >
          <Image
            src={kaushik}
            alt="Kaushik Chopra"
            width={192}
            height={192}
            quality={100}
            priority={true}
            className="h-32 w-32 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
          />
        </motion.div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl !leading-[1.5] sm:text-3xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I&apos;m Kaushik Chopra.</span> I am
        a <span className="font-bold">full-stack developer</span> with expertise
        in the <span className="font-bold">MERN stack</span>. I take pleasure in
        crafting <span className="font-bold">websites and applications</span>.
        Currently, my focus is on{" "}
        <span className="font-semibold underline">Next.js</span> and{" "}
        <span className="font-semibold underline">TypeScript.</span>
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row justify-center items-center gap-2 px-4 text-lg"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="bg-white px-7 py-3 flex items-center gap-2 rounded-full focus:scale-110 hover:scale-110 active:scale-105 transition borderBlack dark:bg-white/10"
          href="/resume.pdf"
          download
        >
          Download CV <HiDownload />
        </a>

        <div className="flex flex-row place-content-center gap-x-2">
          <a
            className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://www.linkedin.com/in/s-kaushik-chopra"
            target="_blank"
          >
            <BsLinkedin />
          </a>
          <a
            className="bg-white text-gray-700 text-[1.35rem] p-4 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://github.com/kaushikchopra"
            target="_blank"
          >
            <FaGithubSquare />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Intro;
