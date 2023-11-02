import { Swiper, SwiperSlide } from "swiper/react";
import projects from "@/data/projects.json";

import { RxGithubLogo, RxExternalLink } from "react-icons/rx";
import { Pagination } from "swiper";
import Image from "next/image";
import Link from "next/link";

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      freeMode={true}
      modules={[Pagination]}
      className="h-[480px] sm:h-[450px]"
    >
      {projects.map((project, index) => {
        return (
          <SwiperSlide
            key={index}
            className="bg-[#0d1726] rounded-lg p-5 group "
          >
            <div className="flex flex-col justify-center ">
              <Image
                src={`/projects/${project.image}`}
                width={400}
                height={300}
                alt=""
                className="mb-3"
              />
              <p className="mb-2 text-xl text-left text-white">
                {project.title}
              </p>
              <div className="flex mb-3 gap-1 flex-wrap">
                {project.technos.map((techno, index) => {
                  return (
                    <div
                      className="w-fit border-solid border-white border-[1px] rounded-full px-2 text-sm font-extralight"
                      key={index}
                    >
                      {techno}
                    </div>
                  );
                })}
              </div>
              <p className="leading-normal mb-2">{project.desc}</p>

              <div className="absolute inset-0 bg-gradient-to-l bg-[#0d1726] from-transparent opacity-0 group-hover:opacity-90 transition-all duration-500 h-full rounded-lg">
                {/*Overlay*/}
                <div className="flex justify-center items-center gap-x-3 h-full">
                  {project.github && (
                    <Link
                      href={project.github}
                      className="cursor-pointer btn rounded-full border border-white/50 max-w-[190px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent bg-[#0d1726] group"
                    >
                      <RxGithubLogo className="text-2xl mr-2" />
                      Voir le Git
                    </Link>
                  )}
                  {project.url && (
                    <Link
                      href={project.url}
                      className="cursor-pointer btn rounded-full border border-white/50 max-w-[190px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden bg-[#0d1726] hover:border-accent group"
                    >
                      <RxExternalLink className="text-2xl mr-2" />
                      Voir le site
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
