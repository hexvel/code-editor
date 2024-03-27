"use client";

import ConfirmDialog from "@/components/confirm";
import { Header } from "@/components/header";
import { api } from "@/convex/_generated/api";
import { tokyoNight } from "@uiw/codemirror-theme-tokyo-night";

import CodeMirror from "@uiw/react-codemirror";
import { useMutation } from "convex/react";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

import useLanguageExtension from "@/hooks/use-language-extension";
import useOrigin from "@/hooks/use-origin";
import Link from "next/link";
import { SelectLanguage } from "./ChangeLanguage";

export const CodeEditor = () => {
  const router = useRouter();
  const origin = useOrigin();
  const create = useMutation(api.code.create);

  const [content, setContent] = useState("");
  const [language, setLanguage] = useState("");
  const { lang } = useLanguageExtension(language);

  const onCreate = () => {
    if (content.length === 0) return;

    const promise = create({
      content,
      langSupport: language,
    }).then(id => {
      navigator.clipboard.writeText(`${origin}/doc/${id}`);
      router.push(`/doc/${id}`);
    });

    toast.promise(promise, {
      loading: "Create a new code page...",
      success: "Link copied to clipboard!",
      error: "Failed to create a new page.",
    });
  };

  return (
    <div>
      <Header>
        <div className='w-full md:ml-auto md:justify-end justify-between flex items-center gap-x-2'>
          <SelectLanguage setLanguage={setLanguage} />
          <ConfirmDialog title='Save' confirmHandler={onCreate} />
          <Link
            className='border py-2 px-4 rounded-full hover:-translate-y-1 duration-500 hidden md:flex bg-transparent transition-transform items-center space-x-2'
            href='/about'
          >
            About us
          </Link>
        </div>
      </Header>

      <CodeMirror
        className='text-xl'
        height='100vh'
        theme={tokyoNight}
        placeholder='Type some your code...'
        extensions={[lang]}
        basicSetup={{
          tabSize: 4,
        }}
        onChange={e => setContent(e)}
      />
    </div>
  );
};
