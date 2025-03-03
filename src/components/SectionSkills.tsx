import { SkillGroup } from "@/types/data";
import SectionHeader from "./SectionHeader";
import SkillsLegend from "./SkillsLegend";

type SectionSkillsProps = {
  skills: SkillGroup[];
};

const SectionSkills = ({ skills }: SectionSkillsProps) => {
  return (
    <section className="mt-8">
      <SectionHeader title="Skills" />
      <SkillsLegend />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skillGroup) => (
          <div
            key={skillGroup.category}
            className="shadow-lg rounded-lg p-5 bg-white"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {skillGroup.category}
            </h3>
            <ul className="text-gray-800 space-y-2">
              {skillGroup.skills.map((skill) => (
                <li
                  className="flex items-center justify-between"
                  key={skill.name}
                >
                  {skill.name}
                  <div className="flex space-x-1">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-4 h-4 rounded-full ${
                          i < skill.level ? "bg-blue-500" : "bg-gray-300"
                        }`}
                      ></div>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionSkills;
