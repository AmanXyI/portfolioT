import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <div className="bg-black rounded-full w-[80%] h-[4rem] px-2 py-2 flex justify-between mt-[2rem] fixed z-[100]">
      <Button variant="primary" className="text-white">
        Home
      </Button>
      <Button className="text-white">About Me</Button>
      <Button className="text-white">Hire Me</Button>
      <Button className="text-white">Name</Button>
      <Button className="text-white">Project</Button>
      <Button className="text-white">Resume</Button>
      <Button className="text-white">Contact</Button>
    </div>
  );
};

export default Navbar;
