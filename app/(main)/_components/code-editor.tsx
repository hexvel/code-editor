'use client'

import { useState } from 'react'
import { toast } from 'sonner'

import { python } from '@codemirror/lang-python'
import { vscodeDark } from '@uiw/codemirror-theme-vscode'
import CodeMirror from '@uiw/react-codemirror'

import { Header } from '@/components/header'
import { api } from '@/convex/_generated/api'
import { useMutation } from 'convex/react'
import { randomBytes } from 'crypto'
import { useRouter } from 'next/navigation'

const extensions = [python()]

const CodeEditor = () => {
	const router = useRouter()
	const create = useMutation(api.code.create)
	const [content, setContent] = useState('')

	const onCreate = () => {
		if (content.length === 0) return

		const promise = create({
			id: randomBytes(64).toString('hex'),
			content,
		}).then(id => router.push(`/doc/${id}`))

		toast.promise(promise, {
			loading: 'Create a new code page...',
			success: 'New page created!',
			error: 'Failed to create a new page.',
		})
	}
	return (
		<div>
			<Header>
				<div className='md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2'>
					<button
						className='text-white bg-[#5d7aec] py-2 px-4 rounded-md hover:bg-[#4358ac] transition-colors'
						onClick={onCreate}
					>
						Сохранить
					</button>
				</div>
			</Header>
			<CodeMirror
				className='text-2xl'
				height='100vh'
				theme={vscodeDark}
				placeholder='Введите свой код'
				extensions={extensions}
				basicSetup={{
					tabSize: 4,
				}}
				onChange={e => setContent(e)}
			/>
		</div>
	)
}

export default CodeEditor
