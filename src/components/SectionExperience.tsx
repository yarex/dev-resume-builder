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
            <h3 className="text-xl font-medium">
              {job.company}, {job.location}
            </h3>
            {job?.roles.map((role, j) => (
              <div key={j}>
                <h3 className="text-lg font-medium">{role.title}</h3>
                <p className="text-gray-600">{role.dates}</p>
                {role.description && (
                  <p className="text-gray-700 mt-2">{role.description}</p>
                )}
                {role.responsibilities && role.responsibilities.length > 0 && (
                  <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
                    {role.responsibilities.map((task, idx) => (
                      <li key={idx}>{task}</li>
                    ))}
                  </ul>
                )}
                {role.technologies && role.technologies.length > 0 && (
                  <p className="text-gray-700 mt-2">
                    <strong>Technologies used:</strong>{" "}
                    {role.technologies.join(", ")}
                  </p>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionExperience;
