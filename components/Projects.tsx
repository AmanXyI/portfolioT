"use client";
import { useState } from "react";
import ImgCard from "./ui/ImgCard";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";

const portfolioContents = [
  {
    title: "Finance:Capital Asset Pricing Model (CAPM)",
    type: "project",
    imgAdd:
      "https://images.pexels.com/photos/11909386/pexels-photo-11909386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "https://capm-g948.onrender.com/",
    duration: "2023",
    desc: "Power of the Capital Asset Pricing Model (CAPM) for informed investment decisions and portfolio optimization across various sectors and industries.",
  },
  {
    title: "Finance:FMFX Forecasting Model",
    type: "project",
    imgAdd:
      "https://images.pexels.com/photos/11909386/pexels-photo-11909386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "https://colab.research.google.com/drive/1k9_vJeGeOZAXs7sfTG0Bn3z9H9dCVUyJ?usp=sharing/",
    duration: "2023",
    desc: "FMFX forecasting model utilizes advanced algorithms to predict future financial market movements with high accuracy, empowering investors with strategic insights for informed decision-making.",
  },
  {
    title: "Tech:API Development",
    type: "project",
    imgAdd:
      "https://images.pexels.com/photos/16039120/pexels-photo-16039120/free-photo-of-sunlit-rocks-on-sea-shore.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "https://tushar-fast-api.onrender.com/",
    duration: "2023",
    desc: "CRUD operations, data validation, database migration management, user auth, and deployment guidance for secure, scalable applications.",
  },
  {
    title: "Data Analysis on Mutual Funds",
    type: "project",
    imgAdd:
      "https://images.pexels.com/photos/16039120/pexels-photo-16039120/free-photo-of-sunlit-rocks-on-sea-shore.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "https://colab.research.google.com/drive/19di2K4hyvozqmO3S0apcCw8nQNkiADv6#scrollTo=Umu8xUX8GO4Q/",
    duration: "2023",
    desc: "Comprehensive data including basic info, financial metrics, ESG scores, performance, and more for 57,603 Mutual Funds ",
  },
  {
    title: "AI Certification",
    type: "certification",
    imgAdd:
      "https://images.pexels.com/photos/16039120/pexels-photo-16039120/free-photo-of-sunlit-rocks-on-sea-shore.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "https://aslapapi.aicte-india.org/files/reports/pdf/Report_Generated_126575_1649351625.pdf/",
    duration: "2022",
    desc: "Achieved certification accredited by the AICTE with a score of 4 out of 5, demonstrating proficiency in Artificial Intelligence and Machine Learning.",
  },
  {
    title: "ESG Framework & Risk Management",
    type: "certification",
    imgAdd:
      "https://images.pexels.com/photos/20753710/pexels-photo-20753710/free-photo-of-sunrise-in-berlin-on-film.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "https://www.credential.net/314cad8f-9a67-4203-af1e-5fe466584d92/",
    duration: "2023",
    desc: "ESG&apos;s impact on risk management and corporate strategy, exploring its components, stakeholder expectations, and real-world applications through case studies.",
  },
  {
    title: "Software Project Management",
    type: "certification",
    imgAdd:
      "https://images.pexels.com/photos/16039120/pexels-photo-16039120/free-photo-of-sunlit-rocks-on-sea-shore.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "https://archive.nptel.ac.in/content/syllabus_pdf/110104073.pdf/",
    duration: "2022",
    desc: "Project management concepts for managing big projects efficiently under cost and time constraints, applicable to Software Industry. See contents of this course by clicking",
  },
  {
    title: "Financial Markets by Yale",
    type: "certification",
    imgAdd:
      "https://images.pexels.com/photos/20753710/pexels-photo-20753710/free-photo-of-sunrise-in-berlin-on-film.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "https://www.credential.net/314cad8f-9a67-4203-af1e-5fe466584d92/",
    duration: "2023",
    desc: " Behavioral Finance, Financial Markets, Finance, and Behavioral Economics through Yale &apos; s comprehensive program.",
  },
  {
    title: "Supplychain Logistics Certification",
    type: "certification",
    imgAdd:
      "https://images.pexels.com/photos/20753710/pexels-photo-20753710/free-photo-of-sunrise-in-berlin-on-film.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "https://www.coursera.org/account/accomplishments/verify/5U5H23ZW7P3A?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=course/",
    duration: "2022",
    desc: "Learnt Warehouse Management, Logistics Planning, Supply Chain, and Inventory through Rutgers University.",
  },
  {
    title: "IBM Blockchain developer",
    type: "certification",
    imgAdd:
      "https://images.pexels.com/photos/20753710/pexels-photo-20753710/free-photo-of-sunrise-in-berlin-on-film.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "https://courses.cognitiveclass.ai/certificates/2c762ac030304f809cf6587177ca0689",
    duration: "2022",
    desc: "Learnt Warehouse Management, Logistics Planning, Supply Chain, and Inventory through Rutgers University.",
  },
  {
    title: "Accounting Fundamentals",
    type: "certification",
    imgAdd:
      "https://images.pexels.com/photos/20753710/pexels-photo-20753710/free-photo-of-sunrise-in-berlin-on-film.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "https://www.credential.net/828fc95c-2772-4b51-b4a2-ff79f8259a23/",
    duration: "2023",
    desc: "Accounting Fundamentals and crafting Income Statements, Balance Sheets, and Cash Flow Statements from scratch by CFI.",
  },

  {
    title: "Blog:Coming soon",
    type: "blog",
    imgAdd:
      "https://images.pexels.com/photos/16441222/pexels-photo-16441222/free-photo-of-sunset-in-the-clouds.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "/",
    duration: "2024",
    desc: "Blog coming soon.",
  },
];

const Projects = () => {
  const [selection, setSelection] = useState("all");
  let filteredArr = [...portfolioContents];
  if (selection !== "all") {
    filteredArr = portfolioContents.filter((item) => {
      if (selection === item.type) {
        console.log(item.type);

        return item;
      }
    });
  }

  return (
    <AnimatePresence>
      <div
        id="portfolio"
        className="flex flex-col items-center bg-navy-blue px-align pt-[10rem] pb-[10rem]"
      >
        <article className="text-center w-[35rem]">
          <p className="text-sm font-semibold text-dark-indigo">PORTFOLIO</p>
          <h1 className="mt-1 mb-3 text-3xl font-semibold">
            My Works & Projects
          </h1>
          <p className="text-[1rem] font-semibold text-grey-text">
            Over the past two years, I&apos;ve been deeply involved in project
            management and product development, refining strategies and
            navigating challenges with dedication. Simultaneously, I&apos;ve
            connected with passionate individuals in finance, technology, and
            data analysis, sharing insights and fostering growth. From guiding
            API development to exploring AI certifications, these experiences
            have shaped our journey toward success.
          </p>
        </article>
        <div className="flex gap-8 mt-16 ">
          <button
            className={twMerge(
              // "px-6 py-2 rounded-lg text-md bg-dark-indigo",
              "relative inline-flex h-12 overflow-hidden rounded-md p-[1px] ",
              selection === "all"
                ? "outline-none ring-2 ring-slate-400 ring-offset-1 ring-offset-slate-50"
                : ""
            )}
            onClick={() => setSelection("all")}
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex items-center justify-center w-full h-full px-4 py-1 text-sm font-medium text-white rounded-md cursor-pointer bg-slate-950 backdrop-blur-3xl">
              All
            </span>
          </button>
          <button
            className={twMerge(
              // "px-6 py-2 rounded-lg text-md bg-dark-indigo",
              "relative inline-flex h-12 overflow-hidden rounded-md p-[1px] ",
              selection === "project"
                ? "outline-none ring-2 ring-slate-400 ring-offset-1 ring-offset-slate-50"
                : ""
            )}
            onClick={() => setSelection("project")}
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex items-center justify-center w-full h-full px-4 py-1 text-sm font-medium text-white rounded-md cursor-pointer bg-slate-950 backdrop-blur-3xl">
              Projects
            </span>
          </button>
          <button
            className={twMerge(
              // "px-6 py-2 rounded-lg text-md bg-dark-indigo",
              "relative inline-flex h-12 overflow-hidden rounded-md p-[1px] ",
              selection === "certification"
                ? "outline-none ring-2 ring-slate-400 ring-offset-1 ring-offset-slate-50"
                : ""
            )}
            onClick={() => setSelection("certification")}
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex items-center justify-center w-full h-full px-4 py-1 text-sm font-medium text-white rounded-md cursor-pointer bg-slate-950 backdrop-blur-3xl">
              Certifications
            </span>
          </button>
          <button
            className={twMerge(
              // "px-6 py-2 rounded-lg text-md bg-dark-indigo",
              "relative inline-flex h-12 overflow-hidden rounded-md p-[1px] ",
              selection === "blog"
                ? "outline-none ring-2 ring-slate-400 ring-offset-1 ring-offset-slate-50"
                : ""
            )}
            onClick={() => setSelection("blog")}
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex items-center justify-center w-full h-full px-4 py-1 text-sm font-medium text-white rounded-md cursor-pointer bg-slate-950 backdrop-blur-3xl">
              Blogs
            </span>
          </button>
        </div>
        <motion.div className="grid items-start grid-cols-4 gap-10 mt-10 duration-300">
          {filteredArr.map((item, index) => {
            return (
              <ImgCard
                key={index}
                title={item.title}
                imgAdd={item.imgAdd}
                link={item.link}
                duration={item.duration}
                desc={item.desc}
              />
            );
          })}
          {/* <ImgCard
          title="Project"
          imgAdd="https://images.pexels.com/photos/11909386/pexels-photo-11909386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          link="/"
          duration="2020"
          desc="User-friendly application."
        /> */}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
export default Projects;
