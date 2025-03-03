import { ResumeDataType } from "@/types/data";

type BannerProps = {
  data: ResumeDataType;
};

const Banner = ({ data }: BannerProps) => {
  return (
    <div className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-8 px-10 shadow-lg flex items-center print:bg-blue-700 print:text-white print:py-6 print:flex">
      <div className="w-36 h-36 flex-shrink-0">
        <img
          src={data?.photo}
          alt="Profile"
          width="256"
          height="256"
          className="w-full h-full rounded-full border-4 border-white shadow-md"
        />
      </div>

      <div className="ml-6 text-left flex-grow">
        <h1 className="text-5xl font-bold drop-shadow-md">{data?.name}</h1>
        <p className="text-xl mt-1 font-medium opacity-90">
          {data?.title} • {data?.location}
        </p>
        <p className="text-sm mt-2 opacity-85">{data?.contact}</p>

        <p className="mt-2">
          <span className="font-semibold">LinkedIn:</span>
          <a
            href={data?.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 underline break-all text-white print:text-white"
          >
            {data?.linkedin}
          </a>
        </p>
      </div>
    </div>
  );
};

export default Banner;
