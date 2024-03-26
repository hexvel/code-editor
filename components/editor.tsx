'use client'

import { python } from '@codemirror/lang-python'
import { vscodeDark } from '@uiw/codemirror-theme-vscode'
import CodeMirror from '@uiw/react-codemirror'

const extensions = [python()]

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
				tabIndex={4}
				theme={vscodeDark}
				value={content}
				extensions={extensions}
				basicSetup={{
					tabSize: 4,
				}}
			/>
		</div>
	)
}

export default Editor
