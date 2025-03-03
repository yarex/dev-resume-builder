type SectionHeaderProps = {
  title: string;
};

const SectionHeader = ({ title }: SectionHeaderProps) => {
  return (
    <h2 className="text-2xl font-semibold mb-4 border-b-2 border-gray-300">
      {title}
    </h2>
  );
};

export default SectionHeader;
