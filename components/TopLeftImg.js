import Image from "next/image";

const TopLeftImg = () => {
  return (
    <div>
      <Image
        src="/top-left-img.png"
        width={400}
        height={400}
        alt=""
        className={
          "hue-rotate-[-25deg] absolute left-0 top-0 z-40 w-[200px] xl:w-[400px] mix-blend-lighten"
        }
      />
    </div>
  );
};

export default TopLeftImg;
