"use client";

import { Header } from "@/components/header";
import Loader from "@/components/loader";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import useOrigin from "@/hooks/use-origin";
import { useQuery } from "convex/react";
import { CopyIcon } from "lucide-react";

interface DocumentIdPageProps {
  params: {
    documentId: Id<"code">;
  };
}

const DocumentPage = ({ params }: DocumentIdPageProps) => {
  const origin = useOrigin();

  const document = useQuery(api.code.getById, {
    id: params.documentId,
  });

  if (document === undefined) {
    return <Loader />;
  }

  if (document === null) {
    return <p className='text-center text-3xl'>Not found</p>;
  }

  const copyHandler = () => {
    const url = `${origin}/doc/${document._id}`;
    navigator.clipboard.writeText(url);
  };

  return (
    <>
      <Header>
        <div className='md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2'>
          <CopyIcon
            onClick={copyHandler}
            className='text-white cursor-pointer hover:-translate-y-1 transition-transform duration-300'
          />
        </div>
      </Header>
      <TextGenerateEffect words={document.content as string} />
    </>
  );
};

export default DocumentPage;
