"use client";

import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      id="about"
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Passionate about{" "}
        <span className="font-medium italic">
          programming and problem-solving
        </span>
        , I transitioned from{" "}
        <span className="font-medium">civil engineering</span> to{" "}
        <span className="font-medium">full-stack web development</span> through
        a coding academy. I thrive on the satisfaction of cracking complex
        challenges. Proficient in{" "}
        <span className="font-medium italic">React, Node.js, and MongoDB</span>,
        with a dash of TypeScript and Next.js, I&apos;m eager to tackle new
        tech. Currently seeking a{" "}
        <span className="font-medium italic">full-time role</span> in software
        development.
      </p>
      <p>
        <span className="italic">When I&apos;m not coding</span>, I&apos;m lost
        in novels, manga, and the world of anime and movies. Gaming is my
        escape, and I&apos;m always up for new adventures. I also enjoy{" "}
        <span className="font-medium italic">learning new things</span>.
        Expanding my horizons, I&apos;m diving into{" "}
        <span className="font-medium">microeconomics and finance</span> while
        mastering video content creation.
      </p>
    </motion.section>
  );
}

export default About;
