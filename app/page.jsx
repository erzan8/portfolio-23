"use client";
import Avatar from "@/components/Avatar";
import ParticlesContainer from "@/components/ParticlesContainer";
// import Avatar from "@/components/Avatar";
// import ParticlesContainer from "@/components/ParticlesContainer";
import { motion } from "framer-motion";
import Link from "next/link";
const skills = ["React", "Node", "Angular", "NextJs", "NestJs", "Typescript"];
const Home = () => {
  return (
    <div className="h-full">
      <div className="w-full h-full">
        <motion.div
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
          className="text-center flex flex-col justify-center xl:text-left h-full container mx-auto relative z-[1]"
        >
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { delay: 0.5, duration: 0.6 },
              },
            }}
            className="h1"
          >
            Développeur <br />
            <span className="text-accent">Fullstack</span>
          </motion.h1>
          <div className="flex gap-2 mb-3 justify-center xl:justify-start w-full flex-wrap">
            {skills.map((skill, index) => {
              return (
                <div
                  className="w-fit border-solid border-white border-[1px] rounded-full px-2 text-sm font-extralight"
                  key={index}
                >
                  {skill}
                </div>
              );
            })}
          </div>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { delay: 0.6, duration: 0.6 },
              },
            }}
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            Arrivé dans le monde du freelance après près de 4 années
            d&apos;expérience en ESN, je suis prêt à réaliser un projet de A à
            Z, ou bien rejoindre un projet existant et m&apos;adapter. <br />
          </motion.p>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { delay: 0.7, duration: 0.6 },
              },
            }}
          >
            <Link href="/contact">
              <button className="box">Me contacter</button>
            </Link>
          </motion.div>
        </motion.div>
        <div className="w-[1200px] h-full absolute right-0 bottom-0">
          <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-[position:-200px_230px] xl:bg-no-repeat w-full h-full absolute mix-blend-lighten  translate-z-0 hue-rotate-[-25deg]"></div>

          <ParticlesContainer />

          <div className="w-full h-full max-w-[700px] max-h-[700px] absolute bottom-0">
            <Avatar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
