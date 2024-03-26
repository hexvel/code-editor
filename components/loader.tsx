import { LoaderCircle } from 'lucide-react'

const Loader = () => {
	return (
		<div className='bg-black opacity-65 absolute h-full w-full flex justify-center items-center'>
			<LoaderCircle className='animate-spin h-5 w-5 text-white' />
			<p className='ml-2 text-white text-2xl'>Загрузка кода...</p>
		</div>
	)
}

export default Loader
