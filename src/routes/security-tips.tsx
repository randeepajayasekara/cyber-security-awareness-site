import { AuroraBackground } from "@/components/animations/aurora-background";
import { CSecurityPractisesGrid } from "@/components/layouts/cybersecurity-practises-grid";
import { HeroHighlight } from "@/components/animations/hero-highlight";
import { SiteFooter } from "@/components/layouts/site-footer";
import { useScroll, useTransform, motion } from "framer-motion";
import { GoogleGeminiEffect } from "@/components/animations/gemini-effect";
import React from "react";

export default function SecurityTipsPage() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  return (
    <div>
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 justify-center px-4"
        >
          <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
            <h1 className="text-4xl md:text-7xl py-4 font-bold text-center bg-clip-text text-transparent bg-gray-800 dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400 bg-opacity-50">
              Cybersecurity Tips
              <br /> & Cyber Hygiene.
            </h1>
            <p className="mt-4 font-normal text-base text-gray-600 dark:text-neutral-300 max-w-lg text-center mx-auto">
              This page aims to equip you with essential knowledge and practical
              tips to safeguard yourself and your data in the ever-evolving
              digital landscape.
            </p>
          </div>
        </motion.div>
      </AuroraBackground>

      <div>
        <HeroHighlight>
          <motion.h1>
            <div className="pt-12">
              <h4 className="text-2xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-semibold text-black dark:text-white">
                Essential Cybersecurity Practices and Hygienes
              </h4>

              <p className="text-sm lg:text-base  max-w-2xl my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
                A solid security program requires critical fundamentals,
                including essential elements of cybersecurity.
              </p>
            </div>
          </motion.h1>
        </HeroHighlight>
        <CSecurityPractisesGrid />
      </div>

      <div
      className="h-[400vh] bg-white dark:bg-[#0B0B0F] w-full rounded-md relative pt-40 overflow-clip"
      ref={ref}
    >
      <GoogleGeminiEffect
        pathLengths={[
          pathLengthFirst,
          pathLengthSecond,
          pathLengthThird,
          pathLengthFourth,
          pathLengthFifth,
        ]}
      />
    </div>

      <div>
        <SiteFooter />
      </div>
    </div>
  );
}
