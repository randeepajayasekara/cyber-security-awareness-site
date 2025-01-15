"use client";
import { cn } from "@/lib/utils";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconSchool,
  IconTransfer,
  IconBrandGoogleFilled,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

export function CoursesGrid() {
  return (
    <div>
      <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={cn("[&>p:text-lg]", item.className)}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

const SkeletonOne = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-white dark:bg-black"
      >
        <img src="https://static.vecteezy.com/system/resources/thumbnails/046/437/277/small/udemy-transparent-logo-free-png.png" className="h-8 w-8 rounded-full object-cover flex-shrink-0" />
        <div className="w-full h-4 text-left text-black dark:text-white text-sm">Risk Assessment</div>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <div className="w-full h-4 text-center text-black dark:text-white text-sm">Threat Mitigation</div>
        <img src="https://static.vecteezy.com/system/resources/thumbnails/046/437/277/small/udemy-transparent-logo-free-png.png" className="h-8 w-8 rounded-full object-cover flex-shrink-0" />
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white dark:bg-black"
      >
        <img src="https://static.vecteezy.com/system/resources/thumbnails/046/437/277/small/udemy-transparent-logo-free-png.png" className="h-8 w-8 rounded-full object-cover flex-shrink-0" />
        <div className="w-full h-4 text-left text-black dark:text-white text-sm">Security Protocols</div>
      </motion.div>
    </motion.div>
  );
};
const SkeletonTwo = () => {
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: "100%",
      transition: {
        duration: 0.2,
      },
    },
    hover: {
      width: ["0%", "100%"],
      transition: {
        duration: 2,
      },
    },
  };
  const arr = new Array(6).fill(0);
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
     <img src="https://d15cw65ipctsrr.cloudfront.net/b3/fb5ab03e844adc944e571555a05930/IBM-cybersecurity-PC.png" className="w-full h-full rounded-lg object-cover"/>
    </motion.div>
  );
};
const SkeletonThree = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
      style={{
        background:
          "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
        backgroundSize: "400% 400%",
      }}
    >
      <img className="h-full w-full rounded-lg" src="https://storage.googleapis.com/grow-with-goog-publish-prod-media/images/Cyber-hero-1232x693.scale-100.format-webp.webp" />
    </motion.div>
  );
};

const items = [
  {
    title: "Udemy",
    description: (
      <span className="text-sm">
        Top Rated online course rated by experts.
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <IconSchool className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "IBM",
    description: (
      <span className="text-sm">
        Launch your career as a cybersecurity analyst. No degree or prior experience required. Via <strong>Coursera</strong>
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <IconTransfer className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Google Cybersecurity Certificate",
    description: (
      <span className="text-xs">
        Cybersecurity certificate program provides the skills need for an entry-level job in cybersecurity, On <strong>Coursera</strong>
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <IconBrandGoogleFilled className="h-4 w-4 text-neutral-500" />,
  },


];
