import { LIST } from "@/app/(main)/_components/languages";

const useLanguageExtension = (language: string) => {
  if (!language) {
    return { lang: LIST[0].langSupport };
  }
  const foundLang = LIST.find(languageObj => languageObj.langId === language);
  if (foundLang) {
    return { lang: foundLang.langSupport };
  }
  return { lang: LIST[0].langSupport };
};

export default useLanguageExtension;
