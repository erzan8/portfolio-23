import Circles from "@/components/Circles";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

const Success = () => {
  return (
    <div className="h-full py-36 flex flex-col items-center justify-center">
      <Circles />
      <div className="container mx-auto w-full">
        <h2
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { delay: 0.2, duration: 0.6 },
            },
          }}
          className="h2 xl:mt-8 text-center"
        >
          Votre message a bien été envoyé <span className="text-accent">.</span>
        </h2>
        <Link href="/">
          <button className="btn rounded-full border border-white/50 max-w-[200px] p-8 mt-3 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent mx-auto group">
            <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
              Vers l&apos;accueil
            </span>
            <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
