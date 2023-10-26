import Link from "next/link";
import { RiLinkedinBoxFill } from "react-icons/ri";
const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-2xl xl:text-4xl">
      <Link
        href="http://www.linkedin.com/in/guilhem-carron"
        className="hover:text-accent transition-all duration-300"
        target="_blank"
        aria-label="Linkedin"
      >
        <RiLinkedinBoxFill />
      </Link>
      <Link
        href="CV-CARRON-Guilhem-2023.pdf"
        className="font-medium text-xl xl:text-2xl hover:text-accent transition-all duration-300"
        target="_blank"
        aria-label="Télécharger le CV"
      >
        CV
      </Link>
    </div>
  );
};

export default Socials;
