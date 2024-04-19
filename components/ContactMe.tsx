"use client";
import { LuCoffee, LuFileText, LuRocket } from "react-icons/lu";
import { twMerge } from "tailwind-merge";
import { useState } from "react";
import ContactMeForm from "./ContactMeForm";
import { BiEnvelopeOpen } from "react-icons/bi";
import { Mail } from "lucide-react";

const ContactMe = () => {
  const [subject, setSubject] = useState("");
  return (
    <div id="contact" className="flex flex-col items-center py-10">
      <div className="mb-8 text-center mt-14">
        <p className="text-sm font-semibold text-dark-indigo">PORTFOLIO</p>
        <h1 className="mt-1 mb-3 text-3xl font-semibold">
          My Works & Projects
        </h1>
      </div>
      <div className="flex gap-[6rem]">
        <div className="px-6 py-8 rounded-md bg-navy-blue w-[40rem]">
          <ContactMeForm />
        </div>
        <div className="">
          <h1 className="text-[1.5rem]">
            Let's set a meeting time or a coffee time!
          </h1>
          <div className="flex gap-8 pt-8 items-center">
            <Mail />
            <div className="">
              <h1>Email</h1>
              <p className="text-[1rem] text-dark-indigo cursor-pointer">
                email@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactMe;
