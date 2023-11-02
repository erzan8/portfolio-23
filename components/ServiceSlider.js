import { Swiper, SwiperSlide } from "swiper/react";
import {
  RxPencil2,
  RxDesktop,
  RxRocket,
  RxArrowTopRight,
  RxMobile,
} from "react-icons/rx";
import { IoIosBuild } from "react-icons/io";
import { FreeMode, Pagination } from "swiper";

// data
const serviceData = [
  {
    icon: <RxDesktop />,
    title: "Développement Web",
    description: "Développement d'applications web, vitrines, e-commerce.",
  },
  {
    icon: <RxMobile />,
    title: "Développement Mobile",
    description: "Progressive Web Apps, applications hybrides.",
  },
  {
    icon: <IoIosBuild />,
    title: "Maintenance",
    description: "Dépannage et maintenance de vos applications web.",
  },
  {
    icon: <RxRocket />,
    title: "SEO",
    description: "Optimisation et conseil pour le référencement naturel.",
  },
  {
    icon: <RxPencil2 />,
    title: "Design",
    description: "Création et intégration du design de votre site.",
  },
];

const ServiceSlider = () => {
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
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[380px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="bg-[rgba(47,56,123,0.1)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x6 sm:gap-x-0 group cursor-pointer sm:min-h-[340px] md:min-h-[315px] xl:min-h-[325px] hover:bg-[rgba(47,56,123,0.3)] transition-all duration-300">
              <div className="text-4xl text-accent mb-4 mr-3">{item.icon}</div>
              <div className="mb-8">
                <div className="mb-2 text-lg">{item.title}</div>
                <p className="max-w-[350px] leading-normal">
                  {item.description}
                </p>
              </div>
              <div className="text-3xl">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
