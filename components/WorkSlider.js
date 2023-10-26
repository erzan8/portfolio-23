import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import {
  RxPencil2,
  RxDesktop,
  RxRocket,
  RxArrowTopRight,
  RxMobile,
} from "react-icons/rx";
import { IoIosBuild } from "react-icons/io";
import { BsArrowRight } from "react-icons/bs";
import { Pagination } from "swiper";
import Image from "next/image";
import Link from "next/link";

// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "/thumb1.jpg",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
        },
        {
          title: "title",
          path: "/thumb3.jpg",
        },
        {
          title: "title",
          path: "/thumb4.jpg",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/thumb4.jpg",
        },
        {
          title: "title",
          path: "/thumb1.jpg",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
        },
        {
          title: "title",
          path: "/thumb3.jpg",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      freeMode={true}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 ">
              {slide.images.map((image, index) => {
                return (
                  <div
                    key={index}
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                  >
                    <div className="flex items-center justify-center relative overflow-hidden">
                      <Image src={image.path} width={500} height={300} alt="" />
                    </div>
                    {/*Overlay*/}
                    <div className="absolute inset-0 bg-gradient-to-l via-[#e838cc]  to-[#4a22bd] from-transparent opacity-0 group-hover:opacity-80 transition-all duration-500">
                      <h3>Super projet</h3>
                      <p>On adore</p>
                      <Link href="" className="cursor-pointer">
                        Lien github
                      </Link>
                      <Link href="" className="cursor-pointer">
                        Lien site
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
