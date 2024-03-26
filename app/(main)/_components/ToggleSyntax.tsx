"use client";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Dispatch, SetStateAction } from "react";

const ToggleSyntax = ({
  setSyntax,
}: {
  setSyntax: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className='mr-2 flex items-center space-x-2'>
      <Switch
        id='change-syntax-highlite'
        onCheckedChange={(mode: boolean | ((prevState: boolean) => boolean)) =>
          setSyntax(mode)
        }
      />
      <Label htmlFor='change-syntax-highlite'>Syntax Highlighting</Label>
    </div>
  );
};

export default ToggleSyntax;
