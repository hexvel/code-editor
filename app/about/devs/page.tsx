import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { WavyBackground } from "@/components/ui/wavy-background";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why developed?",
};

const people = [
  {
    id: 1,
    name: "Hexvel | Дима",
    designation: "Full-stack Developer",
    image: "/hexvel.jpg",
  },
  {
    id: 2,
    name: "Fsoky | Даня",
    designation: "Manager",
    image: "/fsoky.jpg",
  },
];

const WhyPage = () => {
  return (
    <WavyBackground className='flex flex-col items-center max-w-4xl mx-auto'>
      <p className='text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center'>
        The developers of this service
      </p>
      <p className='text-base md:text-lg mt-4 text-white font-normal inter-var text-center'>
        The project was designed by myself and that was it, but I was helped
        with advice by many others
      </p>
      <div className='flex flex-row items-center justify-center mt-10'>
        <AnimatedTooltip items={people} />
      </div>
      <Link
        href='/'
        className='flex items-center border rounded-full mt-6 w-fit text-white gap-x-1 hover:gap-x-4 transition-all px-4 py-2'
      >
        Home <ArrowRight />
      </Link>
    </WavyBackground>
  );
};

export default WhyPage;
