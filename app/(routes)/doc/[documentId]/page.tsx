"use client";

import CopyLink from "@/components/copy";
import { Header } from "@/components/header";
import Loader from "@/components/loader";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import useLanguageExtension from "@/hooks/use-language-extension";
import { capitalizeFirstLetter } from "@/utils/helper";
import { LanguageSupport } from "@codemirror/language";
import { useQuery } from "convex/react";
import dynamic from "next/dynamic";
import { useMemo } from "react";

interface DocumentIdPageProps {
  params: {
    documentId: Id<"code">;
  };
}

const DocumentPage = ({ params }: DocumentIdPageProps) => {
  const Editor = useMemo(
    () =>
      dynamic(() => import("@/components/editor"), {
        ssr: false,
      }),
    []
  );

  const document = useQuery(api.code.getById, {
    id: params.documentId,
  });

  if (document === undefined) {
    return <Loader />;
  }

  if (document === null) {
    return <p className='text-center text-3xl'>Not found</p>;
  }

  const { lang } = useLanguageExtension(document.langSupport!);

  return (
    <>
      <Header>
        <div className='md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2'>
          <p className='text-xl'>
            {capitalizeFirstLetter(document.langSupport!)}
          </p>
          <CopyLink initialData={document} />
        </div>
      </Header>
      <Editor
        extensions={[lang as LanguageSupport]}
        content={document.content}
        editable={false}
      />
    </>
  );
};

export default DocumentPage;
