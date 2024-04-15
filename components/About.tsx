"use client";
import { FaRuler } from "react-icons/fa";
import SkillCard from "./ui/SkillCard";
import { BiPen } from "react-icons/bi";
import { LuMonitor } from "react-icons/lu";

import SkillCardAnimated from "./ui/SkillCardAnimated";

const skills = [
  {
    title: "Tech Skills",
    content: [
      {
        skill: "skill",
      },
      {
        skill: "skill",
      },
      {
        skill: "skill",
      },
      {
        skill: "skill",
      },
      {
        skill: "skill",
      },
      {
        skill: "skill",
      },
    ],
  },
  {
    title: "Soft Skills",
    content: [
      {
        skill: "skill",
      },
      {
        skill: "skill",
      },
      {
        skill: "skill",
      },
      {
        skill: "skill",
      },
      {
        skill: "skill",
      },
      {
        skill: "skill",
      },
    ],
  },
  {
    title: "Certi Skills",
    content: [
      {
        skill: "skill",
      },
      {
        skill: "skill",
      },
      {
        skill: "skill",
      },
      {
        skill: "skill",
      },
      {
        skill: "skill",
      },
      {
        skill: "skill",
      },
    ],
  },
];

const mainSkills = [
  {
    title: "Title",
    icon: <FaRuler />,
    desc: "  An experienced Product manager and a Web developer with an extremefocus on designing and developing UI and UX. Thanks to more than 10years of experience in developing products and online services besidesthe experience in running my startup, I pose a collection of skillsranging from design skills and coding with modern web technologies andtechniques to marketing, SEO, and managing skills. I canconceptualize, create, develop and maintain ",
  },
  {
    title: "Title",
    icon: <BiPen />,
    desc: "  An experienced Product manager and a Web developer with an extremefocus on designing and developing UI and UX. Thanks to more than 10years of experience in developing products and online services besidesthe experience in running my startup, I pose a collection of skillsranging from design skills and coding with modern web technologies andtechniques to marketing, SEO, and managing skills. I canconceptualize, create, develop and maintain ",
  },
  {
    title: "Title",
    icon: <LuMonitor />,
    desc: "  An experienced Product manager and a Web developer with an extremefocus on designing and developing UI and UX. Thanks to more than 10years of experience in developing products and online services besidesthe experience in running my startup, I pose a collection of skillsranging from design skills and coding with modern web technologies andtechniques to marketing, SEO, and managing skills. I canconceptualize, create, develop and maintain ",
  },
];

const About = () => {
  return (
    <section
      id="skills"
      className=" bg-navy-blue z-40 px-align py-[5rem] flex flex-col items-center"
    >
      {/* about me */}
      <article className="text-center ">
        <p className="text-sm font-semibold text-dark-indigo">Hi!</p>
        <h1 className="mt-3 mb-6 text-xl ">This is TUSHAR CHOUDHARY</h1>
        <p className="text-md text-grey-text">
          I'm Tushar Choudhary, a data science-trained product leader skilled at
          crafting user-focused solutions that wow customers and drive business
          growth. My expertise lies in defining product visions, planning
          launches, and leading cross-functional teams. I've successfully
          managed large logistics projects for industry giants like Modicare and
          Shalimar Paints, where I spearheaded digital transformations. I've
          pioneered products in alternative assets, learning solutions embraced
          by governments, and innovative NFT offerings. While applying pragmatic
          methods to ideate features, coordinate stakeholders, and oversee
          development cycles, my prime goal is delivering outstanding user
          experiences that inspire. With an inquisitive mind, I'm always
          pondering thought-provoking concepts - could black holes be cosmic
          water slides for alien vacationers? Just a wild thought! I'm grateful
          to the amazing founders and mentors who granted me the freedom to
          interact with inspiring entrepreneurs and represent organizations
          before clients. These enriching experiences fueled my passion for
          innovative ideas, even if it means late-night startup concept
          discussions.
        </p>
      </article>

      {/* skills */}
      <article className="mt-[10rem] ">
        <div className="text-center">
          <p className="text-sm font-semibold text-dark-indigo">ABOUT TUSHAR</p>
          <h1 className="mt-2 mb-8 text-4xl font-semibold">
            Product Designer, Product Manager <br />
            UI Developer
          </h1>
        </div>

        <article className="flex justify-between gap-6 ">
          {skills.map((skill, index) => {
            return (
              <SkillCardAnimated
                key={index}
                title={skill.title}
                content={skill.content}
                index={index}
              />
            );
          })}

          {/* <div className="border rounded-xl px-1 py-1 border-[#eceff133] bg-[#2b2b2b]  hover:bg-[#353737] w-[22rem] text-center duration-500 bg-[conic-gradient(from_90deg_at_50%,#0d1c3d_0%,#4F46E5_50%,#0f172a_100%)]">
            <div className="absolute bg-white rounded-full size-24 blur-xl" />
            <div className="w-full px-5 py-5 bg-[#000000] rounded-xl">
              <h1 className="py-2 text-lg bg-black rounded-xl">Tech Skills</h1>

              <ul className="mt-8">
                {skills.map((skill) => {
                  return <li className="pb-2 text-lg text-white">List Item</li>;
                })}
              </ul>
            </div>
          </div>
           */}
        </article>
      </article>

      {/* main skills */}

      <article className="text-center mt-[6rem] flex flex-col items-center">
        <h1 className="mt-1 mb-3 text-3xl font-semibold">My main skills</h1>
        <p className="text-sm font-semibold text-grey-text w-[35rem] ">
          Every person is known for some of their skills and abilities. Here are
          some of mine. Important ones!
        </p>
        <div className="flex gap-5 my-[5rem]">
          {mainSkills.map((skill, index) => {
            return (
              <SkillCard
                key={index}
                heading={skill.title}
                icon={skill.icon}
                desc={skill.desc}
                index={index}
              />
            );
          })}
        </div>
      </article>
    </section>
  );
};

export default About;
