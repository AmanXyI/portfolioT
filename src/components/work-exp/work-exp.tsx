import { twMerge } from "tailwind-merge";

const experince = [
  {
    header: "header head",
    main: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, culpa!",
  },
  {
    header: "header head",
    main: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, culpa!",
  },
  {
    header: "header head",
    main: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, culpa!",
  },
];
const WorkExp = () => {
  return (
    <div className="h-[35rem] flex justify-center items-center flex-col ">
      {experince.map((item, index) => {
        const isOdd = index % 2;
        return (
          <article className="flex ">
            <div className={twMerge("opacity-1", isOdd && "opacity-0")}>
              <h1 className="text-xl font-bold capitalize">{item.header}</h1>
              <p>{item.main}</p>
            </div>
            <div className="bg-black  w-[4rem] "></div>
            <div className={twMerge("opacity-0", isOdd && "opacity-1")}>
              <h1 className="text-xl font-bold capitalize">{item.header}</h1>
              <p>{item.main}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default WorkExp;
