import Card from "./domain-card";

const Domain = () => {
  return (
    <div className="z-[40] w-full  translate-y-[-2.5rem] bg-black h-[45rem] rounded-[3rem] pt-20 px-14 text-white">
      <div className="flex justify-between ">
        <h1 className="text-[2.8rem] font-semibold">
          My <span className="text-[#fd853a]">Domain</span>
        </h1>
        <p className="w-[40rem]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
          magni modi ipsam ratione corrupti illo repudiandae numquam, non eius
        </p>
      </div>
      <div className="w-full  h-[30rem] px-10 py-10">
        <Card />
      </div>
    </div>
  );
};

export default Domain;
