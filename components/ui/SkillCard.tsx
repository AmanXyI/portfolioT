import { ReactNode } from "react";

import { twMerge } from "tailwind-merge";

type SkillCardProps = {
  heading: string;
  icon?: ReactNode;
  desc: string;
  index: number;
};

const SkillCard: React.FC<SkillCardProps> = ({
  heading,
  icon,
  desc,
  index,
}) => {
  return (
    <div
      className={twMerge(
        "flex flex-col items-start text-left duration-500  rounded-2xl px-6 py-8 w-[23rem] h-[33rem] gap-4",
        index % 2 === 0
          ? "hover:shadow-xl hover:shadow-[#69778b1c] hover:duration-500"
          : "shadow-xl shadow-[#69778b1c]"
      )}
    >
      {icon && (
        <div className="bg-[#121a34] size-[5rem] rounded-xl shadow-lg grid place-content-center text-dark-indigo shadow-shadow text-[2rem]">
          {icon}
        </div>
      )}

      <h1 className="font-semibold mt-2 text-[1.4rem]">{heading}</h1>
      <p className="text-[.9rem] text-grey-text ">{desc}</p>
    </div>
  );
};
export default SkillCard;
