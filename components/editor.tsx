'use client'

import { javascript } from '@codemirror/lang-javascript'
import { tokyoNight } from '@uiw/codemirror-theme-tokyo-night'
import CodeMirror from '@uiw/react-codemirror'

const extensions = [javascript({ jsx: true, typescript: true })]

interface EditorProps {
	editable?: boolean
	content?: string
}

const Editor = ({ editable, content }: EditorProps) => {
	return (
		<div>
			<CodeMirror
				className='text-2xl'
				height='100vh'
				editable={editable}
				theme={tokyoNight}
				value={content}
				extensions={extensions}
			/>
		</div>
	)
}

export default Editor
