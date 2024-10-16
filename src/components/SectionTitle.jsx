import React from "react";

const SectionTitle = ({ text }) => {
  return (
    <div className="border-b border-base-300  pt-8  px-2 ">
      <h2 className="text-sm md:text-lg font-bold text-primary-content tracking-wide">
        {text}
      </h2>
    </div>
  );
};

export default SectionTitle;
