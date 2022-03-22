import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="text-center">
      <div className="relative p-4 pt-10 opacity-90 max-w-7xl mx-auto container">
      <img src="/cinema.jpg" className="object-cover h-[500px] w-full  rounded-2xl max-w-7xl mx-auto" />
      </div>
    </div>
  );
};

export default Hero;
