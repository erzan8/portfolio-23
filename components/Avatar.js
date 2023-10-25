import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image
        src={"/avatargc-reworked.webp"}
        width={700}
        height={700}
        alt=""
        className="translate-z-0 h-full mix-blend-darken absolute left-[45%]"
      />
    </div>
  );
};

export default Avatar;
