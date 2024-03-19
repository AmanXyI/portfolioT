import { twMerge } from "tailwind-merge";

const experince = [
  {
    header: "header head",
    main: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ex, excepturi, beatae tempore nostrum quaerat adipisci voluptate quod ea minus fugiat ipsam odio eveniet modi quis autem pariatur placeat? Expedita.",
  },
  {
    header: "header head",
    main: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ex, excepturi, beatae tempore nostrum quaerat adipisci voluptate quod ea minus fugiat ipsam odio eveniet modi quis autem pariatur placeat? Expedita.",
  },
  {
    header: "header head",
    main: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ex, excepturi, beatae tempore nostrum quaerat adipisci voluptate quod ea minus fugiat ipsam odio eveniet modi quis autem pariatur placeat? Expedita.",
  },
];
const WorkExp = () => {
  return (
    <div className="h-[35rem] flex  items-center flex-col my-[8rem] ">
      <h1 className="font-semibold text-[3rem] pb-[2rem]">
        My <span className="text-[#fd853a] ">Work Experince</span>
      </h1>
      {experince.map((item, index) => {
        const isOdd = index % 2;
        return (
          <article className="flex ">
            <div
              className={twMerge("opacity-1 w-[30rem] ", isOdd && "opacity-0")}
            >
              <h1 className="text-xl font-bold capitalize">{item.header}</h1>
              <p className="pb-8">{item.main}</p>
            </div>
            <div className="w-[4rem] mx-[10rem]"></div>
            <div
              className={twMerge("opacity-0 w-[30rem]", isOdd && "opacity-1")}
            >
              <h1 className="text-xl font-bold capitalize">{item.header}</h1>
              <p className="pb-8">{item.main}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default WorkExp;
