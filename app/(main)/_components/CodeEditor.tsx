"use client";

import ConfirmDialog from "@/components/confirm";
import { Header } from "@/components/header";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { api } from "@/convex/_generated/api";
import { duotoneDark } from "@uiw/codemirror-theme-duotone";

import CodeMirror from "@uiw/react-codemirror";
import { useMutation } from "convex/react";
import { randomBytes } from "crypto";

import { python } from "@codemirror/lang-python";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import ToggleSyntax from "./ToggleSyntax";

export const CodeEditor = () => {
  const router = useRouter();
  const create = useMutation(api.code.create);

  const [content, setContent] = useState("");
  const [syntax, setSyntax] = useState(false);

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
          <ToggleSyntax setSyntax={setSyntax} />
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
        className='text-xl'
        height='100vh'
        theme={duotoneDark}
        placeholder='Type something...'
        extensions={syntax ? [python()] : []}
        basicSetup={{
          tabSize: 4,
        }}
        onChange={e => setContent(e)}
      />
    </div>
  );
};
