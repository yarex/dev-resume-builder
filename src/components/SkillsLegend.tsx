const SkillsLegend = () => {
  return (
    <div className="mb-6 flex flex-wrap space-x-4 text-sm text-gray-700">
      {["Junior", "Mid", "Senior", "Expert"].map((level, index) => (
        <span key={index} className="flex items-center">
          {[...Array(index + 1)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-blue-500 mr-1"
            ></div>
          ))}
          {index + 1} ({level})
        </span>
      ))}
    </div>
  );
};

export default SkillsLegend;
