type SectionGdprProps = {
  gdpr: string;
};

const SectionGdpr = ({ gdpr }: SectionGdprProps) => {
  return (
    <section className="mt-8">
      <p className="text-gray-700 text-xs leading-relaxed">{gdpr}</p>
    </section>
  );
};

export default SectionGdpr;
