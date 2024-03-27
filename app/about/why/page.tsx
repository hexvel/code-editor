import { WavyBackground } from "@/components/ui/wavy-background";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why developed?",
};

const WhyPage = () => {
  return (
    <WavyBackground className='flex flex-col items-center max-w-4xl mx-auto'>
      <p className='text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center'>
        Why was this service developed?
      </p>
      <p className='text-base md:text-lg mt-4 text-white font-normal inter-var text-center'>
        In short, the project was created for entertainment purposes only. Also
        to add to my portfolio
      </p>
      <Link
        href='/about/devs'
        className='flex items-center border rounded-full mt-6 w-fit text-white gap-x-1 hover:gap-x-4 transition-all px-4 py-2'
      >
        Developers <ArrowRight />
      </Link>
    </WavyBackground>
  );
};

export default WhyPage;
