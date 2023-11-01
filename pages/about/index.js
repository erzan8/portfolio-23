// icons
import Avatar from "@/components/Avatar";
import Circles from "@/components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { useState } from "react";
import CountUp from "react-countup";
import {
  FaReact,
  FaWordpress,
  FaAngular,
  FaVuejs,
  FaNodeJs,
  FaDocker,
  FaGitlab,
  FaAws,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiTypescript,
  SiTailwindcss,
  SiNestjs,
  SiIonic,
  SiMongodb,
  SiApachecouchdb,
  SiMysql,
  SiPostgresql,
} from "react-icons/si";

//  data
const aboutData = [
  {
    title: "Compétences",
    info: [
      {
        title: "Frontend",
        icons: [
          { title: "React", icon: <FaReact /> },
          { title: "NextJs", icon: <SiNextdotjs /> },
          { title: "Angular", icon: <FaAngular /> },
          { title: "VueJs", icon: <FaVuejs /> },
          { title: "Typescript", icon: <SiTypescript /> },
          { title: "Tailwind", icon: <SiTailwindcss /> },
          { title: "Framer", icon: <SiFramer /> },
          { title: "Ionic", icon: <SiIonic /> },
          { title: "Wordpress", icon: <FaWordpress /> },
        ],
      },
      {
        title: "Backend | DevOps",
        icons: [
          { title: "NodeJs", icon: <FaNodeJs /> },
          { title: "NestJs", icon: <SiNestjs /> },
          { title: "GitlabCI", icon: <FaGitlab /> },
          { title: "AWS", icon: <FaAws /> },
          { title: "Docker", icon: <FaDocker /> },
        ],
      },
      {
        title: "Bases de données",
        icons: [
          { title: "MongoDB", icon: <SiMongodb /> },
          { title: "CouchDB", icon: <SiApachecouchdb /> },
          { title: "MySql", icon: <SiMysql /> },
          { title: "PostGreSql", icon: <SiPostgresql /> },
        ],
      },
    ],
  },
  {
    title: "Expériences",
    info: [
      {
        title: "Ingénieur Etudes et Développement | Sopra Steria",
        stage: "Mars 2020 - Sept. 2023",
      },
      {
        title: "Développeur Freelance",
        stage: "Fév. 2019 - Mars 2020",
      },
      {
        title: "Stage Développeur Web | Les derniers seront les premiers",
        stage: "Mai 2019 - Juil. 2019",
      },
    ],
  },
  {
    title: "Diplômes",
    info: [
      {
        title: "AWS - Cloud Practitioner",
        stage: "2022",
      },
      {
        title:
          "Master 2 Communication et Intégration Multimédia option Direction Technique",
        location: "Université Lumière Lyon 2 Bron",
        stage: "2020",
      },
      {
        title: "DUCCI2 - Communication et Conception Infographiques",
        location: "Université Lumière Lyon 2 Bron",
        stage: "2019",
      },
      {
        title: "Licence Professionnelle Métiers du Numérique en alternance",
        location: "UGA Institut de la Communication et des Médias, Echirolles",
        stage: "2018",
      },
      {
        title: "DUETI / Bachelor Communication and Languages",
        location: "University of Vaasa, Finland / IUT Nancy-Charlemagne",
        stage: "2017",
      },
      {
        title: "DUT Information-Communication option Information Numérique",
        location: "IUT Nancy-Charlemagne",
        stage: "2016",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      className="h-full py-32 text-center xl:text-left overflow-y-auto overflow-x-hidden"
    >
      <Circles />
      <div className="container mx-auto h-fit md:h-full flex flex-col justify-center items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex flex-col justify-center min-w-[50%]  z-[1]">
          <motion.h2
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { delay: 0.2, duration: 0.6 },
              },
            }}
            className="h2"
          >
            Développeur <span className="text-accent">polyvalent</span>
          </motion.h2>
          <motion.p
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { delay: 0.4, duration: 0.6 },
              },
            }}
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            Habitué aux principaux frameworks frontend, et backend dans une
            moindre mesure. <br /> J&apos;ai une appétence pour le frontend et
            suis à l&apos;aise avec les sujets gravitant autour de
            l&apos;expérience utilisateur, du design, du SEO et de
            l&apos;accessibilité, mais également avec les thématiques liées au
            Cloud et au Devops. <br />
          </motion.p>
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { delay: 0.6, duration: 0.6 },
              },
            }}
            className="h2 flex xl:justify-start justify-center  gap-x-6 pb-6"
          >
            <div className="relative flex-row justify-start items-center gap-x-4">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2 ">
                <CountUp start={0} end={4} duration={5} /> +
              </div>
              <div className="text-xs uppercase text-center xl:text-left tracking-[1px] leading-[1.4]">
                Années <br />
                d&apos;expérience
              </div>
            </div>
            <div className="relative flex-row justify-start items-center gap-x-4">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2 ">
                <CountUp start={0} end={15} duration={5} /> +
              </div>
              <div className="text-xs uppercase text-center xl:text-left tracking-[1px] leading-[1.4]">
                Projets <br />
                aboutis
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          variants={{
            hidden: { opacity: 0, x: 20 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { delay: 0.2, duration: 0.6 },
            },
          }}
          className="w-full mb:w-[50%]"
        >
          {/*Tabs*/}
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 w-fit">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={` ${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-500"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>

          <motion.div
            variants={{
              hidden: { opacity: 0, x: 20 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { delay: 0.4, duration: 0.6 },
              },
            }}
            className="py-3 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start"
          >
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center md:items-start text-white/60 py-2"
                >
                  {item.stage && (
                    <div className="relative px-2 after:w-[1px] after:h-0 md:after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                      {item.stage}
                    </div>
                  )}
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  {!item.stage && <div className="hidden md:flex">-</div>}
                  <div className="flex gap-x-4 transition-all duration-300">
                    {/*Icons*/}
                    {item.icons?.map((icon, itemIndex) => {
                      return (
                        <div key={itemIndex} className="group relative">
                          <div className="text-2xl">{icon.icon}</div>
                          <div className="opacity-0 absolute hidden md:flex text-xs font-extralight text-center group-hover:opacity-100 transition-all duration-200">
                            {icon.title}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
