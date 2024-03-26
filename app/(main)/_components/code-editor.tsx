'use client'

import { useState } from 'react'
import { toast } from 'sonner'

import { python } from '@codemirror/lang-python'
import { tokyoNight } from '@uiw/codemirror-theme-tokyo-night'
import CodeMirror from '@uiw/react-codemirror'

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
			<CodeMirror
				className='text-2xl'
				height='100vh'
				theme={tokyoNight}
				placeholder='Введите свой код'
				extensions={extensions}
				onChange={e => setContent(e)}
			/>
			<button
				className='absolute bottom-2 right-6 bg-slate-600 py-2 px-4 rounded-md'
				onClick={onCreate}
			>
				Сохранить
			</button>
		</div>
	)
}

export default CodeEditor
