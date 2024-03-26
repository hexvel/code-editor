"use client";

import ConfirmDialog from "@/components/confirm";
import { Header } from "@/components/header";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { api } from "@/convex/_generated/api";
import { python } from "@codemirror/lang-python";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";

import CodeMirror from "@uiw/react-codemirror";
import { useMutation } from "convex/react";
import { randomBytes } from "crypto";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

const extensions = [python()];

export const CodeEditor = () => {
  const router = useRouter();
  const create = useMutation(api.code.create);
  const [content, setContent] = useState("");

  const onCreate = () => {
    if (content.length === 0) return;

    const promise = create({
      id: randomBytes(64).toString("hex"),
      content,
    }).then(id => router.push(`/doc/${id}`));

    toast.promise(promise, {
      loading: "Create a new code page...",
      success: "New page created!",
      error: "Failed to create a new page.",
    });
  };
  return (
    <div>
      <Header>
        <div className='md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2'>
          <ConfirmDialog title='Save' confirmHandler={onCreate} />
          <HoverBorderGradient
            containerClassName='rounded-full'
            as='button'
            className='bg-transparent transition-transform flex items-center space-x-2'
            onClick={onCreate}
          >
            <Link href='/about'>About us</Link>
          </HoverBorderGradient>
        </div>
      </Header>
      <CodeMirror
        className='text-2xl'
        height='100vh'
        theme={vscodeDark}
        placeholder='Type something...'
        extensions={extensions}
        basicSetup={{
          tabSize: 4,
        }}
        onChange={e => setContent(e)}
      />
    </div>
  );
};
