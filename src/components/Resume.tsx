import Banner from "./Banner";
import SectionAbout from "./SectionAbout";
import SectionLanguages from "./SectionLanguages";
import SectionSkills from "./SectionSkills";
import SectionExperience from "./SectionExperience";
import SectionEducation from "./SectionEducation";
import { ResumeDataType } from "@/types/data";
import SectionGdpr from "./SectionGdpr";

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

      {data?.gdpr && <SectionGdpr gdpr={data?.gdpr} />}
    </>
  );
};

export default Resume;
