import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Dispatch, SetStateAction } from "react";

export function SelectLanguage({
  setLanguage,
}: {
  setLanguage: Dispatch<SetStateAction<string>>;
}) {
  return (
    <Select onValueChange={e => setLanguage(e)}>
      <SelectTrigger className='w-[180px]'>
        <SelectValue placeholder='Select a language' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup onChange={e => console.log(e)}>
          <SelectLabel>Languages</SelectLabel>
          <SelectItem className='cursor-pointer' value='python'>
            Python
          </SelectItem>
          <SelectItem className='cursor-pointer' value='javascript'>
            JavaScript
          </SelectItem>
          <SelectItem className='cursor-pointer' value='csharp'>
            CSharp
          </SelectItem>
          <SelectItem className='cursor-pointer' value='java'>
            Java
          </SelectItem>
          <SelectItem className='cursor-pointer' value='xml'>
            XML
          </SelectItem>
          <SelectItem className='cursor-pointer' value='cpp'>
            CPP
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
