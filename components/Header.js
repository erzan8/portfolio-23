import Link from "next/link";
import Socials from "./Socials";

const Header = () => {
  return (
    <header
      className="absolute z-30 w-full flex items-center px-0 xl:h-[90] bg-site md:bg-none"
      onScroll={() => checkScroll()}
    >
      <div className="mx-auto container">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-2 py-4 md:py-8">
          <Link href="/" className=" text-2xl md:text-4xl font-medium ">
            Guilhem <span className="text-accent">Carron</span>.
          </Link>
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
