import { Button } from "./ui/button";

const WhyHireMe = () => {
  return (
    <div className="w-full h-[30rem] px-14 ">
      <div className="">
        <h1 className="font-semibold text-[3rem] pb-[2rem]">
          Why <span className="text-[#fd853a] ">Hire me ?</span>
        </h1>
        <p className="pb-[1rem] w-[40rem]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
          molestiae ut minima suscipit quaerat, expedita pariatur placeat quae
          sint accusamus eveniet debitis fugit iste nam fuga, impedit dolorem
          ipsam perspiciatis?
        </p>
      </div>
      <div className="flex justify-between pb-[1rem]">
        <span>
          <h1 className="text-2xl font-bold">450+</h1>
          <p>projects complited</p>
        </span>
        <span>
          <h1 className="text-2xl font-bold">450+</h1>
          <p>projects complited</p>
        </span>
      </div>
      <Button variant="bordered" className="rounded-xl">
        Hire me
      </Button>
    </div>
  );
};

export default WhyHireMe;
