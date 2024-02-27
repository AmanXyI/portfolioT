import Hero from "./hero";
import Navbar from "./navbar";

const Main = () => {
  return (
    <div className=" h-[100vh] flex flex-col  items-center ">
      <Navbar />
      <Hero />
    </div>
  );
};

export default Main;
