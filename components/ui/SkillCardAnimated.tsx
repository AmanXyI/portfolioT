// interface SkillCardAnimatedProps {
//   title: string;
//   content: { skill: string }[];
//   index: number;
// }
// const SkillCardAnimated: React.FC<SkillCardAnimatedProps> = ({
//   title,
//   content,
// }) => {
//   return (
//     <div className="border rounded-md px-1 py-1  w-[22rem] text-center duration-500 relative overflow-hidden ">
//       <span className="inline-flex items-center justify-center w-full h-full px-4 py-1 text-sm font-medium text-white rounded-md cursor-pointer bg-slate-950 backdrop-blur-3xl">
//         <div className="w-full px-5 py-5 bg-[#050c1b] rounded-xl z-40">
//           <h1 className="py-2 text-lg border-b-[1px] border-grey-text">
//             {title}
//           </h1>

//           <ul className="mt-8">
//             {content.map((skill, index) => {
//               return (
//                 <li key={index} className="pb-2 text-lg text-white">
//                   {skill.skill}
//                 </li>
//               );
//             })}
//           </ul>
//         </div>
//       </span>
//     </div>
//   );
// };
// export default SkillCardAnimated;

import { ReactNode } from "react";

import { twMerge } from "tailwind-merge";

type SkillCardProps = {
  heading: string;
  // content: {
  //   // skill: string;
  // };
  content: { skill: string }[];
  index: number;
};

const SkillCard: React.FC<SkillCardProps> = ({ heading, content, index }) => {
  return (
    <div
      className={twMerge(
        "flex flex-col items-start text-left duration-500  rounded-2xl px-6 py-8 w-[23rem] h-[30rem] gap-4",
        index % 2 === 0
          ? "hover:shadow-xl hover:shadow-[#69778b1c] hover:duration-500"
          : "shadow-xl shadow-[#69778b1c]"
      )}
    >
      <h1 className="font-semibold mt-2 text-[1.8rem] border-b-[.5px] border-dark-indigo w-full text-center pb-6 mb-4">
        {heading}
      </h1>
      <div className="w-full text-center text-[1.2rem] flex flex-col  justify-between h-full pb-5">
        {content.map((item, index) => {
          return (
            <p key={index} className=" text-grey-text ">
              {item.skill}
            </p>
          );
        })}
      </div>
    </div>
  );
};
export default SkillCard;
