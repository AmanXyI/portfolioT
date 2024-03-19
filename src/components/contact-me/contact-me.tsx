const data = [
  {
    head: "Market",
  },
  {
    head: "Data Analysis",
  },
  {
    head: "GTM Starategy",
  },
  {
    head: "Design",
  },

  {
    head: "Market",
  },
  {
    head: "Data Analysis",
  },
  {
    head: "GTM Starategy",
  },
  {
    head: "Design",
  },

  {
    head: "Market",
  },
  {
    head: "Data Analysis",
  },
  {
    head: "GTM Starategy",
  },
  {
    head: "Design",
  },
];
const ContactMe = () => {
  return (
    <div className="">
      contact form
      <div className="w-full h-[8rem] bg-[#fb6514] rounded-tl-[2rem] rounded-br-[2rem] overflow-hidden">
        <div className="w-[200%] h-[3rem] bg-white rotate-[-3deg] translate-y-2 translate-x-[-1rem] flex justify-center items-center overflow-hidden">
          {data.map((item) => {
            return (
              <p className="px-1 text-[2rem] font-semibold">{item.head} ⭐</p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
