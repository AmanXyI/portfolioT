"use client";
import { LuCoffee, LuFileText, LuRocket } from "react-icons/lu";
import { twMerge } from "tailwind-merge";
import { useState } from "react";

const ContactMe = () => {
  // const [subject, setSubject] = useState("");
  return (
    <div id="contact" className="flex flex-col items-center py-10">
      <div className="mb-8 text-center mt-14">
        <p className="text-sm font-semibold text-dark-indigo">PORTFOLIO</p>
        <h1 className="mt-1 mb-3 text-3xl font-semibold">
          My Works & Projects
        </h1>
      </div>
      <div className="flex gap-5">
        <div className="px-6 py-8 rounded-md bg-navy-blue w-[40rem]">
          {/* <form
        // method="POST"
        // onSubmit={handleSubmit}
        >
          <h1 className="pb-3 text-lg">Get in touch !</h1>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Name :"
              name="name"
              // onChange={(e) => setName(e.currentTarget.value)}
              className="px-4 border rounded-md outline-none border-[#1f2937] w-full bg-navy-blue text-sm h-[2.8rem] text-white focus:border-dark-indigo pl-12"
            />
            <input
              type="email"
              placeholder="Email :"
              name="email"
              // onChange={(e) => setEmail(e.currentTarget.value)}
              className="px-4 text-white  border rounded-md outline-none border-[#1f2937] w-full bg-navy-blue text-sm h-[2.8rem] focus:border-dark-indigo pl-12"
            />
          </div>
          <div className="flex justify-between h-10 gap-6 mt-5 text-sm font-semibold">
            <button
              className={twMerge("p-[3px] w-full h-[3rem] relative")}
              onClick={() => setSubject("hire-me")}
            >
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500" />
              <div
                className={twMerge(
                  "px-0 py-2  bg-black rounded-[6px] h-full flex justify-center items-center relative group transition duration-200 text-white hover:bg-transparent gap-2",
                  subject === "hire-me" ? "bg-transparent" : ""
                )}
              >
                Hire Me <LuFileText />
              </div>
            </button>
            <button
              className={twMerge("p-[3px] w-full h-[3rem] relative")}
              onClick={() => setSubject("coffee-chat")}
            >
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500" />
              <div
                className={twMerge(
                  "px-0 py-2  bg-black rounded-[6px] h-full flex justify-center items-center relative group transition duration-200 text-white hover:bg-transparent gap-2",
                  subject === "coffee-chat" ? "bg-transparent" : ""
                )}
              >
                Coffee Chat <LuCoffee />
              </div>
            </button>
            <button
              className={twMerge("p-[3px] w-full h-[3rem] relative")}
              onClick={() => setSubject("mentorship")}
            >
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500" />
              <div
                className={twMerge(
                  "px-0 py-2  bg-black rounded-[6px] h-full flex justify-center items-center relative group transition duration-200 text-white hover:bg-transparent gap-2",
                  subject === "mentorship" ? "bg-transparent" : ""
                )}
              >
                1:1 Mentorship <LuRocket />
              </div>
            </button>
          </div>
          <textarea
            name="message"
            // onChange={(e) => setMessage(e.currentTarget.value)}
            id=""
            placeholder="Message :"
            cols={10}
            rows={4}
            className="w-full mt-5 text-white text-sm bg-[#0f172a] border border-[#1f2937] rounded-lg outline-none px-4 pl-12 py-2 min-h-[4rem]"
          ></textarea>
          <button className="w-full py-2 font-semibold text-white rounded-lg bg-dark-indigo text-md">
            Send
          </button>
        </form> */}
        </div>
        <div className="">
          <h1 className="text-lg">
            Let's set a meeting time or a coffee time!
          </h1>
        </div>
      </div>
    </div>
  );
};
export default ContactMe;
