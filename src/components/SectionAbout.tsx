import SectionHeader from "./SectionHeader";

type SectionAboutProps = {
  about: string;
};

const SectionAbout = ({ about }: SectionAboutProps) => {
  return (
    <section className="mt-8">
      <SectionHeader title="About Me" />
      <p className="text-gray-700 leading-relaxed">{about}</p>
    </section>
  );
};

export default SectionAbout;
