"use client";

import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { FaDownload } from "react-icons/fa";

import Resume from "./Resume";
import { ResumeDataType } from "@/types/data";

type AppProps = {
  data: ResumeDataType;
};

const App = ({ data }: AppProps) => {
  const resumeRef = useRef(null);

  const handlePrint = useReactToPrint({
    contentRef: resumeRef,
    documentTitle: `${data.name}_Resume`,
  });

  return (
    <div className="bg-gray-100 text-gray-800 p-6">
      <div className="text-center my-6 print:hidden">
        <button
          onClick={() => handlePrint()}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 flex items-center mx-auto"
        >
          <FaDownload className="mr-2" /> Preview & Download PDF
        </button>
      </div>

      <div
        ref={resumeRef}
        className="print:bg-white print:text-black print:p-4"
      >
        <Resume data={data} />
      </div>
    </div>
  );
};

export default App;
