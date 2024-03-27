"use client";

import { LanguageSupport } from "@codemirror/language";
import { tokyoNight } from "@uiw/codemirror-theme-tokyo-night";
import CodeMirror from "@uiw/react-codemirror";

interface EditorProps {
  editable?: boolean;
  content?: string;
  extensions: LanguageSupport[];
}

const Editor = ({ editable, content, extensions }: EditorProps) => {
  return (
    <div>
      <CodeMirror
        className='text-xl'
        height='100vh'
        editable={editable}
        tabIndex={4}
        theme={tokyoNight}
        value={content}
        extensions={extensions}
        basicSetup={{
          tabSize: 4,
        }}
      />
    </div>
  );
};

export default Editor;
