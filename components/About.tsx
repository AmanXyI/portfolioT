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
        skill: "Agile Methodology",
      },
      {
        skill: "Data Analytics",
      },
      {
        skill: "Project Managment",
      },
      {
        skill: "A/B Testing",
      },
      {
        skill: "APIs",
      },
      {
        skill: "Docker",
      },
    ],
  },
  {
    title: "Soft Skills",
    content: [
      {
        skill: "Public Speaking",
      },
      {
        skill: "Leadership",
      },
      {
        skill: "Risk Metigation",
      },
      {
        skill: "Creativity",
      },
      {
        skill: "Adaptiblity",
      },
      {
        skill: "Businesss Acumen",
      },
    ],
  },
  {
    title: "Product Managment",
    content: [
      {
        skill: "Market Reserach",
      },
      {
        skill: "UI/UX",
      },
      {
        skill: "Product Roadmap",
      },
      {
        skill: "Strategy and Vision",
      },
      {
        skill: "Product Launch",
      },
      {
        skill: "SDLC",
      },
    ],
  },
];

const mainSkills = [
  {
    title: "Managment",
    icon: <FaRuler />,
    desc: "A product professional, crafting intuitive, elegant solutions that transform businesses is my driving force. With 20 months of experience managing products in logistics, tokenization, and education, I&apos;ve developed a robust skillset spanning marketing, design, finance, and effective teamwork. This expertise empowers me to ideate innovative features and deliver impactful, user-centric products. The most rewarding part is directly engaging with customers, designers, and developers to create meaningful change.",
  },
  {
    title: "Engineering",
    icon: <BiPen />,
    desc: "Graduated with a data science degree, but building cool websites with React (like this one!).  AI and Blockchain are fascinating ! I can design, test, and deploy the entire website architecture. My data skills include wrangling data with pipelines, deploying models, and using Docker and Kafka.  College NLP project with TensorFlow? Aced it! I can turn your data into compelling stories with Power BI. Plus, my Excel skills are top-notch (VLOOKUP champion!). Currently working on an LLM project!.",
  },
  {
    title: "Explorer",
    icon: <LuMonitor />,
    desc: "Insatiable curiosity drives me to unearth opportunities in any field – design, engineering, finance – you name it. Like a fearless adventurer, I relish deep dives into complex concepts, uncovering hidden insights that fuel rapid learning and adaptation. But I&apos;m not a lone wolf. A confident communicator, I ignite teams with my passion for discovery. This unique blend of curiosity, strategic thinking, and communication makes me a difference-maker, ready to conquer challenges and build rock-solid products.",
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
        <p className="text-[1rem] font-semibold text-[#909eb2] px-[12rem]">
          I&apos;m Tushar Choudhary, a data science-trained product leader
          skilled at crafting user-focused solutions that wow customers and
          drive business growth. My expertise lies in defining product visions,
          planning launches, and leading cross-functional teams. I&apos;ve
          successfully managed large logistics projects for industry giants like
          Modicare and Shalimar Paints, where I spearheaded digital
          transformations. I&apos;ve pioneered products in alternative assets,
          learning solutions embraced by governments, and innovative NFT
          offerings. While applying pragmatic methods to ideate features,
          coordinate stakeholders, and oversee development cycles, my prime goal
          is delivering outstanding user experiences that inspire. With an
          inquisitive mind, I&apos;m always pondering thought-provoking concepts
          - could black holes be cosmic water slides for alien vacationers? Just
          a wild thought! I&apos;m grateful to the amazing founders and mentors
          who granted me the freedom to interact with inspiring entrepreneurs
          and represent organizations before clients. These enriching
          experiences fueled my passion for innovative ideas, even if it means
          late-night startup concept discussions.
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

        <article className="flex justify-between gap-6 my-[3rem]">
          {skills.map((skill, index) => {
            return (
              <SkillCardAnimated
                key={index}
                heading={skill.title}
                content={skill.content}
                index={index}
              />
            );
          })}
        </article>
      </article>

      {/* main skills */}

      <article className="text-center mt-[6rem] flex flex-col items-center">
        <h1 className="mt-1 mb-3 text-3xl font-semibold">My main skills</h1>
        <p className="text-[1rem] font-semibold text-grey-text w-[35rem] ">
          Every person is known for some of their skills and abilities. Here are
          some of mine. Important ones!
        </p>
        <div className="flex gap-5 my-[2rem]">
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
