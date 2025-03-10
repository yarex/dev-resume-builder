import { FaGlobe } from "react-icons/fa";
import SectionHeader from "./SectionHeader";
import { Language } from "@/types/data";
import { languageIcons } from "@/consts/languages";

type SectionLanguagesProps = {
  languages: Language[];
};

const SectionLanguages = ({ languages }: SectionLanguagesProps) => {
  return (
    <section className="mt-8 print:break-inside-avoid">
      <SectionHeader title="Languages" />

      <ul className="text-gray-800 space-y-2">
        {languages.map((lang) => (
          <li
            key={lang.name}
            className="flex items-center justify-start gap-10"
          >
            <span className="flex items-center space-x-2 gap-2 min-w-[150px]">
              <span className="text-lg">
                {languageIcons[lang.name] || <FaGlobe />}
              </span>
              <span>{lang.name}</span>
            </span>
            <span className="text-sm font-medium text-gray-600">
              {lang.level}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SectionLanguages;
