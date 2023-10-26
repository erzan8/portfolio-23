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
import { FreeMode, Pagination } from "swiper";

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
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      pagination={{
        clickable: true,
      }}
      freeMode={true}
      modules={[Pagination]}
      className="h-[240px] sm:h-[380px]"
    >
      {workSlides.slides.map((item, index) => {
        return <SwiperSlide key={index}></SwiperSlide>;
      })}
    </Swiper>
  );
};

export default WorkSlider;
