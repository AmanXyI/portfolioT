interface SkillCardAnimatedProps {
  title: string;
  content: { skill: string }[];
  index: number;
}
const SkillCardAnimated: React.FC<SkillCardAnimatedProps> = ({
  title,
  content,
}) => {
  return (
    <div className="border rounded-md px-1 py-1  w-[22rem] text-center duration-500 relative overflow-hidden ">
      <span className="inline-flex items-center justify-center w-full h-full px-4 py-1 text-sm font-medium text-white rounded-md cursor-pointer bg-slate-950 backdrop-blur-3xl">
        <div className="w-full px-5 py-5 bg-[#050c1b] rounded-xl z-40">
          <h1 className="py-2 text-lg border-b-[1px] border-grey-text">
            {title}
          </h1>

          <ul className="mt-8">
            {content.map((skill, index) => {
              return (
                <li key={index} className="pb-2 text-lg text-white">
                  {skill.skill}
                </li>
              );
            })}
          </ul>
        </div>
      </span>
    </div>
  );
};
export default SkillCardAnimated;
