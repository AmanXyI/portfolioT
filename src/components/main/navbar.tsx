import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <div className="bg-black rounded-full w-[80vw] h-[4rem] px-2 py-2 flex justify-between mt-[2rem]">
      <div className="flex gap-[6rem]">
        <Button variant="primary">Button</Button>
        <Button className="text-white">Button</Button>
        <Button className="text-white">Button</Button>
      </div>
      <Button className="text-white">Name</Button>
      <div className="flex gap-[6rem]">
        <Button className="text-white">Button</Button>
        <Button className="text-white">Button</Button>
        <Button className="text-white">Button</Button>
      </div>
    </div>
  );
};

export default Navbar;
