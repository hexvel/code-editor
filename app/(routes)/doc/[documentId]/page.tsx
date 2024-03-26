"use client";

import CopyLink from "@/components/copy";
import { Header } from "@/components/header";
import Loader from "@/components/loader";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import useOrigin from "@/hooks/use-origin";
import { useQuery } from "convex/react";
import dynamic from "next/dynamic";
import { useMemo } from "react";

interface DocumentIdPageProps {
  params: {
    documentId: Id<"code">;
  };
}

const DocumentPage = ({ params }: DocumentIdPageProps) => {
  const origin = useOrigin();

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

  return (
    <>
      <Header>
        <div className='md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2'>
          <CopyLink initialData={document} />
        </div>
      </Header>
      <Editor content={document.content} editable={false} />
    </>
  );
};

export default DocumentPage;
