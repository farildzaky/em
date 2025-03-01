import React from "react";

interface ProgramCardProps {
  number: string;
  title: string;
  description: string;
  bg: string;
  textColor: string;
}

const ProgramCard: React.FC<ProgramCardProps> = React.memo(
  ({ number, title, description, bg, textColor }) => {
    return (
      <div
        className={`${bg} ${textColor} w-full lg:aspect-[12/14] rounded-xl lg:p-7 p-2 transition transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl`}
      >
        {number && <p className="font-bold text-2xl lg:text-4xl text-end">{number}</p>}
        {title && <p className="font-bold text-sm lg:text-xl mb-0 md:mb-10">{title}</p>}
        {description && (
          <p className="text-xs lg:text-sm line-clamp-[8] lg:line-clamp-none overflow-auto">
            {description}
          </p>
        )}
      </div>
    );
  }
);

export default ProgramCard;
