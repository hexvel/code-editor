'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const AboutPage = () => {
	return (
		<div className='h-full flex items-center justify-center'>
			<motion.div
				initial={{ opacity: 0.0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{
					delay: 0.3,
					duration: 0.8,
					ease: 'easeInOut',
				}}
				className='relative flex flex-col gap-4 items-center justify-center px-4'
			>
				<div className='text-3xl md:text-7xl font-bold text-white text-center'>
					Welcome to the about us page!
				</div>
				<div className='font-extralight text-base md:text-4xl text-neutral-200 py-4'>
					You can read more about the service here
				</div>
				<Link
					href='/about/why'
					className='flex items-center bg-black rounded-full mt-6 w-fit text-white gap-x-1 hover:gap-x-4 transition-all px-4 py-2'
				>
					Lets go! <ArrowRight />
				</Link>
			</motion.div>
		</div>
	)
}

export default AboutPage
