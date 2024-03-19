import Card from "./domain-card";

const Domain = () => {
  return (
    <div className="z-50 w-full  translate-y-[-2.5rem] bg-black h-[46rem] rounded-[3rem] pt-20 px-14 text-white ">
      <div className="flex justify-between ">
        <h1 className="text-[2.8rem] font-semibold">
          My <span className="text-[#fd853a]">Services</span>
        </h1>
        <p className="w-[40rem]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
          magni modi ipsam ratione corrupti illo repudiandae numquam, non eius
        </p>
      </div>
      <div className="w-full  h-[34rem]  py-10 flex justify-between flex-nowrap overflow-hidden mt-6">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Domain;
