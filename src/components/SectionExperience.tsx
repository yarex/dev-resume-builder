import { Experience } from "@/types/data";
import SectionHeader from "./SectionHeader";

type SectionExperienceProps = {
  experience: Experience[];
};

const SectionExperience = ({ experience }: SectionExperienceProps) => {
  return (
    <section className="mt-8">
      <SectionHeader title="Experience" />

      <div className="space-y-6">
        {experience.map((job, index) => (
          <div key={index} className="p-4 border border-gray-300 rounded-md">
            <h3 className="text-xl font-medium">{job.title}</h3>
            <p className="text-gray-600">
              {job.company} | {job.dates}
            </p>
            <p className="text-gray-700 mt-2">{job.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionExperience;
