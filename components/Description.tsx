import React from "react";

interface IDescriptionProps {
  title: string;
  children: any;
}
const Description: React.FC<IDescriptionProps> = ({ children, title }) => {
  return (
    <div className="mb-4">
      <h2 className="text-xl font-bold">• {title}</h2>
      <div>{children}</div>
    </div>
  );
};

export default Description;
