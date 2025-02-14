import { SparklesCore } from "@/components/animations/sparkles";
import { Cover } from "@/components/animations/cover";
import { Spotlight } from "@/components/animations/spotlight";
import { WorldMap } from "@/components/animations/world-map";
import { MacbookScroll } from "@/components/animations/macbook-scroll";
import { FlipWords } from "@/components/animations/flip-words";
import { FeaturesSection } from "@/components/layouts/feature-section";
import { OverviewSection } from "@/components/layouts/overview-section";
import { CallToActionGrid } from "@/components/layouts/call-to-action-grid";
import { SiteFooter } from "@/components/layouts/site-footer";
import { motion } from "framer-motion";

export default function Home() {

  const flipSentenceQueries = ["There are around 2,244 cyber attacks per day.", "Which is about one attack every 39 seconds.", "Global cyber attacks increased by 30% in Q2 2024.", "Reaching 1,636 weekly attacks per organization."];

  return (
    <div className="bg-white dark:bg-black h-screen">
        <Spotlight
          className="-top-40 left-0 md:left-0 md:-top-40"
          fill="aqua"
        />
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.5,
          duration: 1.5,
          ease: "easeInOut",
        }}
      >
        <div className="h-[40rem] w-full bg-white dark:bg-[#0B0B0F] flex flex-col items-center justify-center overflow-hidden rounded-md">
          <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-gray-600 dark:text-gray-400 relative">
            Navigate the Digital World <Cover>Confidently</Cover>
          </h1>
          <div className="w-[40rem] h-40 relative">
            {/* Gradients */}
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

            {/* Core component */}
            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={1200}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />

            {/* Radial Gradient to prevent sharp edges */}
            <div className="absolute inset-0 w-full h-full bg-white dark:bg-[#0B0B0F] [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
          </div>
        </div>
      </motion.div>

      <div className="overflow-hidden dark:bg-[#0B0B0F] bg-white w-full" id="intro">
      <MacbookScroll
        title={
          <span>
            Do you know? <br /> <FlipWords words={flipSentenceQueries} className="font-bold text-center"/>
          </span>
        }

        src={`https://techterms.com/img/xl/macos_243-3.jpg`}
        showGradient={false}
      />
    </div>

    <div id="problem-statement">
      <FeaturesSection />
    </div>

    <div id="overview">
      <OverviewSection />
    </div>

    <div className="w-full bg-white dark:bg-[#0B0B0F] flex flex-col items-center justify-center overflow-hidden rounded-md">
        <WorldMap
          dots={[
            {
              start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
              end: { lat: -10.9731, lng: 80.7718 }, // Colombo
            },
            {
              start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
              end: { lat: -10.9731, lng: 80.7718 }, // Colombo
            },
            {
              start: { lat: 51.5074, lng: -0.1278 }, // London
              end: { lat: -10.9731, lng: 80.7718 }, // Colombo
            },
            {
              start: { lat: -10.9731, lng: 80.7718 }, // Colombo
              end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
            },
            {
              start: { lat: 28.6139, lng: 77.209 }, // New Delhi
              end: { lat: -10.9731, lng: 80.7718 }, // Colombo
            },
          ]}
        />
    </div> 

    <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.5,
          duration: 1.5,
          ease: "easeInOut",
        }}
      >
      <div id="cta-grid">
      <CallToActionGrid />
      </div>
    </motion.div>

    <SiteFooter />

      
    </div>
  );
}
