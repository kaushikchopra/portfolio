import React from "react";

type SectionHeadingProp = { children: React.ReactNode };

const SectionHeading = ({ children }: SectionHeadingProp) => {
  return (
    <h2 className="text-3xl mb-8 capitalize text-center font-medium">
      {children}
    </h2>
  );
};

export default SectionHeading;
