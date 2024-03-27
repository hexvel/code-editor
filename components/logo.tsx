import { Poppins } from "next/font/google";
import Image from "next/image";

import { cn } from "@/lib/utils";
import Link from "next/link";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const Logo = () => {
  return (
    <Link href='/' className='hidden md:flex items-center gap-x-2'>
      <Image src='/logo.png' height='40' width='40' alt='Logo' />
      <p className={cn("font-semibold text-2xl text-white", font.className)}>
        HEXBin
      </p>
    </Link>
  );
};

export default Logo;
