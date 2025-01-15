import React from "react";
import { cn } from "@/lib/utils";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { IconBrandYoutubeFilled } from "@tabler/icons-react";
import { Link } from 'react-router-dom';

import { CalendarIcon } from "lucide-react"
 
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
 

export function FeaturesSection() {
  const features = [
    {
      title: "Ransomware",
      description:
        "Malware that encrypts data and demands a ransom payment to decrypt it.",
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800",
    },
    {
      title: "Phishing Attacks",
      description:
        "Emails or messages designed to trick users into revealing sensitive information like passwords or credit card details.",
      skeleton: <SkeletonTwo />,
      className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
    },
    {
      title: "Data Breaches",
      description:
        "Unauthorized access to sensitive personal or corporate data.",
      skeleton: <SkeletonThree />,
      className:
        "col-span-1 lg:col-span-3 lg:border-r  dark:border-neutral-800",
    },
    {
      title: "Malware",
      description:
        "Malicious software like viruses, worms, and Trojans that can disrupt systems and steal data.",
      skeleton: <SkeletonFour />,
      className: "col-span-1 lg:col-span-3 border-b lg:border-none",
    },
  ];
  return (
    <div className="relative py-10 lg:py-40 max-w-7xl mx-auto bg-white dark:bg-[#0B0B0F]">
      <div className="px-8">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
          Problem Statement | Common Threats
        </h4>

        <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
          Growing cybersecurity threats faced by Sri Lankans.
        </p>
      </div>

      <div className="relative ">
        <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md dark:border-neutral-800">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className=" h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className=" max-w-5xl mx-auto text-left tracking-tight text-black dark:text-white text-xl md:text-2xl md:leading-snug">
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base  max-w-4xl text-left mx-auto",
        "text-neutral-500 text-center font-normal dark:text-neutral-300",
        "text-left max-w-sm mx-0 md:text-sm my-2"
      )}
    >
      {children}
    </p>
  );
};

export const SkeletonOne = () => {
  return (
    <div className="relative flex py-8 px-2 gap-10 h-full">
      <div className="w-full  p-5  mx-auto bg-white dark:bg-[#0B0B0F] shadow-2xl group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2  ">
          {/* TODO */}
          <img
            src="https://e3.365dm.com/17/12/1600x900/skynews-wannacry-ransomware_4186730.jpg?20171219071029"
            alt="header"
            width={800}
            height={800}
            className="h-full w-full aspect-square object-cover object-left-top rounded-sm"
          />
        </div>
      </div>

      <div className="absolute bottom-0  inset-x-0 h-60 bg-gradient-to-t from-white dark:from-[#0B0B0F] via-white dark:via-[#0B0B0F] to-transparent w-full pointer-events-none" />
      <div className="absolute top-0  inset-x-0 h-60 bg-gradient-to-b from-white dark:from-[#0B0B0F] via-transparent to-transparent w-full pointer-events-none" />
    </div>
  );
};

export const SkeletonThree = () => {
  return (
    <Link
      to="https://youtu.be/AkwATHBndFA?si=zJAJPJpKLznLOzoT"
      target="__blank"
      className="relative flex gap-10  h-full group/image"
    >
      <HoverCard>
        <div className="w-full  mx-auto bg-transparent dark:bg-transparent group h-full">
          <div className="flex flex-1 w-full h-full flex-col space-y-2  relative">
            {/* TODO */}
            <HoverCardTrigger>
              <IconBrandYoutubeFilled className="h-20 w-20 absolute  inset-0 text-red-500 m-auto " />
              <img
                src="https://arkservices.ie/wp-content/uploads/2022/01/Cyber-Essentials.png"
                alt="header"
                width={800}
                height={800}
                className="h-full w-full aspect-square object-cover object-center rounded-sm blur-none group-hover/image:blur-md transition-all duration-200"
              />
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="flex justify-between space-x-4">
                <Avatar>
                  <AvatarImage src="https://icons.iconarchive.com/icons/papirus-team/papirus-apps/512/youtube-icon.png" />
                  <AvatarFallback>YT</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">YouTube</h4>
                  <p className="text-sm">
                    Social Accounts of @SriLankaPoliceOfficial and @documents.gov.lk were breached by hackers
                  </p>
                  <div className="flex items-center pt-2">
                    <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
                    <span className="text-xs text-muted-foreground">
                      Incident on 31st December, 2024
                    </span>
                  </div>
                </div>
              </div>
      </HoverCardContent>
          </div>
          </div>
      </HoverCard> 
    </Link>
  );
};

export const SkeletonTwo = () => {
  const images = [
    "https://www.researchgate.net/publication/283186527/figure/fig2/AS:668917911519246@1536493866533/Screenshot-of-phishing-site-along-with-footer-and-copyright-section.png",
    "https://media.kasperskycontenthub.com/wp-content/uploads/sites/43/2018/05/18131729/spam-and-phishing-in-q1-2018-03.png",
    "https://cdn.prod.website-files.com/664e6b29f3ed49c2317db2f2/665e2eb90cf9d8557ea32a62_62df01cec06c92ca66f16bb4_Picture1-1.png",
    "https://media.kasperskycontenthub.com/wp-content/uploads/sites/43/2018/05/18131729/spam-and-phishing-in-q1-2018-01.png",
    "https://media.kasperskycontenthub.com/wp-content/uploads/sites/43/2018/05/18131729/spam-and-phishing-in-q1-2018-03.png",
  ];

  const imageVariants = {
    whileHover: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
    whileTap: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
  };
  return (
    <div className="relative flex flex-col items-start p-8 gap-10 h-full overflow-hidden">
      {/* TODO */}
      <div className="flex flex-row -ml-20">
        {images.map((image, idx) => (
          <motion.div
            variants={imageVariants}
            key={"images-first" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
          >
            <img
              src={image}
              alt="webgl_images"
              width="500"
              height="500"
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
            />
          </motion.div>
        ))}
      </div>
      <div className="flex flex-row">
        {images.map((image, idx) => (
          <motion.div
            key={"images-second" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            variants={imageVariants}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
          >
            <img
              src={image}
              alt="webgl_images"
              width="500"
              height="500"
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
            />
          </motion.div>
        ))}
      </div>

      <div className="absolute left-0  inset-y-0 w-20 bg-gradient-to-r from-white dark:from-[#0B0B0F] to-transparent  h-full pointer-events-none" />
      <div className="absolute right-0 inset-y-0 w-20 bg-gradient-to-l from-white dark:from-[#0B0B0F]  to-transparent h-full pointer-events-none" />
    </div>
  );
};

export const SkeletonFour = () => {
  return (
    <div className="h-60 md:h-60  flex flex-col items-center relative bg-transparent dark:bg-transparent mt-10">
      
      <img
              src="https://cdn-icons-png.flaticon.com/512/10098/10098868.png"
              alt="malware_symbol"
              className="absolute -right-10 md:-right-10 -bottom-80 md:-bottom-72"
            />
    </div>
  );
};

export const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        // longitude latitude
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
      className={className}
    />
  );
};
