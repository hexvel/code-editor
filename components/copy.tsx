"use client";

import { Doc } from "@/convex/_generated/dataModel";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import useOrigin from "@/hooks/use-origin";
import { CopyMinus, Globe } from "lucide-react";
import { useState } from "react";

const CopyLink = ({ initialData }: { initialData: Doc<"code"> }) => {
  const origin = useOrigin();
  const [copied, setCopied] = useState(false);

  const url = `${origin}/doc/${initialData._id}`;

  const onCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button size='sm' variant='ghost'>
          <CopyMinus />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-72' align='end' alignOffset={8} forceMount>
        <div className='flex flex-col items-center justify-center'>
          <Globe className='h-8 w-8 text-muted-foreground mb-2' />
          <p className='text-sm font-medium mb-2'>Copy link to this paste</p>
          <span className='text-xs text-muted-foreground mb-4'>
            Share your paste.
          </span>
          <Button onClick={onCopy} className='w-full text-xs' size='sm'>
            {!copied ? "Copy" : "Copied"}
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default CopyLink;
