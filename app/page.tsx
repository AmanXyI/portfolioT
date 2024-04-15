import About from "@/components/About";
import Career from "@/components/Career";
import ContactMe from "@/components/ContactMe";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ParallaxAbout from "@/components/ParallaxAbout";
import Projects from "@/components/Projects";

import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import PostHogClient from "./posthog";

export default async function Home() {
  const posthog = PostHogClient();
  const flags = await posthog.getAllFlags(
    "user_distinct_id" // replace with a user's distinct ID
  );
  await posthog.shutdown();
  // posthog.capture("my event", { property: "value" });
  return (
    <div className="bg-[#1e293b]  text-white  text-xl ">
      <Hero />
      <About />
      <Career />
      <Projects />
      <ParallaxAbout />
      <ContactMe />
      <Footer />
    </div>
  );
}
