import Banner from "./Banner";
import SectionAbout from "./SectionAbout";
import SectionLanguages from "./SectionLanguages";
import SectionSkills from "./SectionSkills";
import SectionExperience from "./SectionExperience";
import SectionEducation from "./SectionEducation";
import { ResumeDataType } from "@/types/data";

type ResumeProps = {
  data: ResumeDataType;
};

const Resume = ({ data }: ResumeProps) => {
  return (
    <>
      <Banner data={data} />
      <SectionAbout about={data?.about} />

      <SectionSkills skills={data?.skills} />

      <SectionExperience experience={data?.experience} />
      <SectionEducation education={data?.education} />

      <SectionLanguages languages={data?.languages} />
    </>
  );
};

export default Resume;
