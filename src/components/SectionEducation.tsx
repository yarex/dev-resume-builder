import { Education } from "@/types/data";
import SectionHeader from "./SectionHeader";

type SectionEducationProps = {
  education: Education[];
};

const SectionEducation = ({ education }: SectionEducationProps) => {
  return (
    <section className="mt-8 print:break-inside-avoid">
      <SectionHeader title="Education" />

      <div className="space-y-6">
        {education.map((edu, index) => (
          <div key={index} className="p-4 border border-gray-300 rounded-md">
            <h3 className="text-xl font-medium">{edu.degree}</h3>
            <p className="text-gray-600">
              {edu.university} | {edu.dates}
            </p>
            <p className="text-gray-700 mt-2">{edu.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionEducation;
