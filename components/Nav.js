// icons
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiEnvelope,
} from "react-icons/hi2";

// nav data
export const navData = [
  { name: "accueil", path: "/", icon: <HiHome /> },
  { name: "à propos", path: "/about", icon: <HiUser /> },
  { name: "services", path: "/services", icon: <HiRectangleGroup /> },
  { name: "expériences", path: "/work", icon: <HiViewColumns /> },
  {
    name: "contact",
    path: "/contact",
    icon: <HiEnvelope />,
  },
];

const Nav = () => {
  const router = usePathname();

  return (
    <nav
      className={`flex flex-col items-center xl:justify-center xl:mt-8 gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen`}
    >
      <div
        className={`flex xl:flex-col bottom-0 gap-y-10 px-5 md:px-40 xl:px-0 h-[80px] xl:h-max py-7 w-full  items-center justify-between xl:justify-center bg-white/10 backdrop-blur-lg text-3xl xl:text-xl xl:rounded-full`}
      >
        {navData.map((link, index) => {
          return (
            <Link
              href={link.path}
              key={index}
              className={`${
                link.path === router && "text-accent"
              } relative flex items-center group hover:text-accent transition-all duration-300`}
            >
              <div className="absolute pr-14 right-1 hidden xl:group-hover:flex">
                <div
                  className={`bg-white relative flex text-primary items-center p-[6px] rounded-[3px] text-center justify-center w-auto whitespace-nowrap`}
                >
                  <div
                    className={`text-[12px] leading-none font-semibold capitalize`}
                  >
                    {link.name}
                  </div>
                  <div
                    className={`border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-3 absolute -right-3 `}
                  ></div>
                </div>
              </div>
              <div>{link.icon}</div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
