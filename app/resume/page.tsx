import { twMerge } from "tailwind-merge";

const navLinks = [
  {
    name: "home",
    link: "home",
  },
  {
    name: "skills",
    link: "skills",
  },
  {
    name: "timeline",
    link: "timeline",
  },
  {
    name: "portfolio",
    link: "portfolio",
  },

  {
    name: "contact",
    link: "contact",
  },
];
const page = () => {
  return (
    <div className="bg-navy-blue h-[100vh] grid place-content-center">
      <nav
        className={twMerge(
          "w-full flex justify-center items-center fixed gap-[20rem]  py-[1.5rem] z-[60] duration-300 text-white bg-navy-blue  shadow-lg text-[.8rem] font-[700] uppercase"
        )}
      >
        <button className="text-[1rem] ">Tushar Choudhari</button>

        {/* nav links */}
        <div className="flex gap-14 mr-[8rem] text-[.8rem] font-[700]  uppercase">
          {navLinks.map((link, index) => {
            return (
              <a
                key={index}
                className=" duration-200 hover:text-dark-indigo text-[.8rem] font-[700]  uppercase"
                href={`/`}
              >
                {link.name}
              </a>
            );
          })}
        </div>
      </nav>

      <iframe
        className="h-[35rem] aspect"
        src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210101201653/PDF.pdf"
        width="800"
        height="1600"
      ></iframe>
    </div>
  );
};
export default page;
